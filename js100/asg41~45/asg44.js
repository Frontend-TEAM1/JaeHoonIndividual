
let input=prompt(" 숫자를 입력해주세요 => ")
let sum = 0;
while (input > 0) {
  sum += input % 10;
  input = Math.floor(input / 10);
}

console.log(sum);

/*

풀이 2


const input=prompt(" 숫자를 입력해주세요 => ").split("");
console.log(input)

let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);


*/