import { Welcome } from "./Welcome"

export function App() {
    const myName = "John"
    return(
    <div>
        <Welcome name= {myName}/>
    </div>
    )
}