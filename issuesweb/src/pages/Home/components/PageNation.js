import styled from "styled-components";

function PageNation({
  currentPage,
  totalPages,
  onPageChange,
  firstVisiblePage,
  lastVisiblePage,
}) {
  const pageNumbers = [];
  for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
    pageNumbers.push(i);
  }
  const prevGroupLastPage = Math.floor((currentPage - 1) / 10) * 10;
  //현재 페이지가 속한 그룹에서 이전 그룹의 마지막 페이지를 의미
  const nextGroupFirstPage = Math.ceil(currentPage / 10) * 10;
  //현재 페이지가 속한 그룹에서 다음 그룹의 첫 페이지를 의미

  console.log(">>", firstVisiblePage);
  console.log(">>", lastVisiblePage);
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </button>
      {pageNumbers.map((number) => {
        const isFirstPageOfGroup = (number - 1) % 10 === 0;
        /*
         number가 속한 그룹에서 첫 번째 페이지인지를 판별합니다. 
         예를 들어 number가 11인 경우, (11 - 1) % 10은 0이므로 isFirstPageOfGroup는 true
        */
        const isLastPageOfGroup = number % 10 === 0 && number !== totalPages;
        /*
        number가 속한 그룹에서 마지막 페이지인지를 판별합니다. 
        예를 들어 number가 10인 경우, 10 % 10은 0이지만 number가 totalPages와 같은 경우에는 마지막 페이지가 아니므로 isLastPageOfGroup는 false
        */
        const isInRange =
          number >= prevGroupLastPage + 1 && number <= nextGroupFirstPage - 1;
        /*
          number가 현재 페이지가 속한 그룹의 범위에 속하는지를 판별합니다.
           예를 들어 prevGroupLastPage가 10이고 nextGroupFirstPage가 20인 경우,
           number가 11~19 사이에 속하면 isInRange는 true
           */

        if (isFirstPageOfGroup || isLastPageOfGroup || isInRange) {
          return (
            <Button
              key={number}
              onClick={() => onPageChange(number)}
              selected={number === currentPage}
            >
              {number}
            </Button>
          );
        } else if (isLastPageOfGroup) {
          return (
            <button key={number} onClick={() => onPageChange(number)}>
              {number}
            </button>
          );
        } else {
          return null;
        }
      })}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </button>
    </div>
  );
}

export default PageNation;

const Button = styled.button`
  background-color: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
`;

/*
<1>
for문을 사용하여 1부터 총 페이지 수(totalPages)까지의 숫자를 배열(pageNumbers)에 push

<2>
map을 사용하여 pageNumbers 배열의 각 숫자를 버튼으로 만들기

<3>
 각 버튼의 onClick 이벤트에는 onPageChange 함수를,
 인자로 해당 버튼의 숫자를 전달
 페이지와 해당 버튼의 숫자가 같으면 버튼을 disabled 처리

<4>
버튼의 selected 만들기 -> 현재 페이지와 같은 숫자만 true로 
 ${} 사용
  -변수 사용시 {}잊지말기  

true일 경우 색상변경 

*/

/*
      {pageNumbers.slice(0, 10).map((number) => {
        const isFirstPageOfGroup = (number - 1) % 10 === 0;
        const isLastPageOfGroup = number % 10 === 0 && number !== totalPages;
        const isInRange =
          number >= prevGroupLastPage + 1 && number <= nextGroupFirstPage - 1;

        if (isFirstPageOfGroup || isLastPageOfGroup || isInRange) {
          return (
            <Button
              key={number}
              onClick={() => onPageChange(number)}
              selected={number === currentPage}
            >
              {number}
            </Button>
          );
        } else if (isLastPageOfGroup) {
          return (
            <button key={number} onClick={() => onPageChange(number)}>
              {number}
            </button>
          );
        } else {
          return null;
        }
      })}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </button>
      */

/*
      
  const groupPageNumbers = pageNumbers.filter(
    (number) =>
      number <= 10 ||
      (number > prevGroupLastPage && number <= nextGroupFirstPage - 1) ||
      (currentPage >= nextGroupFirstPage && number <= prevGroupLastPage)
  );

  <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </button>
      {groupPageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          selected={number === currentPage}
        >
          {number}
        </Button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </button>
      */
