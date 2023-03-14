import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

function List({ issue }) {
  return (
    <S.Wrapper>
      <S.FirstLine>
        <div>#{issue.number}</div>
        <div>{issue.title}</div>
        <div>Comments {issue.comments}</div>
      </S.FirstLine>
      <S.Body>{issue.body}</S.Body>
      <S.LastLine>
        <div>{issue.user.login}</div>
        <div>{issue.created_at}</div>
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
  border: 3px solid black;
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
  width: 100%;

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
  & > div {
    // border: 2px solid royalblue;
    padding-left: 1vw;
  }
`;

const S = {
  Wrapper,
  FirstLine,
  Body,
  LastLine,
};
