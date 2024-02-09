import { useGithubUsers } from "./useGithubUsers";


export function Githubuser({username}) {
  const {data, useFetchUser}= useGithubUsers(username)
  function handleUsername(e) {
    e.preventDefault()
    const username = e.target.value
    return username
  }
  function handleGetUserData(){
    useFetchUser(username)

  }
  return (
    <>
      <form onSubmit={handleGetUserData}>
        <input type="text" name="username" onChange={handleUsername}/>
        <button>cerca</button>
      </form>
      <h2>{data.login}</h2>
      <img src={data.avatar_url} alt="" />
    </>
  );
}
