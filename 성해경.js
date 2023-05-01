// example = [[1,2,3],[4,[5,6]],7,[8,9]]
// def flatten(data):
//     output = []
//     for item in data:
//         if type(item) == list:
//             output+=flatten(item)
//         else:
//             output.append(item)
//     return output
// print(flatten(example))

// 5번째 시도 : concat을 적용하여 완성.

const example=[[1,2,3],[4,[5,6]],7,[8,9]];

function flatten(data){
  let output=[]
  for(item in data){
    // console.log('나는 아이템'+item)
    // data[item] 이 배열이라면
    if(Array.isArray(data[item])){

      // output에 output과 flatten(data[item])의 결과배열을 합쳐서 담아준다.
      output=output.concat(flatten(data[item]))
    }else{
      // 배열이 아니라면 해당 값을 output에 담아준다.
      output.push(data[item])
    }
  }
  return output
}

console.log(flatten(example))
// 결과값 : [1,2,3,4,5,6,7,8,9]

// 이 코드의 동작 의의 : 배열 내의 배열이 있는 경우, 해당 배열들을 벗겨 배열내에 인덱스값들에 배열이 없도록 만드는 코드.

// 파이썬으로 작성한 것과 비교했을 때, 확연하게 javascript는 뭔가 조건이 번거롭다 느껴진다.
// 재귀함수로 하여 도출된 결과를 append 라는 메서드를 통해 배열에 바로 추가가 가능한 파이썬과 달리, 자바스크립트는 push 를 쓰면 return 배열이 그대로 들어가서 배열이 벗겨지지 않고, += 을 하면 그냥 리터럴이다.
// 내가 다른 방식을 모르는 걸 수 있겠지만, 지금 내가 아는 방식만으로 작성하였을 때는 자바스크립트가 파이썬보다 번거롭다 느껴집니다.