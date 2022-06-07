import React from "react";

import { Container, Body, Avatar, Text, Botao } from "./styles";
//import { MenuButton } from "../Menu/styles";

const PostBox = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Text placeholder="O que esta acontecendo?" maxLength="140" />
        {/* <PostIcons /> */}

        <Botao className="post">
          <span>Postar</span>
        </Botao>
      </Body>
      {/*botoes de imagem/sticker? */}
    </Container>
  );
};
export default PostBox;
