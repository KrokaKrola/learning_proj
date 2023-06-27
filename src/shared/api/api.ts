import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/local-storage';

const baseURL = __API__;

export const $api = axios.create({
  baseURL,
  headers: {
    Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
  },
});
