import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrementCount() {
    setCount(count + 1);
  }
  useEffect(()=>{
    console.log(count);
  }, [count])
  //useEffect restituisce il corretto valore di count ogni volta che viene aggiornato count
  //mentre chiamando handelIncrementCount, count non viene subito aggiornato al valore corrente, 
  //ma solo aggiornato il suo render in pagina
  return (
    <>
      <button onClick={handleIncrementCount}>incrementa</button>
      <h2>{count}</h2>
    </>
  );
}
