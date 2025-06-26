
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

export {
    index,
}