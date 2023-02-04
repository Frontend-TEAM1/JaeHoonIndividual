import { useState } from "react";

function UseState(){
     
    //let count =0;

    const [count,setCount]= useState(0);

    /*
    useState는 변수를 react의 state로 관리하는 함수
    [변수명, 바꿀 수 있는 순수 함수]
    state값을 바꿀 수 있는건 두번째 오는 함수 뿐!

    let/const 변수명 =기본값;

    */


    const onAddNumber=()=>{
        //setCount((count)=>count++)로 하면 깊은복사여서 이전 count값 가져옴
       setCount(count+1);
      
       /*
       얘는 이 컴포넌트 자체를 랜더링 시킴
       따라서 랜더링 기준을 컴포넌트 나누기
       ex) 랜더링 최적화
        
       a컴포넌트가 랜더링될때 b컴포넌트는 랜더링될필요가 없으면
       서로 분리해놔야함.

       */
    };

    const onMinusNumber =()=>{
        setCount(count-1);
    };

    return(
        <div>
            <button onClick={onAddNumber}>+</button>
            {count}
            <button onClick={onMinusNumber}>-</button>
        </div>

    )

}

export default UseState; 