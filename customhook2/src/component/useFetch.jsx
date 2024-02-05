import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData]=useState([])

    async function getData() {
       try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
       } catch (error) {
        console.error(error);
       }
    }
   

    return[data,getData]
}





















