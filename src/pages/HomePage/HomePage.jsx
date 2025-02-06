import { Paper } from '@mui/material';
import SearchForm from '../../components/SearchForm/SearchForm';

const HomePage = () => {
  return (
    <Paper
      sx={{
        paddingX: 4,
        paddingY: 2,
        marginTop: 8,
        borderRadius: 2,
        width: '100%'
      }}
      elevation={4}
    >
      <SearchForm />
    </Paper>

  );
};

export default HomePage;
