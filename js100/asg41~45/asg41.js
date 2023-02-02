const num = parseInt(prompt("소수 판별을 위한 숫자를 입력해주세요=>"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return ("No");
      }
    }
    return ("Yes");
  }
  

  console.log(isPrime(num));