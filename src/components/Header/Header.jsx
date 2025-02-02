import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>Google Flights Clone</Typography>
          {/* Add theme switch and dev settings icon/buttons here */}
        </Toolbar>
      </AppBar>

      <Toolbar>
        {/* 
          This element exists to add 'toolbar height' padding between the fixed AppBar and the content below it. 
          There could be a more elegant solution to this but this is good enough for our purposes.
          
          references:
            - https://mui.com/material-ui/react-app-bar/ > 'Fixed placement' section
            - https://stackoverflow.com/questions/48508449/content-beneath-fixed-appbar 
        */}
      </Toolbar>
    </>
  );
}

export default Header;
