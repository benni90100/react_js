import { Message } from "./Message";

export function Hello({name, age}) {
  
    return (
      <>
        <h1>Hello Word {name} e ho {age} anni</h1>
        <Message/>
      </>
    );
}