from .rules import RuleSet, Rule

# quickr package

def suggest(params={}):
    if not params:
        raise ValueError("no parameters")

    rules = RuleSet(rules=[
        Rule("Hello {sender}, my name is {name}."),
        Rule("Hello, my name is {name}."),
    ])

    return "TODO: unimplemented"


