import { Counter } from "./component/Counter";
import { GithubUser } from "./component/GithubUser";
import { Welcome } from "./component/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name={"Benni"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<GithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
