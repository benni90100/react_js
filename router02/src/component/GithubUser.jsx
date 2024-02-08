import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GithubUser.css"
export function GithubUser() {
  const [data, setData] = useState(null);
  const { username = "benni90100" } = useParams();

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setData(data);
    }
    fecthData();
  }, [username]);
  return (
    <>
      <div className="card">
      <img src={data && data.avatar_url} alt="" />
      <div className="card-content">
      <h2>Name {data && data.name}</h2>
      <p>username {data && data.login}</p>
      </div>
      
      </div>
      
    </>
  );
}
