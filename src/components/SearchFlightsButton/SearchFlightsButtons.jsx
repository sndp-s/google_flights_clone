import { Button, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import useStore from "../../store";

const SearchFlightsButton = ({ buttonProps, textProps }) => {
  const originAirport = useStore((state) => state.originAirport);
  const destinationAirport = useStore((state) => state.destinationAirport);
  const journeyDate = useStore((state) => state.journeyDate);
  const tripType = useStore((state) => state.tripType);
  const cabinClass = useStore((state) => state.cabinClass);
  const passengersCount = useStore((state) => state.passengersCount);

  const disabled = (
    !originAirport ||
    !destinationAirport ||
    !journeyDate ||
    !tripType ||
    !cabinClass ||
    !passengersCount
  );

  return (
    <Button
      variant='contained'
      startIcon={<Search />}
      {...buttonProps}
      disabled={disabled}
    >
      <Typography variant='button' {...textProps}>
        Search
      </Typography>
    </Button>
  );
};

export default SearchFlightsButton;
