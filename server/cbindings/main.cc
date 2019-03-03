#include "tf_wrapper.h"
#include <iostream>

int main() {
  const char* w_1 = "okay";
  const char* w_2 = "yes";
  const char* w_3 = "null";
  const char* words[] = { w_1, w_2, w_3 };

  ModelStorage* modelPtr = reinterpret_cast<ModelStorage*>(loadModel("/Users/jacob/Documents/Stacshax5/StacsHack5/model/smartreply.tflite", words, 3));

  const char* in_1 = "How";
  const char* in_2 = "are";
  const char* in_3 = "you?";
  const char* input[] = { in_1, in_2, in_3 };

  PredictionOutput* output = reinterpret_cast<PredictionOutput*>(predict(modelPtr, input, 3));

  for (int i = 0; i < output->results_length; i++) {
    std::cout << output->results[i]->text << " => " << output->results[i]->score << std::endl;
  }
}
