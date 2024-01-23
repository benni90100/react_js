import { useState } from "react";
import "./Container.css";
export function Container({ children, title }) {
  const [collapse, setCollapse]=useState(false)
  function HandleCollapse() {
    setCollapse(!collapse ? true: false)
  }
  return (
    <>
      <h1>{title}</h1>
      <button onClick={HandleCollapse}>collapse</button>
      <div>{!collapse && children}</div>
    </>
  );
}
