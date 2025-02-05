import { useCallback } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  const handleSearch = useCallback(() => {
    // TODO: Highlight the first incomplete field in RTL order - prompting user to provide an input
    // TODO: fetch flights from api and provide them to flight results
  }, []);

  return (
    <>
      <Header />
      <Container
        maxWidth='lg'
        sx={{
          padding: {
            xs: 1,
            sm: 2,
            md: 4,
            lg: 5
          }
        }}
      >
        <SearchForm  onSearch={handleSearch}/>

        {/* TODO: FlightResults */}
      </Container>
    </>
  );
}

export default App;
