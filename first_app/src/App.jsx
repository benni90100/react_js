import { Welcome } from "./Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Welcome name={"Benni"} />}/>
    </Routes>
    </BrowserRouter>
   
     
  
  );
}
