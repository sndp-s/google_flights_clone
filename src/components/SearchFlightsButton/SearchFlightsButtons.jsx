import { Button, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchFlightsButton = ({ buttonProps, textProps }) => {
  return (
    <Button
      variant='contained'
      startIcon={<Search />}
      {...buttonProps}
    >
      <Typography variant='button' {...textProps}>
        Search
      </Typography>
    </Button>
  );
};

export default SearchFlightsButton;
