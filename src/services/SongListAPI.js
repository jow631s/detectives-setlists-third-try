import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

const BASE_URL = 'http://localhost:8080/setlists'

class SongListApi {
    static async get

}








const getData = async () => {
    axios.get(`${BASE_URL}/listSongs`, { data: null })
        .then(response => {
            console.log(response.data);
            this.setState({songs: response.data});
        }).catch(error => {
            console.log(error);
        })
};

const addSong = (songJson) => {
    axios.post(`${BASE_URL}/addSong`, songJson)
        .then(res => {
            console.log(songJson);
            return res;
        })
};

export default { getData, addSong };