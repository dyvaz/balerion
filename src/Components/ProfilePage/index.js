import React from "react";
import Feed from "../Feed";

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

const ProfilePage = () => {
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
            Nascido(a) em 1 de adosto de 2003
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
      <Feed />
    </Container>
  );
};

export default ProfilePage;
