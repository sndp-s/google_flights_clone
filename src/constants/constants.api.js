export const BASE_PATH = 'https://sky-scrapper.p.rapidapi.com/api/';

export const ENDPOINTS = {
  SEARCH_AIRPORT: 'v1/flights/searchAirport',
};

export const HEADERS = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
};
