import { Counter } from "./component/Counter";
import { GithubUser } from "./component/GithubUser";
import { Welcome } from "./component/Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css'
export function App() {
  
  return (
    
    <BrowserRouter>
    <div className="navbar">
    <Link to="/">Welcome</Link>
    <Link to="/counter">Counter</Link>
    <Link to="/user/benni90100">Github</Link>
    </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Benni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<GithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
