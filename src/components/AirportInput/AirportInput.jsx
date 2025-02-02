import { useEffect } from 'react';
import { Autocomplete, TextField, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import useAirportSearch from './useAirportSearch';
import useAirportInput from './useAirportInput';

const AirportInput = ({ label, selectedAirport, onAirportChange, sx }) => {
  // Use custom hooks
  const { airports, loading, error, debouncedFetchAirports } = useAirportSearch(selectedAirport);
  const { inputValue, handleInputChange, handleBlur } = useAirportInput(selectedAirport, onAirportChange);

  // Fetch airports whenever inputValue changes
  useEffect(() => {
    debouncedFetchAirports(inputValue);
  }, [inputValue, debouncedFetchAirports]);

  return (
    <Autocomplete
      disablePortal
      value={selectedAirport}
      onInputChange={(event, newInputValue) => handleInputChange(newInputValue)}
      onChange={(event, newValue) => onAirportChange(newValue)}
      onBlur={handleBlur}
      options={airports}
      loading={loading}
      getOptionLabel={(option) => option.presentation.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      filterOptions={(x) => x}
      sx={sx}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          label={label}
          fullWidth
          error={!!error}
          helperText={error ?? null}
        />
      )}
      renderOption={(props, option) => {
        const { key, id, ...optionProps } = props;
        return (
          <ListItem key={id} {...optionProps}>
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText
              primary={option.presentation.suggestionTitle}
              secondary={option.presentation.subtitle}
            />
          </ListItem>
        );
      }}
      noOptionsText='No Airports'
    />
  );
};

export default AirportInput;
