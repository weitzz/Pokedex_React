import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import './style.scss'

const Pokemon = ({ item }) => {

  const {id,name,img,type} = item

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
    </div>
    </>
  )
}

export default Pokemon
