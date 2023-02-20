import { useEffect, useRef } from "react";

function Q3components({count,setCount}) {

  const timerRef = useRef();
  /*

  재랜더링되더라도 같은 메모리주소. 
  컴포넌트가 업데이트될때마다 새로운 타이머 ID가 생성되는 것을 방지
  
  timerRef.current에 setInterval함수의 리턴값으로 반환된 타이머ID저장.
  현재 실행중인 타이머의 ID가 저장.
  컴포넌트가 언마운트 될 때 타이머를 중지하거나, 다른 타이머로 교체 가능
  .
  언마운트:페이지가 닫혔을 경우
  컴포넌트가 DOM에서 삭제되는것.
  
  */

  useEffect(()=>{
    timerRef.current = setInterval(()=>{
      setCount((prev)=>prev+1);
    },2000);

    return()=>{
      clearInterval(timerRef.current);
      setCount(0);
    };
  },[]);
  // 언마운트시 타이머 제거.




  return <div> 🏃‍♂️ 줄넘기 {count}... ing </div>;
}
export default Q3components;
