import { useState, useEffect } from 'react'
import * as pokemonService from './services/pokemonService'
import './App.css'
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const fetchedPokemon = await pokemonService.index()
        if (fetchedPokemon.err) {
          throw new Error(fetchedPokemon)
        }
        setPokemon(fetchedPokemon)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon();
  }, []);

  // console.log(pokemon)

  return (
    <div>
      <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default App
