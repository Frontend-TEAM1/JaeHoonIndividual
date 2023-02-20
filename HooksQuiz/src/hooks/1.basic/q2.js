import { useRef, useState } from "react";
import styled from "styled-components";

function Q2() {
  const [arr, setArr] = useState([]);
  const [forceRender, setForceRender] = useState(false);

  const inputRef = useRef();

  

   const onAddList = () => {
    const value = inputRef.current.value;
    setArr((prevArr) => [...prevArr, value]);
    setForceRender((prev) => !prev);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (arr.length === 0) {
      return;
    }
    setForceRender(true);
  };

  /* 
  state를 새로만들어서 따로 둬야함 보이는거 따로 force따로

  useRef를 이렇게 사용하는게 맞는지 모르겠습니다.



    문제2

    2-1)
        useRef에 관련한 문제입니다.

        추가 버튼을 누르면 input에 있던 value는 배열 arr에 추가됩니다.
        그러나, 추가 버튼을 누를 때마다 강제 랜더링 상태가 무조건 적으로 업데이트 됩니다.

        이러한 상황에서 제출버튼을 누르면

        지금까지 추가하였던 목록 배열(arr)이 
        <ul>의 li의 항목으로 추가되어야합니다.

        만약 제출되었을 때 아무런 항목이 없다면
        <p>제출된 목록이 없습니다</p>이 노출되어야하며

        제출된 항목이 있다면
        <ul>만 노출되어야 합니다

        이를 useRef의 특성을 고려하여 풀이해보세요 :)

    2-2)
        문제 2-2는 변경 버튼을 클릭하면
        p태그의 색상이 다른 색상으로 변경됩니다.
        
        이는 state를 사용하는 것이 가장 올바른 방법이지만
        어를 사용할 수 없는 어쩔 수 없는 상황에 놓여있습니다.

        따라서 useRef는 사용하여 해당 문구의 색상을 변경해보세요 :)
  */

        const colorRef = useRef(null);

        const changeColor = ()=> {
          colorRef.current.style.color='green'
        }

  return (
    <>
      <h1>문제2</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" ref={inputRef} />
          <button type="button" onClick={onAddList}>
            추가
          </button>
          <button type="submit">제출</button>
        </form>
        {!forceRender && <p>제출된 항목이 없습니다.</p>}
        {forceRender && (
          <ul>
            {arr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>문제 2-2</h2>
        <p ref={colorRef}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={changeColor}>변경</button>
      </div>
    </>
  );
}
export default Q2;

const Message=styled.p`
visibility: ${({visible})=> visible ? "visible" : "hidden"};
`

const S ={
  Message,

}
