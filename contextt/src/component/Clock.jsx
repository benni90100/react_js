import { useContext, useEffect, useState } from "react";
import "./Clock.css"
import { LanguageContext } from "./LanguageContext ";

export function Clock() {
  // stato del secontext
  const lenguage = useContext(LanguageContext);
  
  //stato del clock
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });
  return (
    <>
      
        <div className="clock-container">
          <div className="clock-content">
            {lenguage==`en`&&`current time`} 
            {lenguage==`it`&&`ora corrente`} 
            {lenguage==`es`&&`tiempo actual`} 
            
            <br />
            {date.toLocaleTimeString()}
          </div>
        </div>
      
    </>
  );
}
