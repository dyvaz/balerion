import React from "react";

import { Container, Wrapper } from "./styles";
import Main from "../Main";
import Menu from "../Menu";
import SideBar from "../SideBar";
import { ProfileVisit } from "../Profile";

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Menu />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
