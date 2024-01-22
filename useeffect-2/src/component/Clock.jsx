import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log(date.toLocaleTimeString())
        setDate(new Date())
        // console.log(date)
    }, 1000);
    return ()=>{
        clearInterval(intervalID)
  console.log(date.toLocaleTimeString());      
    }
  }, []);
  
  return (
    <>
      <h2>current time :{date.toLocaleTimeString()}</h2>
    </>
  );
}
