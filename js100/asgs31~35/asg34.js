const numbers = prompt("키가 주어지면 제대로 순서대로 모였는지 확인해줍니다. : ").split(" ").map(num => parseInt(num));

let isSorted = true;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    isSorted= false;
  }
}

if (isSorted) {
  console.log("YES");
}else {
  console.log("NO");
}
