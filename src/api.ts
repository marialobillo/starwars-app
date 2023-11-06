import axios from 'axios';


const instance = axios.create({ baseURL: 'https://swapi.dev/api/' });

export const getPeople = async (page: number) => {
  const response = await instance.get(`people/?page=${page}`);
  return response.data.results
}

export const getIdFromUrl = (url: string) => {
  const url_splited = url.split('/');
  const w = url_splited.length;
  return url_splited[w - 2];
}

export const getPerson = async (id: string) => {
  const response = await instance.get(`people/${id}`);
  return response.data
}

