import { Githubuser } from './component/GithubUser'
import './App.css'
import { SWRConfig } from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
function App() {
  return (
    <>
    <SWRConfig value={{fetcher}}>
     <Githubuser/>
     </SWRConfig>
    </>
  )
}

export default App
