import React from "react";

import { Header } from "../Post/styles";
import { Avatar, Box } from "../Notifications/styles";
import { Container } from "./styles";
export const User1 = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Header>
          <strong>Tarcisio </strong>
          <span className="">@tx</span>
        </Header>
      </Box>
    </Container>
  );
};

export const User2 = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Header>
          <strong>Ana </strong>
          <span className="">@user124</span>
        </Header>
      </Box>
    </Container>
  );
};
