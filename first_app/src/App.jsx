import { Hello } from "./hello";
//questo import mi da errore se import ./Hello mentre l'errore non esiste se import ./hello
//l'app funziona anche importando ./Hello
export function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
