import { Paper, Grid2 as Grid, IconButton } from '@mui/material';
import OriginAirportInput from '../OriginAirportInput/OriginAirportInput';
import DestinationAirportInput from '../DestinationAirportInput/DestinationAirportInput';
import JourneyDatePicker from '../JourneyDatePicker/JourneyDatePicker';
import { SwapHorizontalCircle } from '@mui/icons-material';
import TripTypeSelector from '../TripTypeSelector/TripTypeSelector';
import PassengerMenu from '../PassengerMenu/PassengerMenu';
import CabinClassMenu from '../CabinClassMenu/CabinClassMenu';
import SearchFlightsButton from '../SearchFlightsButton/SearchFlightsButtons';

// TODO: Add filters
function SearchForm() {
  return (
    <Grid
      container
      direction={'column'}
      spacing={2}
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
        <Grid size={8} container spacing={0}>
          <Grid size={5.5}>
            <OriginAirportInput sx={{ width: '100%' }} />
          </Grid>

          <Grid
            size={1}
            container
            justifyContent={'center'}
            alignItems={'center'}
          >
            <IconButton>
              <SwapHorizontalCircle fontSize={'large'} />
            </IconButton>
          </Grid>

          <Grid size={5.5}>
            <DestinationAirportInput sx={{ width: '100%' }} />
          </Grid>
        </Grid>

        {/* flight date input */}
        <Grid size={4} container>
          <Grid size={12}>
            <JourneyDatePicker sx={{ width: '100%' }} />
          </Grid>
        </Grid>

      </Grid>

      {/* Search button */}
      <Grid alignSelf={'center'}>
        <SearchFlightsButton
          buttonProps={{
            sx: {
              borderRadius: 8,
              padding: '8px 16px',
            },
            size: 'large'
          }}
          textProps={{
            sx: {
              fontWeight: 'medium'
            }
          }}
        />
      </Grid>
    </Grid>
  );
}
export default SearchForm;
