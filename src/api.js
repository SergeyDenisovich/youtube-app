import axios from 'axios';

const KEY = 'AIzaSyAg5EWKfWtgTlx2rEiUwwIqfc1M_1EHR3o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
