import { Route, Router, Routes } from "react-router-dom";
import { Hello } from "./component/Hello";
import { Counter } from "./component/Counter";
export function App({ name }) {
  
  return (
    <div>
      <h3>ciao sono {name}</h3>

      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="counter" element={<Counter/>}/>
      </Routes>
    </div>
  );
}
