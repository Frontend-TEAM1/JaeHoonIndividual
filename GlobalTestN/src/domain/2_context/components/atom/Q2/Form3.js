import { useContext } from "react";
import { UserContext } from "../../../../../store/3_context";


const ContextQ2Form3 = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleResetUserList = () => {
    dispatch({ type: "RESET_LIST" });
  };


  const handleReset=()=>{
    handleResetUserList();
    console.log("리셋!",state);
  }

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
