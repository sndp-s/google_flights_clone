import axios from 'axios';
import { DEFAULT_LOCALE } from './constants';
import { BASE_PATH, ENDPOINTS, HEADERS } from './constants/constants.api';

const apiClient = axios.create({
  baseURL: BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
    ...HEADERS
  },
});

export const fetchAirports = async (query) => {
  try {
    const response = await apiClient.get(ENDPOINTS.SEARCH_AIRPORT, {
      params: { query, locale: DEFAULT_LOCALE },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    throw 'Error fetching airports';
  }
};
