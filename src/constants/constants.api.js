export const BASE_PATH = 'https://sky-scrapper.p.rapidapi.com/api/';

export const ENDPOINTS = {
  SEARCH_AIRPORT: 'v1/flights/searchAirport',
  SEARCH_FLIGHTS: 'v2/flights/searchFlights'
};

export const HEADERS = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
};

export const SITE_PATHS = {
  SEARCH: '/search',
};
