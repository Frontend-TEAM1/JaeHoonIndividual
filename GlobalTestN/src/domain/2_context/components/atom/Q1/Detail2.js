import { useContext } from "react";
import  ContextQ1ModalContext  from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { setIsModalOpen } = useContext(ContextQ1ModalContext);

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={() => setIsModalOpen(true)}>보이기</button>
    </>
  );
};

export default ContextQ1Detail2;

