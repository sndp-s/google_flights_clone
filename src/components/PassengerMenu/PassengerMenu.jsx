import { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Grid2 as Grid
} from '@mui/material';
import { Add, Remove, ArrowDropDown, ArrowDropUp, Person } from '@mui/icons-material';
import PASSENGER_TYPES from '../../constants/constants.passengerTypes'
import useStore from '../../store';

const PassengerMenu = () => {
  // State for managing the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const passengersCount = useStore((state) => state.passengersCount);
  const setPassengersCount = useStore((state) => state.setPassengersCount);

  // Calculate total passengers
  const totalPassengers = Object.values(passengersCount).reduce((acc, count) => acc + count);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Default Button */}
      <Button
        onClick={handleMenuOpen}
        startIcon={<Person />}
        endIcon={anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
        size='small'
      >
        {totalPassengers}
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {
          Object.entries(PASSENGER_TYPES).map(([passengerType, config]) => (
            <ListItem
              key={passengerType}
              dense
            >
              <Grid
                container
                width={'100%'}
                spacing={1}
              >
                {/* labels */}
                <Grid size={6}>
                  <ListItemText
                    primary={config.primaryText}
                    secondary={config.secondaryText}
                  />
                </Grid>

                {/* buttons */}
                <Grid
                  size={6}
                  container
                  alignItems={'center'}
                  spacing={1}
                >

                  {/* Decrease passenger count button */}
                  <Grid size={4}>
                    <IconButton
                      onClick={() => setPassengersCount(passengerType, -1)}
                      disabled={passengersCount[passengerType] === config.defaultCount}
                    >
                      <Remove />
                    </IconButton>
                  </Grid>

                  {/* Passenger count */}
                  <Grid
                    size={4}
                    container
                    justifyContent={'center'}
                  >
                    <Typography>{passengersCount[passengerType]}</Typography>
                  </Grid>

                  {/* Increase passenger count button */}
                  <Grid size={4}>
                    <IconButton onClick={() => setPassengersCount(passengerType, 1)}>
                      <Add />
                    </IconButton>
                  </Grid>

                </Grid>
              </Grid>
            </ListItem>
          ))
        }

      </Menu>
    </Box>
  );
};

export default PassengerMenu;
