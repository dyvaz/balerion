import React from "react";

import { Cab } from "../Post/styles";
import { Avatar, Box } from "../Notifications/styles";
import { Container } from "./styles";
export const User1 = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Cab>
          <span className="">@tx</span>
        </Cab>
      </Box>
    </Container>
  );
};

export const User2 = () => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Cab>
          <span className="">@user124</span>
        </Cab>
      </Box>
    </Container>
  );
};
