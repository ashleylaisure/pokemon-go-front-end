import React from 'react'

function PokemonDetail(props) {
    return (
        <div>
            {!props.selected ? (
                <h1>NO DETAILS</h1>
            ) : (
                <div>
                    <h1>{props.selected.name}</h1>
                    <h2>Abilities: {props.selected.abilities}</h2>
                    <h2>Height: {props.selected.height}</h2>

                    <button onClick={() => props.handleFormView(props.selected)}>
                        <h4>Edit Pokemon</h4>
                    </button>
                    <button onClick={() => props.handleDeletePokemon(props.selected._id)}>
                        <h4>Delete Pokemon</h4>
                    </button>
                </div>


            )}

            
        </div>
    )
}

export default PokemonDetail
