import { useRef, useState } from "react"


let count=0;

function UseRef(){
    const HtmlRef=useRef(null);
   // const count=useRef(0);

    
    const [isShow, setIsShow]=useState(false);

    const onChangeColor = () => {
        HtmlRef.current.style.color='red';
        count.current +=1;//이러면 랜더링되어도 값이 유지됨!

    };

    const onShowtadaBtn=()=>{
        setIsShow((prev)=>!prev);//이전값을 가져오고 이전값을 가져올때마다 반대로
      //prev=> set함수 인자의 callback 함수의 반환값

    };

  

    return(
        <>
        {isShow && <div>TADA!</div>}
        <div ref={HtmlRef}>COLORS</div>
        <button onClick={onChangeColor}>색상변경/ 카운트 추가</button>
        <button onClick={onShowtadaBtn}>SHOW</button> 
        

        </>



    )
}
export default UseRef