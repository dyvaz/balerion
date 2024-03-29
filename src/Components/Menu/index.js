import React from "react";

import {
  Container,
  Topside,
  Logo,
  PostIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";
import { MenuButton } from "../Button/styles";

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton className="active">
          <HomeIcon />
          <span className="name">Página Inicial</span>
        </MenuButton>

        <MenuButton className="search">
          <SearchIcon />
          <span className="name">Buscar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span className="bolinha" data-count=""></span>
          <span className="name">Notificações</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span className="name">Perfil</span>
        </MenuButton>

        <MenuButton className="post">
          <PostIcon />
          <span className="name">Postar</span>
        </MenuButton>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <span>@dyvaz</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
