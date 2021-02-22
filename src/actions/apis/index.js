import axios from 'axios';

// const baseUrl = 'http://192.168.5.81:3000';
const baseUrl = 'http://3.137.213.68:3000';
const client = axios.create({
  baseURL: baseUrl,
});

export const fetchDataService = (url, params) => client.get(url, {params: params}, {
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response)
  .catch(err => err);

export const postDataService = (url, params) => client.post(url, params, {
  headers: {
    // Accept: '*/*',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Methods': 'POST',
  },
})
  .then(response => response)
  .catch(err => err);

export const updateDataService = (url, headers) => client.patch(url, {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'PATCH',
    ...headers
  },
})
  .then(response => response)
  .catch(err => err);

export const deleteDataService = (url, authenticationToken) => fetch(baseUrl + url, {
  method: 'DELETE',
  headers: {
    Accept: '*',
    'Content-Type': 'application/json',
    authenticationToken,
  },
})
  .then(response => response.json())
  .catch(err => err);
