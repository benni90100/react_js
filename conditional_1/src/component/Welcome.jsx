import { Age } from "./Age";
export function Welcome({name}) {
    const myAge = 68
        return (
      <>
        <p>Welcome {name}</p>

        {myAge > 18 && <Age age={myAge + " maggiorenne"} />}
        {!!myAge && <Age age={myAge + " il props age esiste"} />}
        {(myAge>18 && myAge<65) && <Age age={myAge + " age è compresa tra 18 e 65"} />}
        {(myAge > 18 && myAge < 65 && name=="john") && <Age age={myAge + " age è compresa tra 18 e 65 e il nome è John"} />}
        
      </>
    );
}