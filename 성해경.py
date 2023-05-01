example = [["가","나","다"],["라",["마","바"]],"사",["아","자"]]
def flatten(data):
    output = []
    for item in data:
        if type(item) == list:
            output+=flatten(item)
        else:
            output.append(item)
    return output
print(flatten(example))