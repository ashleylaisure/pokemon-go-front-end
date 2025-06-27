import { useState } from "react"

const PokemonForm = (props) => {

    const initialState = {
        name: '',
        abilities: '',
        height: '',
    }

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState)

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (props.selected) {
            props.handleUpdatePokemon(formData, props.selected._id)
        } else {
            props.handleAddPokemon(formData)
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    />

                <label htmlFor="abilities">Abilities</label>
                <input 
                    type="text" 
                    id="abilities"
                    name="abilities"
                    value={formData.abilities}
                    required
                    onChange={handleChange}
                    />

                <label htmlFor="height">Height</label>
                <input 
                    id="height"
                    name="height"
                    value={formData.height}
                    required
                    onChange={handleChange}
                    />

                <button type="submit">
                    {props.selected ? "Update Pokemon" : "Add New Pokemon"}
                </button>
            </form>
        </div>
    )
}

export default PokemonForm
