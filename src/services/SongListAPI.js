import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
const BASE_URL = 'http://localhost:8080/setlists'

export class SongListAPI {

static async getData() {
    const response = await axios.get(`${BASE_URL}/listSongs`, { data: null })
    if (response) {
        console.log(response.data)
        return response.data;
    } else {
        console.log('oh noooooo')
    }
};

static async addSong(songJson) {
    axios.post(`${BASE_URL}/addSong`, songJson)
        .then(res => {
            console.log(songJson);
            return res;
        })
}

};
