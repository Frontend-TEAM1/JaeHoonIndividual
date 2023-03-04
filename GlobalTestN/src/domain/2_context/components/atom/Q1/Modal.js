import { useContext } from "react";
import styled from "styled-components";
import ContextQ1ModalContext from "../../../../../store/2_context";

const ContextQ1Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ContextQ1ModalContext);

  return (
    <S.Wrapper>
    <S.Modal>
      <div className="modal-content">
        <h2>모달 창</h2>
        <button onClick={() => setIsModalOpen(false)}>숨기기</button>
        </div>
        </S.Modal>
    
    </S.Wrapper>
  );
};

export default ContextQ1Modal;

const Wrapper=styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

`;

const Modal=styled.div`
width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid white;
`

const S={
  Wrapper,
  Modal

}
