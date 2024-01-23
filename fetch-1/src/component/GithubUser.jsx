import { useEffect } from "react"
import { useState } from "react"


export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(
        `https://api.github.com/repos/octocat/Spoon-Knife`
      );
      const data = await res.json();
      setData(data);
      console.log(data.owner.vatar_url);
    }
    fecthData();
  }, []);
  return (
    <>
      <h2>username {data && data.name}</h2>
      <p>login {data && data.owner.login}</p>
      <img src={data && data.owner.avatar_url} alt="" />
    </>
  );
}