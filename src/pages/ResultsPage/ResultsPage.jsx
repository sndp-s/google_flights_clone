import { Stack } from '@mui/material';
import SearchForm from '../../components/SearchForm/SearchForm';
import FlightResults from '../../components/FlightResults/FlightResults';

const ResultsPage = () => {  
  return (
    <Stack>
      <SearchForm />
      <FlightResults />
    </Stack>
  );
}

export default ResultsPage;
