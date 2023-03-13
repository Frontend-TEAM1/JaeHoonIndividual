import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

function List({ issue }) {
  return (
    <S.Wrapper>
      <div>{issue.id}</div>
    </S.Wrapper>
  );
}
export default List;

const Wrapper = styled.div`
  width: 80vw;
  height: 10vh;

  border: 1px solid black;
  ${flexCenter}
`;

const S = {
  Wrapper,
};
