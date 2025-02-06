import Header from "../../components/Header/Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth='lg'
        sx={{
          paddingX: {
            xs: 1,
            sm: 2,
            md: 4,
            lg: 5
          }
        }}
      >
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;
