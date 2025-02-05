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

// TODO :: implement these controller props
// TODO :: Maybe rename of PassengersSelectionMenu
// const PassengerMenu = ({passengersCount, onPassengerCountChange}) => {
const PassengerMenu = () => {
  // State for managing the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // State for passenger counts
  const [passengersCount, setPassengersCount] = useState(
    Object.entries(PASSENGER_TYPES)
      .reduce((acc, [passengerType, config]) => {
        acc[passengerType] = config.defaultCount;
        return acc;
      }, {})
  );

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

  // Handle increment/decrement for a specific category
  const handleCountChange = (passengerType, delta) => {
    setPassengersCount((prevCounts) => {
      const newCount = prevCounts[passengerType] + delta;

      if (newCount < PASSENGER_TYPES[passengerType].defaultCount) {
        return prevCounts;
      } else {
        return {
          ...prevCounts,
          [passengerType]: newCount  
        };
      }
    });
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
                <Grid
                  sx={{
                    // border: "1px solid blue"
                  }}
                  size={6}
                >
                  <ListItemText
                    primary={config.primaryText}
                    secondary={config.secondaryText}
                  />
                </Grid>

                {/* buttons */}
                <Grid
                  size={6}
                  sx={{
                    // border: "1px solid green",
                  }}
                  container
                  alignItems={'center'}
                  spacing={1}
                >

                  {/* Decrease passenger count button */}
                  <Grid
                    size={4}
                    sx={{
                      // border: "1px solid red"
                    }}
                  >
                    <IconButton
                      onClick={() => handleCountChange(passengerType, -1)}
                      disabled={passengersCount[passengerType] === config.defaultCount}
                    >
                      <Remove />
                    </IconButton>
                  </Grid>

                  {/* Passenger count */}
                  <Grid
                    size={4}
                    sx={{
                      // border: "1px solid red"
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Typography>{passengersCount[passengerType]}</Typography>
                  </Grid>

                  {/* Increase passenger count button */}
                  <Grid
                    size={4}
                    sx={{
                      // border: "1px solid red"
                    }}
                  >
                    <IconButton onClick={() => handleCountChange(passengerType, 1)}>
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
