import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/header";
import Character from "./components/Character"



const App = () => {
  const [getWildPokemon, setWildPokemon] = useState ({});

  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(500)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }



  
  let randID = pokeId();


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + randID)
      .then(response => {
        // console.log(response.data)
        
        setWildPokemon(response.data);
        // console.log(response.data.sprites.other["official-artwork"].front_default)
        // console.log(getWildPokemon.weight)
        // console.log(response.data.sprites.other["official-artwork"].front_default)
        // console.log(response)
        
  })
  .catch((error) => {
    console.log(error);
 
  })
  }, []);
  
  // const PokeImage = randomPokemon
  // console.log(PokeImage)

  // randomPokemon.map((pokemonImage => {
  // for (let pokemonImage = 0; pokemonImage < pokemonImage.length; pokemonImage++){

  // }


  // })


  return (
    <div className="App">
      <Header/>
        <Character PokemonImage = {getWildPokemon.sprites} Name = {getWildPokemon.name} Height = {getWildPokemon.height} Weight = {getWildPokemon.weight}/>
    </div>
    
  );
}

export default App;
