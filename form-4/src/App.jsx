
import './App.css'
import { Login } from './component/Login'

function App() {
  function handleLogin(userData) {
    console.log(userData);
  }

  return (
    <>
     <Login onLogin={handleLogin}/>
    </>
  )
}

export default App
