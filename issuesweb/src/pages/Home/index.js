import { Octokit } from "octokit"; // npm install octokit
import List from "./components/List";
import { useEffect, useState } from "react";

function HomePage() {
  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
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
        page: 2,
      }
    );

    console.log(result);
    setIssues(result.data);
  };

  console.log(issues.data);

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      <h1>Angular CLI Issues</h1>
      <ul>
        {issues.map((issue) => (
          <List issue={issue} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
