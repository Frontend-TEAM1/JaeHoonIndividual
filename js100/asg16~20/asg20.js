const inputNumber=prompt("두번째 숫자로 첫번째 숫자를 나눌 예정입니다. 숫자를 입력해주세요: ");

const nums= inputNumber.split(" ");
firstNum=Number(nums[0]);
secondNum=Number(nums[1]);

console.log( "몫: " ,firstNum/secondNum, "나머지: ",firstNum%secondNum);