import React from 'react'
import './style.scss'
import Image from 'pokedex-logo.svg'
import Img from '../../assets/pokedex-logo.svg'

import Searchbar from '../Search'



const Header = () => {


  return (
    <nav>
      <div className='nav__left'>
        <img src={Img} alt="" />
      </div>
      <div className='nav__middle'>
        <Searchbar/>
      </div>
      <div className='nav__right'>
        <span>Favoritos</span>
      </div>
    </nav>
  )
}

export default Header
