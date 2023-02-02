let input=12345678910121314151617181920;
//prompt(" 숫자를 입력해주세요 => ")
let sum = 0;
while (input > 0) {
  sum += input % 10;
  input = Math.floor(input / 10);
}

console.log(sum);