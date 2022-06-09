import React from "react";

import {
  Container,
  Body,
  Avatar,
  Text,
  Botao,
  Border,
  ModalBox,
} from "./styles";
//import { MenuButton } from "../Menu/styles";
import { Header, BackIcon, H1 } from "../Main/styles";

const NewPost = () => {
  return (
    <ModalBox>
      <Container>
        <Header className="modal">
          <button>
            <BackIcon />
          </button>
          <H1>New Post</H1>
        </Header>
        <Botao className="post">
          <span>Postar</span>
        </Botao>
        <Body>
          <Avatar />
          <Text placeholder="O que esta acontecendo?" maxLength="140" />
        </Body>
        <Border />
        {/*botoes de imagem/sticker? */}
      </Container>
    </ModalBox>
  );
};
export default NewPost;
