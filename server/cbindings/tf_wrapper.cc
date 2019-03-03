#include "tensorflow/lite/model.h"
#include "tensorflow/lite/models/smartreply/predictor.h"

using tflite::custom::smartreply::GetSegmentPredictions;
using tflite::custom::smartreply::PredictorResponse;

struct ModelStorage {
    std::vector<std::string> backoff_list;
    std::unique_ptr<::tflite::FlatBufferModel> model;
};

struct Prediction {
    const char* text;
    float score;
};

static std::vector<std::string> castCharArrToStringVec(const char** input, const int input_length) {
    std::vector<std::string> vec = std::vector<std::string>();
    for (int i = 0; i < input_length; i++) {        
        vec.push_back(std::string(input[i]));
    }
    return vec;
}

extern "C" void* loadModel(const char* filename, const char** backoff_list, const int backoff_list_length) {
    ModelStorage* storage = new ModelStorage();

    storage->model = tflite::FlatBufferModel::BuildFromFile(filename);
    storage->backoff_list = castCharArrToStringVec(backoff_list, backoff_list_length);

    return storage;
}

extern "C" void* predict(void* storage_ptr, const char** input_words, const int input_text_length) {
    ModelStorage* storage = reinterpret_cast<ModelStorage*>(storage_ptr);
    if (storage == nullptr) return nullptr;

    std::vector<PredictorResponse> responses;
    GetSegmentPredictions(castCharArrToStringVec(input_words, input_text_length), *storage->model, storage->backoff_list, &responses);

    Prediction** predictions = new Prediction*[responses.size()];
    for (int i = 0; i < responses.size(); i++) {
        Prediction* pred = new Prediction();
        pred->text = responses[i].GetText().data();
        pred->score = responses[i].GetScore();
        predictions[i] = pred;
    }

    return predictions;
}

extern "C" void unload(void* storage_ptr) {
    if (storage_ptr != 0) {
        ModelStorage* storage = reinterpret_cast<ModelStorage*>(storage_ptr);
        delete storage;
    }
}