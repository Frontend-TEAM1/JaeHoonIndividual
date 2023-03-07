import { useContext } from "react";
import { UserContext } from "../../../../../store/3_context";


const ContextQ2Form2 = () => {

const {state,dispatch}=useContext(UserContext);

  const addEdit=()=>{
    dispatch({type:"ADD_EDIT_MODE"});
    console.log("에딧모드 추가!",state);
  }

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={addEdit} >STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
