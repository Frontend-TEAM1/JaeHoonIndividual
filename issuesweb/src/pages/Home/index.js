import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";
function HomePage() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/angular/angular-cli/issues?state=all"
        );
        setIssues(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(issues);

  return (
    <div>
      <h1>Angular CLI Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>{issue.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
