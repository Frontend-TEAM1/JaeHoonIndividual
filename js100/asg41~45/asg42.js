const ab=prompt("2020년 a월 b일은 무슨요일인지 알기위해 입력해주세요 => ").split(" ");
const a=ab[0];
const b=ab[0];

function getDayOfWeek(a, b) {
    
    const date = new Date(2020, a - 1, b);
    //배열일에 a월에 접속하기 위해서는 a월에서 1을 빼야 인덱스가 해당월로
  
    const dayOfWeek = date.getDay();
  
    // Map the integer to a string representation of the day of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeekString = daysOfWeek[dayOfWeek];
  
    return dayOfWeekString;
  }
  
  // Example usage
 
  console.log(`${getDayOfWeek(a, b)}`);
  