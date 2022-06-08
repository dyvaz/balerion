import React from "react";

import { ProfilePage, InfoProfileUser } from "../ProfilePage";
import PaginaInicial from "../PaginaInicial";
import { ProfileVisit, InfoProfile } from "../Profile";
import NewPost from "../NewPost";
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
  H1,
} from "./styles";

const Main = () => {
  return (
    <Container>
      <Header>
        {/* substiruir o botao de voltar pelo avatar */}
        <button>
          <BackIcon />
        </button>
        <H1>Home</H1>
        {/* <InfoProfile /> */}
        {/* se for o usuario logado: */}
        {/* <InfoProfileUser /> */}
      </Header>

      {/* <ProfilePage /> */}
      {/* <ProfileVisit /> */}
      {/* <NewPost /> */}
      <PaginaInicial />

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
