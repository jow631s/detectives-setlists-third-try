import axios from "axios";

// Create instance called instance
const restInstance = axios.create({
    baseURL: 'https://localhost:8080/setlists',
    headers: {
        'content-type':'application/json',
        'x-rapidapi-host':'localhost',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
});

export default {
    getData: () => restInstance ({
        'method': 'GET',
        'url': '/listSongs'
    })
};