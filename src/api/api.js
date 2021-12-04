import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}`,
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_HEADERS_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_HEADERS_KEY
  }
});


export default instance;