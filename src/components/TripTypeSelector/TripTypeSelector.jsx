import { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import TRIP_TYPE from '../../constants/constants.tripTypes';

const TripTypeSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTripType, setSelectedTripType] = useState(Object.entries(TRIP_TYPE)[0][0])

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
