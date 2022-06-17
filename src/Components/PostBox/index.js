import React from "react";

import { Container, Body, Avatar, Text, Botao } from "./styles";
import { LargeButton } from "../Button/styles";

const PostBox = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Text placeholder="O que esta acontecendo?" maxLength="140" />
        <LargeButton>
          <span>Postar</span>
        </LargeButton>
      </Body>
    </Container>
  );
};
export default PostBox;
