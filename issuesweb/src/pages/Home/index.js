import { Octokit } from "octokit"; // npm install octokit
import List from "./components/List";
import { useEffect, useState } from "react";
import PageNation from "./components/PageNation";

function HomePage() {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getIssues = async (page) => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    });

    const result = await octokit.request(
      "GET /repos/angular/angular-cli/issues",
      {
        owner: "owner",
        repo: " repo",
        headers: {},
        per_page: 10,
        page: page,
      }
    );

    //console.log(result);
    setIssues(result.data);
    setTotalPages(
      Math.ceil(result.headers.link.match(/page=(\d+)>; rel="last"/)[1])
      /*
      link 헤더에서 rel="last"인 부분을 찾기. 정규 표현식 이용
      /page=(\d+)>; rel="last"/으로 페이지 번호를 추출
      배열로 반환하므로 반환값 신경쓰기.
      */
    );
    const headerLink = result.headers.link.match(/page=(\d+)>; rel="last"/);
    console.log(">>정규 표현식 체크 ", headerLink);
  };

  //console.log(">>토탈>>", totalPages);

  const getVisiblePages = () => {
    //현재 페이지를 기준으로 보여지는 페이지 계산
    const lastVisiblePage = Math.ceil(currentPage / 10) * 10;
    //currentPage를 기준으로 현재 페이지가 속한 페이지 그룹에서 가장 마지막 페이지를 계산
    //ceil은 바로 다음으로 큰 정수값을 리턴 ex) Math.ceil(4.1) => 5
    const firstVisiblePage = lastVisiblePage - 9;
    //lastVisiblePage를 이용하여 현재 페이지가 속한 페이지 그룹에서 보여지는 첫 페이지를 계산

    return {
      first: Math.max(firstVisiblePage, 1),
      last: Math.min(lastVisiblePage, totalPages),
    };
  };
  const { first, last } = getVisiblePages();

  useEffect(() => {
    getIssues(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Angular CLI Issues</h1>
      <ul>
        {issues.map((issue) => (
          <List issue={issue} />
        ))}
      </ul>
      <PageNation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        firstVisiblePage={first}
        lastVisiblePage={last}
      />
    </div>
  );
}

export default HomePage;
