from quickr import suggest

from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/api")
def hello():
    message = request.args.get('message')
    try:
        return suggest(message)
    except Exception as e:
        return "error: " + str(e)

