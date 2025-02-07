import { Box } from '@mui/material';
import useSearchResults from './useSearchResults';

function FlightResults() {
  const { results, loading, error } = useSearchResults();

  console.log(results);

  return (
    <Box>
      flight results
    </Box>
  );
}

export default FlightResults;
