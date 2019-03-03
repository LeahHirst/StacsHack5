import tensorflow as tf
import ctypes

class Prediction:
    text: str
    score: float

    def __init__(self, text: str, score: float):
        self.text = text
        self.score = score


class PredictionOutput:
    predictions: list
    length: int

    def __init__(self, predictions: list):
        self.predictions = predictions
        self.length = len(predictions)


def call_c(L):
    arr = (ctypes.c_char_p * len(L))()

    for i in range(0, len(L)):
        arr[i] = bytes(L[i], 'utf-8')

    return arr, len(L)


def run_on_model(model: str, message_data: str):
    lib = ctypes.CDLL("../cbindings/tf_wrapper.so", mode=ctypes.RTLD_GLOBAL)

    strings = ['Ok', 'Yes', 'Null']
    strings_x, strings_x_length = call_c(strings)

    model = lib.loadModel(model, strings_x, strings_x_length)

    words, words_length = call_c(message_data.split(' '))

    ptr = lib.predict(model, words, words_length)

    print(ptr)

def main():
    run_on_model("../../model/smartreply.tflite", "Hello how are you doing")

if __name__ == "__main__":
    main()


