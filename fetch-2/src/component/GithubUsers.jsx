
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
    function handleUsernameInput(e) {
        e.preventDefault()
        const username = e.target.username.value
        return username
    }
    return (
      <>
        <form onSubmit={handleUsernameInput}>
          <label htmlFor="gitubInput">username</label>
          <input type="text" name="username" />
          <button>search</button>
        </form>
        <GithubUser userName={username}/>
        
      </>
    );
}