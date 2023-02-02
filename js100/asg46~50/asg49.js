const numbers = prompt("숫자를 공백기준으로 구분하여 입력해주세요").split(" ");
let max = Number(numbers[0]);

for (let i = 1; i < numbers.length; i++) {
  if (Number(numbers[i]) > max) {
    max = Number(numbers[i]);
  }
}

console.log("최댓값: " + max);