import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bd0dd96af7d1d1139642a9c2150aedb428f640a698d717ae257b7e9dcab998d9'
  }
});
