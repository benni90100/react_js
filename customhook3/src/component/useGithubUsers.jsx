import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUsers() {
  const [username, setUsername] = useState(null);
  const [usernameInput, setUsernameInput] = useState(null);

  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );
  function handleUsername(e) {
    setUsernameInput(e.target.value);
  }
  function getInput() {
    
    setUsername(usernameInput);
    mutate(`https://api.github.com/users/${username}`);

    console.log(username);
  }

  return { data, getInput, handleUsername, error };
}
