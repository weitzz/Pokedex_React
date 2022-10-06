import { useEffect, useState } from "react";
import "./modal.css";
export interface PokemonsTypes {
  id: number,
  name: string,
  type: [],
  img: string,
  abilities: string,
  moves: string
}
interface ModalProps {
  dataPokemons: PokemonsTypes;
  onClose: () => void;
}

const ModalPokemon = ({dataPokemons,onClose}: ModalProps) => {

  return (
    <>
  
        <div className="modal" onClick={onClose}>
          <h2>Modal Teste!!</h2>
        <p>{dataPokemons.id}</p>
        <img src={dataPokemons.img} alt="" />
        <p>{dataPokemons.name}</p>
        </div>
    </>
  )
}

export default ModalPokemon