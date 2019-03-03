#include "tf_wrapper.h"

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
    PredictionOutput* output = new PredictionOutput();
    output->results_length = responses.size();
    for (int i = 0; i < responses.size(); i++) {
        Prediction* pred = new Prediction();
        pred->text = responses[i].GetText().data();
        pred->score = responses[i].GetScore();
        predictions[i] = pred;
    }
    output->results = predictions;

    return output;
}

extern "C" void unloadPrediction(void* ptr) {
    if (ptr != 0) {
        PredictionOutput* output = reinterpret_cast<PredictionOutput*>(ptr);
        
        for (int i = 0; i < output->results_length; i++) {
            delete output->results[i];
        }

        delete output;
    }
}

extern "C" void unload(void* storage_ptr) {
    if (storage_ptr != 0) {
        ModelStorage* storage = reinterpret_cast<ModelStorage*>(storage_ptr);
        delete storage;
    }
}
