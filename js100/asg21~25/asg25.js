
const inputRadius=prompt(" 원의 넓이를 구하기 위해 반지름을 입력해주세요: ");
function areaCircle(inputR){
    if(Number.isInteger(inputR)){
        const area= inputR*inputR*3.14;
        console.log(area);
    }else{
        console.log("반지름 길이를 정수로 입력해주세요.");
    }

}

areaCircle(Number(inputRadius));

