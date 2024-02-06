import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

export function Root(params) {
    return(
        <BrowserRouter><App name="benni"/></BrowserRouter>
    )
}