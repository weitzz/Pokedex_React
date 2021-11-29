import React from 'react'
import './style.scss'
import Image from '../../assets/pokedex-logo.svg'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
  return (
    <nav>
      <div className='nav__left'>
        <img src={Image} alt="" />
      </div>
      <div className='nav__middle'>
        <form className='input__wrapper'>
          <input type='text' />
          <button>
            <BiSearchAlt size={19} />
          </button>
        </form>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>

          {/* {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  )
}

export default Header
