import { useEffect, useState } from "react";
import "./GithubUserList.css"

export function GithubUserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(`https://api.github.com/users`);
      const data = await res.json();
      setData(data);
    }
    fecthData();
  }, []);
  return (
    <> <div className="card-list-container">{
        data.map((user)=>(
            <div className="card" key={user.id}>
      <img src={user && user.avatar_url} alt="" />
      <div className="card-content">
      <h2>Name {user && user.name}</h2>
      <p>username {data && user.login}</p>
      </div>
      
      </div>
        ))
    }
    </div>
    </>
  );
}
