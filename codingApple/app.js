import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

/*
페이지 전환이 쉬움 (spa)
컴포넌트로 html재사용 편리
데이터가 html에 자동반영
jsx 문법
class 넣을땐 className
변수 가져올땐 {변수명} 이렇게 사용 거의 모든곳에 넣을 수 있음.
jsx로 style 넣을땐 ex)  style ={ {color: 'red', fontSize:'16px'} }
컴포넌트 만드는 법
다른 함수 밖에 function만들고
return( )안에 html담기
<함수명></함수명> 쓰기
컴포넌트 용도 :
반복적인 html축약
큰 페이지들
자주 변경되는 html UI들 
*/

function App() {
  //function첫글자는 대문자로

  let post ='강남 우동 맛집';
  let [글제목, changeTitle]=useState( ['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  
  //a는 state에 보관했던 자료나옴. 여기선 '남자 코트 추천'
  //b는 state변경 도와주는 함수

  //destructing 문법
  /*
  왜 굳이 state를 쓰는가? 
  state에 있던 내용을 변경하면 자동으로 html 재랜더링해줌.
  즉각적으로 변경된 내용을 반영하고 싶을 때 state사용.
  자주 변경되는 내용들 위주로
  기존 state== 신규 state의 경우 변경 안해줌 굳이 변경할 필요없다고 판단.
  */
 /*
 [...array] : ...은 괄호를 벗기고 다시 씌워주는 역할. 화살표도 달라짐.
 state가 array/object일때는 독립적으로 카피본을 만들어서 수정해야함. 딥 카피
  */

  let[liked,plusLiked] = useState(0);
  //변경해주는 함수 써줘야 재랜더링 잘됨.
  

  function likeButton(){}
  // onClick={}안에는 함수 넣어야함.


  return (
    <div className="App">
     <div className="black-nav">
      <h4>React Blog</h4>
     </div>
     <button onClick={()=>{
      let copy =[...글제목];
      copy[0]='여자 코트 추천';
      changeTitle(copy);
      }}> 글 수정</button>

     <div className ="list">
      <h4>{글제목[0]} <span onClick={()=>plusLiked(liked+1)}>👍</span>{liked}</h4>
      <p>2월 17일 발행</p>
     </div>

     <div className ="list">
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
     </div>
     <div className ="list">
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
     </div>
     
     <Modal></Modal>
     

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
     </div>

  )
}

export default App;
