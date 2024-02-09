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
        
        <Link to="/users">Users github List</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name={"Benni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index component={<p>please select a user</p>}/>
        </Route>
          <Route  path="users/:username" element={<GithubUser /> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
