function mergeSort(arr){
    if (arr.length <= 1){
      return arr;
        
    }
  
    //분할 과정
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while (left.length && right.length){
      if (left[0]<=right[0]){
        result.push(left.shift());
        /*
        만약 left의 첫 번째 원소가 right의 첫 번째 원소보다 작으면
        result 배열에 left의 첫 번째 원소를 넣고 
        left 배열의 첫 번째 원소를 제거
        배열의 맨 앞의 값 삭제 shift()
         */
      } else {
        result.push(right.shift());
        /*
        외의 경우, result 배열에 right의 첫 번째 원소를 넣고
         right 배열의 첫 번째 원소를 제거합니다.
         */
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(mergeSort(array));
