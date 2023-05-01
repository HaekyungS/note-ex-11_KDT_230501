example = [["가","나","다"],["라",["마","바"]],"사",["아","자"]]

# 함수실행
def flatten(data):
    # output 이라는 배열 준비 
    output = []

    # 매개변수를 for-in 문을 통해 값도출
    for item in data:

        # item 이 내가 생각하는 key 값이 아닌 value 값으로 담김을 확인
        print(item)

        # 만약에 item의 타입이 list 라면 ( 추측으론 list 는 배열아닐까) -> 배열맞는 것 같다.
        if type(item) == list:

            # output 배열에 재귀함수로 반복해서 담아주기.
            # ex. item 이 ["가","나","다"] 면 flatten(["가","나","다"]) 해서, 이건 배열이 아니니까 else 로 output 에 들어감.
            output+=flatten(item)
        else:
            output.append(item)
    return output
    
print(flatten(example))