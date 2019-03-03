#ifndef TF_WRAPPER_H
#define TF_WRAPPER_H

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

struct PredictionOutput {
    Prediction** results;
    int results_length;
};

extern "C" void* loadModel(const char* filename, const char** backoff_list, const int backoff_list_length);

extern "C" void* predict(void* storage_ptr, const char** input_words, const int input_text_length);

extern "C" void unloadPrediction(void* ptr);

extern "C" void unload(void* storage_ptr);

#endif // TF_WRAPPER_H
