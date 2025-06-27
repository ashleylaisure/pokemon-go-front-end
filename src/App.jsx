import { useState, useEffect } from 'react'
import * as pokemonService from './services/pokemonService'
import './App.css'
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import PokemonForm from './components/PokemonForm/PokemonForm';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  const handleSelect = (pokemon) => {
    setSelected(pokemon)
    setIsFormOpen(false)
  }

  const handleFormView = (pokemon) => {
    if(!pokemon._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddPokemon = async (formData) => {
    try {
      // console.log(formData)
      const newPokemon = await pokemonService.create(formData)
      if (newPokemon.err) {
        throw new Error(newPokemon.err)
      }
      // console.log(newPokemon)
      setPokemon([newPokemon, ...pokemon])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdatePokemon = async (formData, pokemonId) => {
    try {
      const updatedPokemon = await pokemonService.update(formData, pokemonId)
      // console.log(updatedPokemon)
      if (updatedPokemon.err) {
        throw new Error(updatedPokemon.err)
      }
      const updatedPokemonList = pokemon.map((pokemon) => (
        pokemon._id === pokemonId ? updatedPokemon : pokemon
      ))
      setPokemon(updatedPokemonList)
      setSelected(updatedPokemon)
      setIsFormOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeletePokemon = async (pokemonId) => {
    try {
      const deletedPokemon = await pokemonService.deletePokemon(pokemonId)
      // console.log(deletedPokemon)

      if (deletedPokemon.err) {
        throw new Error(deletedPokemon.err)
      }

      const updatedPokemonList = pokemon.filter((pokemon) =>
        pokemon._id !== deletedPokemon._id
      )
      setPokemon(updatedPokemonList)
      setSelected(null)
      setIsFormOpen(false)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <PokemonList pokemon={pokemon} handleSelect={handleSelect} handleForm={handleFormView} isFormOpen={isFormOpen}/>
      {isFormOpen ? (
        <PokemonForm handleAddPokemon={handleAddPokemon} selected={selected} handleUpdatePokemon={handleUpdatePokemon}/>
      ) : (
        <PokemonDetail selected={selected} handleFormView={handleFormView} handleDeletePokemon={handleDeletePokemon}/>
      )}
      
      
    </div>
  )
}

export default App
