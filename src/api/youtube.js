import axios from 'axios'

const KEY = 'AIzaSyDXkZDFbCaLIGYacN8_nClRv8HTsesQ_kU'
export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
      type: 'video',
    }
})