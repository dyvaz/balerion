import React from "react";

import { Container, Header, H1 } from "../Main/styles";

import { RetweetIcon, LikeIcon } from "../Tweet/styles";
import { Avatar, Box, Title, Section, Content, Icons, P } from "./styles";
const Notfications = () => {
  return (
    <Container>
      <Header>
        <H1>Notfications</H1>
      </Header>
      <Section>
        <Avatar />
        <Box>
          {/* toda a box vai ser um botao/link para o post */}
          <Title>
            <strong>Tarcisio </strong>
            <span>@tx</span>

            <time>2h</time>
          </Title>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          {/* content */}
          <Content>
            <Icons>
              <LikeIcon className="like notf" />
            </Icons>
            <P> Liked your Post</P>
          </Content>
        </Box>
      </Section>

      <Section>
        <Avatar />
        <Box>
          <Title>
            <strong>Tarcisio </strong>
            <span>@tx</span>

            <time>2h</time>
          </Title>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          {/* content */}
          <Content>
            <Icons>
              <RetweetIcon className="rt notf" />
            </Icons>
            <P> Repost your Post</P>
            {/* e aqui o que escreveu no Post original */}
          </Content>
        </Box>
      </Section>
      {/* {Avatar nome e @ açao texto(quando comentario) e icones} */}
    </Container>
  );
};

export default Notfications;
