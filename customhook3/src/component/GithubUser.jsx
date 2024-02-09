import { useGithubUsers } from "./useGithubUsers";


export function Githubuser() {
  const {data, getInput, handleUsername, error}= useGithubUsers()
 function handleDataInput(e) {
  e.preventDefault();
  getInput()
 }

  return (
    <>
      <form onSubmit={handleDataInput}>
        <input type="text" name="username" onChange={handleUsername}/>
        <button>cerca</button>
      </form>
      <h2>{data && data.login}</h2>
      {error && <h2>pagina non trovata</h2>}
      <img src={data && data.avatar_url} alt="" />
    </>
  );
}