from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/")
def hello():
    message = request.args.get('message')
    return message

