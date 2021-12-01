import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import './style.scss'


const Searchbar = (props) => {
 const {onSearch} = props
 const {searchText,setSearchText} = useState('')

const handleInput = e =>{
  const text = e.target.value
  setSearchText(text)
}

const handleEnterPress = e =>{
  if(e.key === 'Enter'){
    onSearch(searchText)
  }
}

  return (
    <div className='input__wrapper'>
      <input type='text'
        placeholder="Busque aqui seu pokemon favorito"
        onChange={handleInput}
        onKeyPress={handleEnterPress}
        value={searchText} />
        <BiSearchAlt size={19} />
    </div>
  )
}

export default Searchbar
