
function checkAlphabet(){
    const inputAlphabet=prompt("대문자 쓰기 시험을 위해 문자를 입력해주세요 : ");
    if(inputAlphabet.match(new RegExp(/^[A-Z]/))){
        console.log("YES");
    }else{
        console.log("NO");
    }
    
}

checkAlphabet();