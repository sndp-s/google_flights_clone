import { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import TRIP_TYPE from '../../constants/constants.tripTypes';
import useStore from '../../store';

const TripTypeSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedTripType = useStore((state) => state.tripType);
  const setSelectedTripType = useStore((state) => state.setTripType);

  // event handlers
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const getTripTypeLabel = (tripType) => {
    return (
      Object.entries(TRIP_TYPE)
        .find(([_tripType]) => _tripType === tripType)?.[1]?.label
    );
  };

  return (
    <Box>
      <Button
        onClick={handleMenuOpen}
      >
        {getTripTypeLabel(selectedTripType)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.entries(TRIP_TYPE).map(([tripType, config]) =>
        (
          <MenuItem
            key={tripType}
            onClick={(event) => {
              setSelectedTripType(tripType);
              setAnchorEl(null);
            }}
            selected={tripType === selectedTripType}
          >
            {config.label}
          </MenuItem>
        )
        )}
      </Menu>
    </Box>
  );
};

export default TripTypeSelector;
