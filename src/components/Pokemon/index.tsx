import React, { useState,useRef } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import ModalPokemon from '../ModalInfos'
import './style.scss'

export interface PokemonsTypes {
  id: number,
  name: string,
  type: [],
  img: string,
  abilities: string,
  moves: string
}
interface ItemProps {
  item: PokemonsTypes
  onClick: ()=> void
}
const Pokemon = ({ item , onClick}: ItemProps) => {
  const {id,name,img,type} = item
  const [isOpen, setIsOpen] = useState(false);

const handleShow = () =>{
  setIsOpen(true)
  console.log('abriu')
}

const handleClose = () =>{
  setIsOpen(false)
  console.log('fechou')
}
 
  return (
    <>
    <div key={id} className={`${type} wrapper_pokemon`} >
      <div className="wrapper-top">
        <span><b>Tipo:</b> {type}</span>
        <MdFavoriteBorder size={24} />
      </div>
      <div className="wrapper-image">
        <img src={img} alt="image pokemon" />
      </div>
      <div className="wrapper-text">
        <h3>{name}</h3>
      </div>
      <button onClick={handleShow} className='button'>
        Detalhes
      </button>
      {isOpen && <ModalPokemon dataPokemons={item}  onClose={handleClose}/>}
    </div>
    </>
  )
}

export default Pokemon
