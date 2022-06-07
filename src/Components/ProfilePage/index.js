import React from "react";
import Feed from "../Feed";
import { Tab } from "../Feed/styles";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  ButtonA,
} from "./styles";
import { ProfileInfo } from "../Main/styles";
export const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <ButtonA outlined>Editar perfil</ButtonA>

        <h1>Dyanna</h1>
        <h2>@dyvaz</h2>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 1 de agosto de 2003
          </li>
        </ul>

        <Followage>
          <span>
            <strong>999</strong> seguindo
          </span>

          <span>
            <strong>999 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Tab>Posts</Tab>
      <Feed />
    </Container>
  );
};

export const InfoProfileUser = () => {
  return (
    <ProfileInfo>
      <strong>Dyanna</strong>
      <span>999 Posts</span>
    </ProfileInfo>
  );
};