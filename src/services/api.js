import axios from 'axios';

// Base da URL:https://api.themoviedb.org/3/
// URL DA API:/movie/now_playing?api_key=c458a608893b2b6a6d6a339e7feada62&language=pt-br

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;