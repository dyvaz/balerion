import React from "react";

import { ProfilePage, InfoProfileUser } from "../ProfilePage";
import PaginaInicial from "../PaginaInicial";
import { ProfileVisit, InfoProfile } from "../Profile";
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ProfileIcon,
  PostIcon,
  Post,
} from "./styles";

const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <InfoProfile />
        {/* se for o usuario logado: */}
        {/* <InfoProfileUser /> */}
      </Header>

      {/* <ProfilePage /> */}
      <ProfileVisit />
      {/* <PaginaInicial /> */}

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <Post>
          <PostIcon className="post" />
        </Post>
        <BellIcon />
        <ProfileIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
