
let limit=prompt("제한 무게를 입력해주세요.");

const people=prompt("함꼐한 친구들의 수를 입력해주세요 ");

let weight=[];
for(let i=0;i<people;i++){
    weight[i]=Math.floor(Math.random()*100+1);

}

console.log(weight);

let permit=0;
for(let i=0;i<people;i++){
    if(limit-weight[i]>=0){
        permit++;
    }
    limit-=weight[i];

}
console.log(permit);