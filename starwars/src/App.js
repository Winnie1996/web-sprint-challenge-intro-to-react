import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/header";
// import Character from "./components/Character"




const App = () => {
  const [randomPokemon, setWildPokemon] = useState ([]);


const pokeId = () => {
  const min = Math.ceil(1)
  const max = Math.floor(151)
  return Math.floor(Math.random() * (max - min + 1)) + min
}



useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
    .then(response => {
      console.log(response.data)
      setWildPokemon(response.data);     
})
.catch((error) => {
  console.log(error);
})
}, [])



  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
