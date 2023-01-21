const inputNumber= prompt("a의b승을 구하기 위해 a와 b를 입력해주세요: ");

const nums= inputNumber.split(" ");
a=Number(nums[0]);
b=Number(nums[1]);


console.log(Math.pow(a,b));