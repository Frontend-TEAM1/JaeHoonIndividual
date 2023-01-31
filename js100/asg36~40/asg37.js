const names=prompt("학생들이 뽑은 후보들을 입력하면 받은 표 수를 출력해줍니다->").split(" ");
const counts=[];

for (const name of names){
    if(counts[name]){
        //이름이 이미 존재하면 +1
        counts[name]++;
    }else{
        //처음으로 나온 이름이면 counts[후보 이름]=1로 새 항목 만들어주기
        counts[name]=1;
    }
}

let maxStudent=" ";
let maxCount=0;

for(const name in counts){
    if(counts[name]>maxCount){
        maxStudent=name;
        maxCount=counts[name];
    }
}

console.log(`${maxStudent}(이)가 총 ${maxCount}표로 반장이 되었습니다. `)

if(1){console.log("1")}