import logo from './logo.svg';
import './App.css';
import {useState} from 'react'                           ;



function App() {
  //function첫글자는 대문자로

  let post ='강남 우동 맛집';
  let[liked0,plusLiked0] = useState(0);
  let[liked1,plusLiked1] = useState(0);
  let[liked2,plusLiked2] = useState(0);
  let [글제목, changeTitle]=useState( ['남자코트추천',{liked0}],['강남 우동 맛집',{liked1}],['파이썬 독학',{liked2}]);
  
  //a는 state에 보관했던 자료나옴. 여기선 '남자 코트 추천'
  //b는 state변경 도와주는 함수


  
 
  //변경해주는 함수 써줘야 재랜더링 잘됨.
  //this를 사용해서 줄일수 있나 고민..
  

 /*
  let [likedNumber,likedSort]=useState([liked0,liked1,liked2]);
*/
 let likeNumber =[liked0,liked1,liked2];

  return (
    <div className="App">
     <div className="black-nav">
      <h4>React Blog</h4>
     </div>
     <button onClick={()=>{
      let titleSort=[...글제목];
      titleSort=titleSort.sort();
      changeTitle(titleSort)


     }}>가나다순 정렬</button>

     <button onClick={()=>{
      let copy =[...글제목];
      copy[0]='여자 코트 추천';
      changeTitle(copy);
      }}> 글 수정</button>

      <button onClick={()=>{
       /* let copy=[...글제목];
        for(let i=0;i<3;i++){
          if(likedNumber[i]>likedNumber[i+1]){
            const box= copy[i];
            copy[i]=copy[i+1];
            copy[i+1]=box;
          }
          
        };
        changeTitle(copy);
        */

        /*let copyNumber=[...liked];
        copyNumber=copyNumber.sort();
        plusLiked(copyNumber);
        
       */
     
        


      }}>좋아요 정렬</button>

     <div className ="list">
      <h4>{글제목[0]} <span onClick={()=>plusLiked0(liked0+1)}>👍</span>{liked0}</h4>
      <p>2월 1일 발행</p>
     </div>

     <div className ="list">
      <h4>{글제목[1]}<span onClick={()=>plusLiked1(liked1+1)}>👍</span>{liked1}</h4>
      <p>2월 2일 발행</p>
     </div>
     <div className ="list">
      <h4>{글제목[2]}<span onClick={()=>plusLiked2(liked2+1)}>👍</span>{liked2}</h4>
      <p>2월 3일 발행</p>
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


  왜 굳이 state를 쓰는가? 
  state에 있던 내용을 변경하면 자동으로 html 재랜더링해줌.
  즉각적으로 변경된 내용을 반영하고 싶을 때 state사용.
  자주 변경되는 내용들 위주로

 기존 state== 신규 state의 경우 변경 안해줌 굳이 변경할 필요없다고 판단.


 [...array] : ...은 괄호를 벗기고 다시 씌워주는 역할. 화살표도 달라짐.
 state가 array/object일때는 독립적으로 카피본을 만들어서 수정해야함. 딥 카피

  */
