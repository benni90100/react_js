import { useState } from "react";
import "./registerNewUser.css";
import { UserCard } from "./UserCard";

export function RegisterNewUser() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [cards, setCards] = useState([]);
  function handleData(e) {
    const { name, value } = e.target;
    setData((d) => {
      return {
        ...d,
        [name]: value,
      };
    });
  }
  const newCard = {
    name: data.username,
    email: data.email,
    password: data.password,
  };

  function submitData() {
    setCards((prevCard) => [...prevCard, newCard]);
    console.log(data);
  }
  return (
    <div className="form-data">
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleData}
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleData}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleData}
      />
      <button onClick={submitData}>create</button>
      
        {cards.map((card, index) => (
          <UserCard key={index} user={card} />
        ))}
    </div>
  );
}
