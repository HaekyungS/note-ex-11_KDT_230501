// example = [[1,2,3],[4,[5,6]],7,[8,9]]
// def flatten(data):
//     output = []
//     for item in data:
//         if typeof(item) == list:
//             output+=flatten(item)
//         else:
//             output.append(item)
//     return output
// print(flatten(example))

// 우선 예상되는 뉘앙스 그대로 작성해보기

const example=[["가","나","다"],["라",["마","바"]],"사",["아","자"]];

function flatten(data){
  let output=[]
  for(item in data){
    console.log('나는 아이템'+item)
    // 쓰고보니까 typeof 에 array가 어딨나. object 로 나오지않나
    if(Array.isArray(item)){
      console.log('나는 재귀함수를 실행한'+flatten(item))
      output +=flatten(item)
      console.log('나는 아웃풋'+output)
    }else{
      console.log(item)
      output.push(item)
    }
  }
  return output
}

console.log(flatten(example))