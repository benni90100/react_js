import useSWR from 'swr'
import { useEffect, useState } from "react";

const fetcher = url=> fetch(url).then(res => res.json())

export function useGithubUsers() {
  const [username, setUsername] = useState(null);

  const {data, error, mutate}=useSWR(`https://api.github.com/users/${username}`, fetcher)
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function getInput(e) {
    e.preventDefault();
    mutate()
    console.log(username)
  }

  return [data, getInput, handleUsername];
}
