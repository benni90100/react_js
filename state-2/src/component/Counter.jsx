import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({startCount = 20, increment = 5 }) {
  const [count, setCount] = useState(startCount);
  
  function handleIncrementCount() {
    setCount((c) =>c + increment);
  }
  function handleDecrementCount() {
    setCount((c) => c - increment);
  }
  function clear() {
    setCount(startCount)
  }
  return (
    <>
      <button onClick={handleIncrementCount}>incrementa</button>
      <button onClick={handleDecrementCount}>riduci</button>
      <button onClick={clear}>pulisci</button>
      <CounterDisplay countDisplay={count} />
    </>
  );
}
