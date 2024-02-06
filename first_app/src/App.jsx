
import { Route, Router, Routes } from "react-router-dom";
import { Hello } from "./Hello";
export function App({ name }) {
  
  return (
    <div>
      <h3>ciao sono {name}</h3>

      <Routes>
        <Route path="/" element={<Hello/>} />
      </Routes>
    </div>
  );
}
