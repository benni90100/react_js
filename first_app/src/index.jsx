import {createRoot} from "react-dom/client"
import { App } from "./App"

// const rootElement = document.getElementById("root")
// const root = createRoot(rootElement)
// root.render(HelloElement)
//modo più rapido per scrivere tutto in una sola riga
createRoot(document.getElementById("root")).render(<App />)