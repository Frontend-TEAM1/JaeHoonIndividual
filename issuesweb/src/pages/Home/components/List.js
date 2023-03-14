import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

function List({ issue }) {
  return (
    <S.Wrapper>
      <S.FirstLine>
        <div>#{issue.number}</div>
        <div>{issue.title}</div>
        <div>Comments{issue.comments}</div>
      </S.FirstLine>
      <S.Body>{issue.body}</S.Body>
      <S.LastLine>
        {issue.user.login}
        {issue.created_at}
      </S.LastLine>
    </S.Wrapper>
  );
}
export default List;

const Wrapper = styled.div`
  width: 90vw;
  height: 20vh;
  margin: 5vh 5vh;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  ${flexCenter}
`;

const FirstLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 2px solid green;
`;
const Body = styled.div`
  border: 2px solid salmon;
  height: 15vh;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const LastLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: 2px solid deeppink;
`;

const S = {
  Wrapper,
  FirstLine,
  Body,
  LastLine,
};
