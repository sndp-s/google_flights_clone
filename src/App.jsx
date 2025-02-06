import { Container } from '@mui/material';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
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
        <SearchForm />
      </Container>
    </>
  );
}

export default App;
