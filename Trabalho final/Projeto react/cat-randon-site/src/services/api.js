import axios from 'axios'

const getImage = async()=>{
    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    return await axios.get(BASE_URL)
}

export {getImage};
