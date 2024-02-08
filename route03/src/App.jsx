import { Counter } from "./component/Counter";
import { GithubUser } from "./component/GithubUser";
import { Welcome } from "./component/Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./component/PageNotFound";
import { GithubUserList } from "./component/GithubUserList";
export function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/user/:username">Github</Link>
        <Link to="/users">Users List</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Benni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<GithubUser />} />
        <Route path="/users" element={<GithubUserList/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
