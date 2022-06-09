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
          <span className="bolinha" data-count=""></span>
          <span className="name">Página Inicial</span>
        </MenuButton>

        <MenuButton className="active">
          <BellIcon />
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
          <strong>Dyanna</strong>
          <span>@dyvaz</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
