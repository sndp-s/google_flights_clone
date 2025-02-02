import { Paper, Grid2 as Grid, Button, Typography, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import AirportInput from '../AirportInput/AirportInput';
import dayjs from 'dayjs';

function SearchForm({
  originAirport,
  onOriginAirportChange,
  destinationAirport,
  onDestinationAirportChange,
  flightDate,
  onFlightDateChange,
}) {

  return (
    <Paper
      sx={{
        padding: 4,
        position: 'relative',
        borderRadius: 2
      }}
      elevation={4}
    > 

      {/* forms */}
      <Grid
        container
        direction={{ sm: 'column', md: 'row' }}
        spacing={2}
      >

        {/* origin-destination airport input */}
        <Grid size={8} container>
          <Grid size={6}>
            <AirportInput
              label={'Where from?'}
              sx={{ width: '100%' }}
              selectedAirport={originAirport}
              onAirportChange={onOriginAirportChange}
            />
          </Grid>
          <Grid size={6}>
            <AirportInput
              label={'Where to?'}
              sx={{ width: '100%' }}
              selectedAirport={destinationAirport}
              onAirportChange={onDestinationAirportChange}
            />
          </Grid>
        </Grid>

        {/* flight date input */}
        <Grid size={4} container>
          <Grid size={12}>
            <DatePicker
              sx={{ width: '100%' }}
              label='Select Date'
              value={flightDate}
              onChange={onFlightDateChange}
              minDate={dayjs()}
              // renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
        </Grid>

      </Grid>

      {/* Search button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          transform: 'translate(-50%, 50%)',
          left: '50%',
        }}
      >
        <Button
          variant='contained'
          startIcon={<SearchIcon />}
          sx={{ borderRadius: 8, padding: '8px 16px' }}
          disabled={!originAirport || !destinationAirport || !flightDate}
        >
          <Typography variant='button' sx={{ fontWeight: 'medium' }}>
            Search
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}
export default SearchForm;
