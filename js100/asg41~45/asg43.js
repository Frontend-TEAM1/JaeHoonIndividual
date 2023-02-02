function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);//몫
    }
    return binary;
  }
  
  let decimal = prompt("10진수 숫자를 입력헤주세요=>");
  console.log(decimalToBinary(decimal));

  /*

  13 %2 = 6...1
  6%2=  3...0
  3%2= 1...1
  1%2= 0...1

  */