const sentence=prompt("문자열을 입력해주세요");

function changeCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char >= 'A' && char <= 'Z') {
        result += char.toLowerCase();
      } else if (char >= 'a' && char <= 'z') {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }
    return result;
  }

console.log(changeCase(sentence));