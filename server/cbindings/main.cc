#include "tf_wrapper.h"
#include <iostream>

int main(int argc, char** argv) {

  const char* fileDir = argv[1];

  // TODO:
  const char* w_1 = "okay";
  const char* w_2 = "yes";
  const char* w_3 = "null";
  const char* words[] = { w_1, w_2, w_3 };


  // input + 2 to get all the rest of the arguments
  ModelStorage* modelPtr = reinterpret_cast<ModelStorage*>(loadModel(fileDir, words, 3));

  PredictionOutput* output = reinterpret_cast<PredictionOutput*>(predict(modelPtr, const_cast<const char**>(argv) + 2, argc - 1));

  for (int i = 0; i < output->results_length; i++) {
    std::cout << output->results[i]->text << ", " << output->results[i]->score << std::endl;
  }
}
