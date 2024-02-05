import { useEffect } from "react";
import { useFetch } from "./useFetch";

export function DisplayFetch(){
    const [data, setData]=useFetch(`https://jsonplaceholder.typicode.com/todos/`)
    
    return(
        <>
        <button onClick={()=>setData()}>get data</button>
        {data.map((item)=>(
            item.id>=10 && item.id<=30 &&
           <p key={item.id}>{item.id} {item.title}</p>
        )
        )}
        </>
        
    )

}