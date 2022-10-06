import { createContext, useState, useEffect } from "react";
import api from "../services/api";

interface PokemonsTypes {
    id: number,
    name: string,
    type: [],
    img: string,
    abilities: string,
    moves: string
}

export const DataContext = createContext<PokemonsTypes[]>([])

export const DataProvider = ({children}: any) =>{
    const [data,setData] = useState([])

    useEffect(()=>{
        const loadPokemons = async () =>{
            try{
                const response = await api.get('/')
                setData(response.data.data)
            } catch(error) {
                console.log(error)
            }
        }
        loadPokemons()
    },[])


    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}