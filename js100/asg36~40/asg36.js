const inputNum=prompt("숫자를 입력하면 그에 맞는 구구단을 출력해줍니다. ->");

let outputNum=0;
for(let i=0;i<9;i++){
    outputNum+=Number(inputNum)*(i+1);
    outputNum+=" ";
    
}
console.log(outputNum);


/*
const number=Number(inputNum);
const output=[];
for(let i=0;i<9;i++){
    output[i]=number*(i+1);
}
console.log(output);
*/

