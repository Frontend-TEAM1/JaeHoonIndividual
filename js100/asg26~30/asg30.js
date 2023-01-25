
const sentence=prompt("숨어있는 문자를 찾기위해 문자를 입력해주세요 -> ");

const toFind= prompt("찾을 문자를 입력해주세요 -> ");

const firstInput=sentence.split(" ");
//console.log(firstInput.length);//3
let matchCount=0;
let matchWord=0;

for(let i=0;i<firstInput.length; i++){
   
    for(let j=0;j<firstInput[i].length; j++){

       for(let k=0;k<firstInput[i].length;k++){
        if(toFind[j]==firstInput[i][k]){
            matchCount+=1;

            if(toFind[j+1]!=firstInput[i][k+1]){
                matchCount-=1;
            
        }if(matchCount>0){matchWord=i ;}
       }
      }
    }
    
   

}
console.log(firstInput[matchWord].length-matchCount);


