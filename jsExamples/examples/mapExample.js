// 1. 배열을 사용하여, 각 요소의 제곱을 구하는 map 함수를 만들어주세요.
let numbers1 = [1, 2, 3, 4, 5];

// 2. 각 요소를 객체의 프로퍼티로 사용하는 map 함수를 작성하세요.

let numbers2 = [1, 2, 3, 4, 5];

//3.다음 배열을 사용하여, 각 요소의 길이를 구하는 map 함수를 만들어주세요.

let words = ["apple", "banana", "cherry"];

//4.배열을 객체로 변환하는 함수를 만들어주세요. 각 요소는 키-값 쌍으로 구성되어야 합니다.
// 키는 요소의 값, 값은 요소의 인덱스입니다.
/*
[
    { apple: 0 },
    { banana: 1 },
    { cherry: 2 }
]
*/

//주어진 객체배열의 각 객체에서 특정 프로퍼티를 추출하여 
//배열로 반환하는 함수를 만들어주세요.

console.log(extractProperty([{ name: "Lee", age: 20 }, { name: "Yang", age: 21 }, { name: "Koo", age: 22 }], "name"));
// ["Kim", "Yang", "Koo"]