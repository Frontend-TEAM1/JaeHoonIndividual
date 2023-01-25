const sentence=prompt("숨어있는 문자를 찾기위해 문자를 입력해주세요 -> ");

const toFind= prompt("찾을 문자를 입력해주세요 -> ");

const firstInput=sentence.split(" ");

for(let i=0;i<firstInput.length;i++){
    if(firstInput[i].indexOf(toFind)!=-1){
        console.log(firstInput[i].indexOf(toFind));
    }
    
};

//got an idea by CHAT GPT