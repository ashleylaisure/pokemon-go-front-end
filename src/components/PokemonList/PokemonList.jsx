import React from 'react'

function PokemonList(props) {
    // console.log(props)

    return (
        <div>
            <h1>Pokemon List</h1>
            <div>
                {!props.pokemon.length? (
                    <h2>No Pokemon Yet!</h2>
                ) : (
                    <ul>
                        {props.pokemon.map((pokemon) => (
                            <li 
                                key={pokemon._id}
                                style={{cursor: 'pointer', color: "#646cff"}}
                                // onClick={() => console.log(pokemon)}
                                onClick={() => props.handleSelect(pokemon)}
                            >
                                {pokemon.name}
                            </li>
                        ))}
                    </ul>   
                )}

            </div>
            <button onClick={props.handleForm}>
                {props.isFormOpen ? (
                    <h4>Close Form</h4>
                ) : (
                    <h4>Add New Pokemon</h4>
                )}
            </button>
        </div>
    )
}

export default PokemonList
