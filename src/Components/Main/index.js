import React from "react";

import { ProfilePage, InfoProfileUser } from "../ProfilePage";
import PaginaInicial from "../PaginaInicial";
import { ProfileVisit, InfoProfile } from "../Profile";
import NewPost from "../NewPost";
import Header from "../Header";
import Notifications from "../Notifications";
import {
  Container,
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
import PostOlny from "../Post";
import { Following, Followers } from "../FollList";
import Modal from "../Modal";

const Main = () => {
  return (
    <Container>
      <Header />
      {/* <ProfilePage /> */}
      {/* <ProfileVisit /> */}
      {/* o new post no mobile é uma pagina unica */}
      {/* <NewPost /> */}
      {/* <PaginaInicial /> */}
      <Notifications />
      {/* o modal é quando abre em tela grande */}
      {/* <Modal /> */}
      {/* <PostOlny /> */}
      {/* <Following /> */}
      {/* <Followers /> */}
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
