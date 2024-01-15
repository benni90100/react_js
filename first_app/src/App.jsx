import { Hello } from "./hello";
//questo import mi da errore se import ./Hello mentre l'errore non esiste se import ./hello
//l'app funziona anche importando ./Hello
export function App({name}) {
  return (
    <div>
      <h3>ciao sono {name}</h3>
      <Hello />
    </div>
  );
}
