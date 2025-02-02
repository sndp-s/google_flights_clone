import { useState, useCallback } from 'react';
import { debounce } from '@mui/material/utils';
import { fetchAirports } from '../../apiservice';

const useAirportSearch = (selectedAirport) => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounced function to fetch airports
  const debouncedFetchAirports = useCallback(
    debounce(async (query) => {
      if (query === '') {
        setAirports(selectedAirport ? [selectedAirport] : []);
        return;
      }

      setLoading(true);
      try {
        const airports = await fetchAirports(query);
        setAirports(airports);
      } catch (error) {
        console.error(error);
        setError('Unable to fetch airports');
      } finally {
        setLoading(false);
      }
    }, 400),
    [selectedAirport]
  );

  return { airports, loading, error, debouncedFetchAirports };
};

export default useAirportSearch;
