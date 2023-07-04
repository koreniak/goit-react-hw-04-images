import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '35861532-f4480698535ddfd2cf92b517e';

export const getPhotos = async (value = '', page = 1, perPage = 12) => {
  const { data } = await axios.get(`/?q=${value}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`);

  return data;
};