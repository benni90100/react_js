import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h2>username {data && data.name}</h2>
      
    </>
  );
}
