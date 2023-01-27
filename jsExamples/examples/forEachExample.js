/*
1. forEach 메서드를 사용하여 다음 배열의 각 요소를 출력해주세요
*/
const numbers = [1, 2, 3, 4, 5];

/*
2.
forEach 메서드를 사용하여 다음 배열에서 
특정 속성 값을 가진 모든 개체의 배열을 반환해주세요.

예시: make가 'Honda'객체인 배열들만 출력.
{ make: 'Honda', model: 'Civic', year: 2020 }, { make: 'Honda', model: 'Accord', year: 2018 }
*/
const cars1 = [
  { make: 'Honda', model: 'Civic', year: 2020 },
  { make: 'Toyota', model: 'Corolla', year: 2019 },
  { make: 'Honda', model: 'Accord', year: 2018 },
  { make: 'Toyota', model: 'Camry', year: 2017 }
];

/*
3.
 cars 배열의 각 객체들의 price 프로퍼티를 추출하여
  그 값들을 모두 더한 값을 계산해주세요.
map()과 reduce()를 사용합니다.
*/
const cars2 = [
    { make: 'Honda', model: 'Civic', year: 2020, price: 20000 },
    { make: 'Toyota', model: 'Corolla', year: 2019, price: 18000 },
    { make: 'Honda', model: 'Accord', year: 2018, price: 22000 },
    { make: 'Toyota', model: 'Camry', year: 2017, price: 17000 }
  ]