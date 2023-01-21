const inputScore = prompt("세 과목의 점수를 입력해주세요: ");
const score= inputScore.split(" ");

a=Number(score[0])+Number(score[1])+Number(score[2]);

console.log(Math.floor(a/3));
