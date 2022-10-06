import '../style/Global.scss'
import Header from '../components/Header'
import List from '../components/ListPokemons'
import ModalPokemon from '../components/ModalInfos';
import { useState } from 'react';
function Home() {
  return (
    <>
     <Header/>
     <List/>
     
    </>
  );
}

export default Home;
