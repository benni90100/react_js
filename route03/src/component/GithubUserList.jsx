import { useEffect, useState } from "react";
import "./GithubUserList.css";
import { Link, Routes, useParams, Route } from "react-router-dom";
function UserDetails() {
  const { username } = useParams();

  return <div>User Details for {username}</div>;
}

export function GithubUserList({children}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(`https://api.github.com/users`);
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fecthData();
  }, []);
  return (
    <>
   
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`./${item.login}`}>User: {item.login} </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
