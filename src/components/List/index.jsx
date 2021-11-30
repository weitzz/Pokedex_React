import { useEffect, useState } from "react";
import api from '../../services/api'
import './style.scss'
import '../../style/Colors.scss'
import {MdFavoriteBorder} from 'react-icons/md'


const List = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)
  const countPokemons = 150

  const loadPokemons = async () => {
    let pokemonArr = []
    for (let i = 1; i <= countPokemons; i++) {
      pokemonArr.push(await pokemonsData(i))
    }
    console.log(pokemonArr)
    setPokemon(pokemonArr)
    setLoading(false)
  }

  const pokemonsData = async (id) => {
    const response = await api.get(`/${id}`)
    return response
  }

  useEffect(() => {
    loadPokemons()
  }, [])


  return (
    <>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <div className='container_pokemon'>
          {pokemon.map(item => (
            <div key={item.data.name}  className={`${item.data.types[0].type.name} wrapper_pokemon`} >
              <div className="wrapper-top">
              <span>{item.data.types[0].type.name}</span>
              <MdFavoriteBorder size={24} />
              </div>
              <div className="wrapper-image">
              <img src={item.data.sprites.other["official-artwork"].front_default} alt="image pokemon" />
              </div>
              <div className="wrapper-text">
              <h3>{item.data.name}</h3>
              <p>{item.data.weight}</p>
              </div>
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default List