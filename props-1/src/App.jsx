import { Welcome } from "./Welcome";

export function App() {
    return(
        <div>
            <Welcome name={"Benni"} />
        </div>
    )
}
//qualora non passassi un valore a name react mi darebbe un errore, mentre se non passo proprio il name
//l'errore non c'è, 