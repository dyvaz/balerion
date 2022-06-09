import React from "react";

//import { Container } from "../Feed/styles";
import { Tudo, Nav, A, Item, Button } from "./styles";
import { User1, User2 } from "../User";
import { ButtonA } from "../ProfilePage/styles";

export const Following = () => {
  return (
    <Tudo>
      <Nav>
        <A>Followers</A>
        <A className="active">Following</A>
      </Nav>

      <Item>
        <User1 />
        <Button>Following</Button>
      </Item>
      <Item>
        <User1 />
        <Button>Following</Button>
      </Item>
    </Tudo>
  );
};

export const Followers = () => {
  return (
    <Tudo>
      <Nav>
        <A className="active">Followers</A>
        <A>Following</A>
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
