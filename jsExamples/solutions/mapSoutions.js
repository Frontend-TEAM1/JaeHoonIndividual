// 1
let numbers1 = [1, 2, 3, 4, 5];
let squared = numbers.map(function(number) {
    return number * number;
});
console.log(squared);

//2
let numbers2 = [1, 2, 3, 4, 5];
let numbersAsObject = numbers.map(function(number) {
    return {number: number};
});
console.log(numbersAsObject);

//3
let words = ["apple", "banana", "cherry"];
let wordLengths = words.map(function(word) {
    return word.length;
});
console.log(wordLengths);

//4
function arrayToObject(arr) {
    return arr.map(function(val, index) {
        return {[val]: index};
    });
}
console.log(arrayToObject(["apple", "banana", "cherry"]));
