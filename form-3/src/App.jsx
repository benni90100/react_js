import './App.css'
import { Login } from './component/login'

function App() {
const handleLogin = (userData) => {
    console.log("Login data:", userData);
  };

  return (
    <div>
      <h1>My App</h1>
      <Login onLogin={handleLogin} />
    </div>
  )
}

export default App
