// 1
let numbers = [4, 2, 9, 1, 3, 6];
console.log(numbers.sort(function(a, b) { return a - b }));

// 2

let students = [
    { name: "John", grade: 8 },
    { name: "Jane", grade: 12 },
    { name: "Bob", grade: 9 }
  ];
  
  console.log(students.sort(function(a, b) { return a.grade - b.grade }));