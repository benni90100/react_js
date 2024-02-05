import { useGithubUsers } from "./useGithubUsers";


export function Githubuser() {
  const [data, getInput, handleUsername]= useGithubUsers()
 
  return (
    <>
      <form onSubmit={getInput}>
        <input type="text" name="username" onChange={handleUsername}/>
        <button>cerca</button>
      </form>
      <h2>{data.login}</h2>
      <img src={data.avatar_url} alt="" />
    </>
  );
}
