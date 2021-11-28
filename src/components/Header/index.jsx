import React from 'react'
import './style.scss'

const Header = () => {
  return (
    <nav>
       <div className='nav__left'>Pokedex</div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
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
