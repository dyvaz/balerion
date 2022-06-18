import React from "react";

import { RetweetIcon, LikeIcon } from "../Tweet/styles";
import {
  Container,
  Avatar,
  Box,
  Title,
  Section,
  Content,
  Icons,
  P,
} from "./styles";
import Header from "../Header";
const Notfications = () => {
  return (
    <Container>
      <Section>
        <Avatar />
        <Box>
          {/* toda a box vai ser um botao/link para o post */}
          <Title>
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
