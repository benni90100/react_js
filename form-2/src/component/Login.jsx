import { useState } from "react";

export function Login({}) {
  const [data, setData] = useState({
    userName: "",
    password: "",
    checkBox: false,
  });
  function handleDataInput(e) {
    const name = e.target.name;
    const value = e.target.value 
    const checked = e.target.checked
    const type = e.target.type
    console.log(value);
    setData((data) => {
      return {
        ...data,
        [name]: type=="checkbox" ? checked : value
      };
    });
  }
 
  return (
    <div>
      <input name="userName" value={data.userName} onChange={handleDataInput} />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleDataInput}
      />
      <input type="checkbox" name="rememberMe" value={data.checkBox} onChange={handleDataInput}/>
      
    </div>
  );
}
