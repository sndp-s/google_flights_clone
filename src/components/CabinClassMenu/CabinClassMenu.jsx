import { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import CABIN_CLASS_TYPES from '../../constants/constants.cabinClassTypes';
import useStore from '../../store';

const CabinClassMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedCabinClass = useStore((state) => state.cabinClass);
  const setSelectedCabinClass = useStore((state) => state.setSelectedCabinClass);

  // event handlers
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const getCabinClassLabel = (cabinClass) => {
    return (
      Object.entries(CABIN_CLASS_TYPES)
        .find(([cabinClassType]) => cabinClassType === cabinClass)?.[1]?.label
    );
  };

  return (
    <Box>
      <Button
        onClick={handleMenuOpen}
      >
        {getCabinClassLabel(selectedCabinClass)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.entries(CABIN_CLASS_TYPES).map(([cabinClass, config]) =>
        (
          <MenuItem
            key={cabinClass}
            onClick={(event) => {
              setSelectedCabinClass(cabinClass);
            }}
            selected={cabinClass === selectedCabinClass}
          >
            {config.label}
          </MenuItem>
        )
        )}
      </Menu>
    </Box>
  )
};

export default CabinClassMenu;
