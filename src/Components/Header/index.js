import React from "react";
import { Container, BackIcon, H1 } from "./styles";

import { InfoProfileUser } from "../ProfilePage";
import { InfoProfile } from "../Profile";

const Header = () => {
  return (
    <Container>
      <button>
        <BackIcon />
      </button>
      {/* o h1 vai ser a variavel que muda dependendo da tela */}
      <H1>
        <h1>Home</h1>
        {/* <InfoProfile /> */}
        {/* se for o usuario logado: */}
        {/* <InfoProfileUser /> */}
      </H1>
    </Container>
  );
};

export default Header;
