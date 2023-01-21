const n = prompt("문장이 입력되면 거꾸로 출력합니다. 문장을입력해주세요:")
const arr=[...n];
let copy= new Array(arr.length);

for(let i=0;i<arr.length;i++){
    copy[i]=arr[arr.length-i-1];
}
document.write(copy);
