import { Paper, Grid2 as Grid, Button, Typography, Box, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import AirportInput from '../AirportInput/AirportInput';
import { SwapHorizontalCircle } from '@mui/icons-material';
import TripTypeSelector from '../TripTypeSelector/TripTypeSelector';
import PassengerMenu from '../PassengerMenu/PassengerMenu';
import CabinClassMenu from '../CabinClassMenu/CabinClassMenu';
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
      <Grid
        container
        direction={'column'}
        spacing={1}
      >

        {/* forms */}
        <Grid container>
          <TripTypeSelector />
          <PassengerMenu />
          <CabinClassMenu />
        </Grid>

        <Grid
          container
          direction={{ sm: 'column', md: 'row' }}
          spacing={2}
        >

          {/* origin-destination airport input */}
          <Grid size={8} container spacing={0}
            sx={{
              // border: "1px solid red"
            }}
          >
            <Grid size={5.5}
              sx={{
                // border: "1px solid red"
              }}
            >
              <AirportInput
                label={'Where from?'}
                sx={{ width: '100%' }}
                selectedAirport={originAirport}
                onAirportChange={onOriginAirportChange}
              />
            </Grid>

            <Grid
              sx={{
                // border: "1px solid red"
              }}
              size={1}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              <IconButton>
                <SwapHorizontalCircle fontSize={'large'}/>
              </IconButton>
            </Grid>

            <Grid size={5.5}>
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

      </Grid>
    </Paper>
  );
}
export default SearchForm;
