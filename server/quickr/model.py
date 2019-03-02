import tensorflow as tf

def run_on_model(model_path: str, message_data: str):
    interpreter = tf.lite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()

    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    input_shape = input_details[0]['shape']

    input_data = message_data.split(' ')

    interpreter.set_tensor(input_details[0]['index'], input_data)

    interpreter.invoke()

    output_data = interpreter.get_tensor(output_details[0]['index'])

    print(output_data)


def main():
    run_on_model("../../model/smartreply.tflite", "Hello how are you doing?")

if __name__ == "__main__":
    main()


