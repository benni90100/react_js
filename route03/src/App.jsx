import { Counter } from "./component/Counter";
import { GithubUser } from "./component/GithubUser";
import { Welcome } from "./component/Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./component/PageNotFound";
export function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/user/:username">Github</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Benni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<GithubUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
