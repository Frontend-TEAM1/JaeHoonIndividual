const studentNames = prompt("학생의 이름을 입력해주세요:  ").split(" ");
const mathScores = prompt("학생들의 점수를 입력해주세요 : ").split(" ");

const students = {};
for(let i = 0; i < studentNames.length; i++) {
  students[studentNames[i]] = mathScores[i];
}
console.log(students);
//chat gpt의 아이디어를 얻어서 만들었습니다.



