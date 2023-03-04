
import { useContext, useState } from "react";
import { actions, Context } from "../../../../../store/3_context";
import { UserContext } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {

  const { state, dispatch } = useContext(UserContext);

  const addUser = (name, nickname) => {
    dispatch({
       type: "ADD_USER", 
       payload: { id:state.userList.length+1, name, nickname } });

       };




  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addUser(name, nickname);
    setName("");
    setNickname("");
    console.log("유저 추가",state);
  };


  return (
    <>
    <form onSubmit={handleAdd}>
      <h1>Q2Form</h1>
      <input 
      type="text"
      placeholder="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
       />

      <input 
      type="text"
      value={nickname}
      onChange={(e) => setNickname(e.target.value)}
      placeholder="nick-name" />
      <button type="submit">추가</button>
      </form>
      <ContextQ2Form2 />
      </>
      
      
  );
};
export default ContextQ2Form;


 /*
    헤맨 부분.

    1.
    setUserList([...userList, newUser]) 메서드는 비동기적으로 동작하며,
     state가 업데이트되는 즉시 console.log(userList)를 호출하면 
     업데이트 이전의 값을 출력

     setUserList 함수를 호출하면 
     React는 새로운 state를 계산하고 컴포넌트를 다시 렌더링

     -> console.log에는 업데이트 이전값이 출력되어도, 리스트에는 추가가 되어있음.

     2. Provider전달 위치를.. 많이 많이 헷갈림.
    */
    