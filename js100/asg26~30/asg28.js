const inputString=prompt("2-gram을 하기위해 입력해주세요:");

console.log(inputString.length);

for(let i=0;i<inputString.length-1;i++){
    console.log(inputString[i],inputString[i+1]);


}