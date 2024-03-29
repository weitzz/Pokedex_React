import { useEffect, useState,useRef,useCallback } from "react";
import api from '../../services/api'
import './style.scss'
import '../../style/Colors.scss'
import Pokemon from "../Pokemon";
import Loading from "../Loading";
import axios from "axios";
import ModalPokemon from "../ModalInfos";

export interface PokemonsTypes {
  id: number,
  name: string,
  type: [],
  img: string,
  abilities: string,
  moves: string
}


const List = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [loading, setLoading] = useState(true)
  const [nextUrl, setNextUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () =>{
    setIsOpen(true)
    console.log('abriu')
  }
  
  const handleClose = () =>{
    setIsOpen(false)
    console.log('fechou')
  }
   
  
  
  
  const observer = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useCallback((node: any)=>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting && nextUrl){
        searchPokedex(nextUrl)
      }
    })
    if(node)observer.current.observe(node)

  },[loading,nextUrl,pokemon]) 


  const fetchPokemonDetail = async (url: any)  =>{
    const response = await axios.get(url)
    const {id,name,types,sprites,abilities,moves} = response.data
    return {
      id,
      name,
      type: types[0].type.name,
      img:sprites.other["official-artwork"].front_default,
      abilities,
      moves}

  }
 


const searchPokedex =useCallback( async (url: any) =>{
  setLoading(true)
  try{
    const response = await axios.get(url)
    const results = response.data.results
    const {next} = response.data
    if(next) setNextUrl(next)
    const detailRequests = results.map(async (res:any) => await
    fetchPokemonDetail(res.url))
    
      await Promise.all(detailRequests).then(detailResult =>{
          setPokemon([...pokemon,...detailResult])
      })


  }catch(e){
    console.error(e)
  }finally{
    setLoading(false)
  }
},[nextUrl,pokemon])


useEffect(()=>{
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  
  searchPokedex(url)
},[])


const renderPokemon = () => pokemon.map((item: any,index: any)=>{

  return index === pokemon.length -1
  ? <div key={item.id} ref={lastElementRef} >
    <Pokemon item={item} onClick={handleShow}/>
  </div>
  : <div key={item.id}><Pokemon item={item} onClick={handleShow}/></div>
})

  return (
    <>
        <div className='container_pokemon'>{renderPokemon()}</div>
        {loading && <Loading/>}
        </>
  )
}

export default List