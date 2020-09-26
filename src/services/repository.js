import api from './api';

export default class Repository {
  getResidence = async () => api.get('/residences/');

  getState = async () => api.get('/statesUS/');

  postResidence = async (data) => api.post('/residences', data);
}
