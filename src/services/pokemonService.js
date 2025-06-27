
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pokemons`

// the service function will make an asynchronous fetch calls to the API
// Use an async function to await the response from our fetch calls
const index = async () => {
    try {
        // Uses fetch() to make a GET request to the base URL.
        // the function will get back a response object and assign it to res
        const res = await fetch(BASE_URL)
        // invoke json() method to Parses the response into a usable JavaScript object.
        // Return the parsed response

        return res.json()
    } catch (error) {
        console.log(error)
    }
    
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
        // We specify that this is a 'POST' request
        method: 'POST',
        // We're sending JSON data, so we attach a Content-Type header
        // and specify that the data being sent is type 'application/json'
        headers: {
            'Content-Type': 'application/json',
        },
        // The formData, converted to JSON, is sent as the body
        // This will be received on the back-end as req.body
        body: JSON.stringify(formData),
    });
    return res.json();

    } catch (error) {
        console.log(error)
    }
}

const update = async (formData, pokemonId) => {
    try {
        const res = await fetch(`${BASE_URL}/${pokemonId}`, {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const deletePokemon = async (pokemonId) => {
    try {
        const res = await fetch(`${BASE_URL}/${pokemonId}`, {
            method: "DELETE",
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    index,
    create,
    update,
    deletePokemon,
}