import { useCallback, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import dayjs from 'dayjs';

function App() {
  const [originAirport, setOriginAirport] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState(null);
  const [flightDate, setFlightDate] = useState(dayjs());

  const handleOriginAirportChange = (newOriginAirport) => {
    setOriginAirport(newOriginAirport);
  }
  const handleDestinationAirportChange = (newDestinationAirport) => {
    setDestinationAirport(newDestinationAirport);
  }
  const handleFlightDateChange = (newFlightDate) => {
    setFlightDate(newFlightDate);
  }
  const handleSearch = useCallback(() => {
    // TODO handle search
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
        <SearchForm 
          originAirport={originAirport}
          onOriginAirportChange={handleOriginAirportChange}
          
          destinationAirport={destinationAirport}
          onDestinationAirportChange={handleDestinationAirportChange}

          flightDate={flightDate}
          onFlightDateChange={handleFlightDateChange}

          onSearch={handleSearch}
        />

        {/* TODO: FlightResults */}
      </Container>
    </>
  );
}

export default App;
