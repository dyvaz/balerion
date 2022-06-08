import React from "react";

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  PostIcon,
  HomeIcon,
  BellIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton className="active">
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton className="post">
          <PostIcon />
          <span>Postar</span>
        </MenuButton>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Dyanna</strong>
          <span>@dyvaz</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
