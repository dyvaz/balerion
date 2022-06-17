import React from "react";

import { Container, Body, Avatar, Text, Border, ModalBox, He } from "./styles";
//import { MenuButton } from "../Menu/styles";
import { H1, BackIcon } from "../Header/styles";
import { LargeButton } from "../Button/styles";

const NewPost = () => {
  return (
    <ModalBox>
      <Container>
        <He>
          <button>
            <BackIcon />
          </button>
          <H1>
            <h1>Home</h1>
          </H1>
        </He>
        <LargeButton className="post">
          <span>Postar</span>
        </LargeButton>
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
