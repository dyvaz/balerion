import React from "react";

import Header from "../Header";
import Notifications from "../Notifications";
import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ProfileIcon,
  PostIcon,
  Post,
} from "./styles";

import { ProfilePage } from "../ProfilePage";
import PaginaInicial from "../PaginaInicial";
import { ProfileVisit } from "../Profile";
import NewPost from "../NewPost";
import PostOlny from "../Post";
import { Following, Followers } from "../FollList";

const Main = () => {
  return (
    <Container>
      {/* <ProfilePage /> */}
      {/* <ProfileVisit /> */}

      {/* <NewPost /> */}

      <PaginaInicial />

      {/* <Notifications /> */}

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
