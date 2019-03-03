from .rules import RuleSet, Rule
from .model import run_on_model

# quickr package

def suggest(params={}):
    if not params:
        raise ValueError("no parameters")

    rules = RuleSet(rules=[
        Rule("Hello {sender}, my name is {name}."),
        Rule("Hello, my name is {name}."),
    ])

    return "TODO: unimplemented"


def get_responses(message: str, amount: int = 3) -> list:
    return ['qwdqwd', 'qwdqwd', 'qqwdqwd']
    # TODO: remove comment once the shared library is working
    # return run_on_model('../../model/smartreply.tflite')[:amount]

