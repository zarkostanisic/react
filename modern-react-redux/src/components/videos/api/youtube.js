import axios from 'axios';

const KEY = 'AIzaSyCdzdG-S8FQp8jUYWIsmZ2n9tlPcMl9TPk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
