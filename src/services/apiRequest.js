import axios from 'axios';

const axiosInstancia = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

async function requestApi(url) {
  try {
    const { data } = await axiosInstancia.get(url);
    return data;
  } catch (err) {
    return [];
  }
}

export default requestApi;
