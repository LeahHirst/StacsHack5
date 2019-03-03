from quickr import suggest, get_responses

from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/api")
def hello():
    message = request.args.get('message')
    try:
        return suggest(message)
    except Exception as e:
        return "error: " + str(e)

@app.route("/get_responses")
def suggest_responses():
    message = request.args.get('message')
    amount = request.args.get('amount')

    try:
        if amount is None:
            sugg_resp = get_responses(message)
        else:
            sugg_resp = get_responses(message, amount)
    except Exception as e:
        return "error: " + str(e)

    return jsonify(responses=sugg_resp)

