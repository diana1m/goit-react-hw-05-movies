import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header, Navigation, NavLinkStyled, Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <main>
      <Header>
        <Container>
          <Navigation>
            <NavLinkStyled to="/" end>  Home </NavLinkStyled>
            <NavLinkStyled to="/movies"> Movies </NavLinkStyled>
          </Navigation>
        </Container>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </main>
  );
};
