import { useState } from "react";
import { Clock } from "./component/Clock";
import { LanguageContext } from "./component/LanguageContext ";
import "./App.css"
import { Container } from "./component/Container";

function App() {
  const [lenguage, setLenguage] = useState(`en`);
  function handleLenguage(e) {
    const leng = e.target.value;
    setLenguage(leng);
    console.log(lenguage);
  }
  return (
    <>
      <Container>
        <select name="lenguage" id="lenguage" onChange={handleLenguage}>
          <option value="en">english</option>
          <option value="it">italiano</option>
          <option value="es">espanol</option>
        </select>
        <LanguageContext.Provider value={lenguage}>
          <Clock />
        </LanguageContext.Provider>
      </Container>
    </>
  );
}

export default App;
