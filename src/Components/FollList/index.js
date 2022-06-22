import React from "react";

//import { Container } from "../Feed/styles";
import { Tudo, Nav, A, Item, Button, Top, Section } from "./styles";
import { User1, User2 } from "../User";
import Header from "../Header";

export const Following = () => {
  return (
    <Tudo>
      <Nav>
        <Header />
        <Top>
          <A>Followers</A>
          <A className="active">Following</A>
        </Top>
      </Nav>
      <Section>
        <Item>
          <User1 />
          <Button>Following</Button>
        </Item>
        <Item>
          <User1 />
          {/* o placehouder muda pra unfollow */}
          <Button>Following</Button>
        </Item>
      </Section>
    </Tudo>
  );
};

export const Followers = () => {
  return (
    <Tudo>
      <Nav>
        <Header />
        <Top>
          <A>Following</A>
          <A className="active">Followers</A>
        </Top>
      </Nav>

      <Item>
        <User2 />
        <Button>Followe</Button>
      </Item>
      <Item>
        <User2 />
        <Button>Followe</Button>
      </Item>
    </Tudo>
  );
};
