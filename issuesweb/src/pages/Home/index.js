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

    console.log(result);
    setIssues(result.data);
    setTotalPages(
      Math.ceil(result.headers.link.match(/page=(\d+)>; rel="last"/)[1])
      /*
      link 헤더에서 rel="last"인 부분을 찾아 정규표현식 /page=(\d+)>; rel="last"/으로 페이지 번호를 추출
      */
    );
  };

  console.log(totalPages);

  const getVisiblePages = () => {
    const lastVisiblePage = Math.ceil(currentPage / 10) * 10;
    const firstVisiblePage = lastVisiblePage - 9;

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
