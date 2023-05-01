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

const example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];

function flatten(data) {
  let output = []
  for (item in data) {
    console.log(data[item])
    // 쓰고보니까 typeof 에 array가 어딨나. object 로 나오지않나
    if (Array.isArray(data[item])) {
      console.log(flatten(data[item]))
      // output.push(flatten(data[item]))
    } else {
      // console.log(data[item])
      output.push(data[item])
    }
  }
  console.log('나는 아웃풋' + output)

  return output
}

console.log(flatten(example))