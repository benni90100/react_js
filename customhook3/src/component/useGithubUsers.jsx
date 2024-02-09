import useSWR from "swr";
import { useState } from "react";



export function useGithubUsers() {
  const [username, setUsername] = useState(null);
  const [usernameInput, setUsernameInput] = useState(null);

  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );
  function handleUsername(e) {
    setUsernameInput(e.target.value);
  }
  function getInput() {
    
    setUsername(usernameInput);
    mutate(`https://api.github.com/users/${username}`);

    console.log(username);
  }
  function handleRefresh() {
    if (username) {
      mutate()
    }
  }

  return { data, getInput, handleUsername, error, handleRefresh };
}
