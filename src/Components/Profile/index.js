import React from "react";
import Feed from "../Feed";
import { Tab } from "../Feed/styles";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
} from "../ProfilePage/styles";
import { ProfileInfo } from "../Header/styles";
import { LargeButton } from "../Button/styles";
import Header from "../Header";

export const ProfileVisit = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <LargeButton className="edit" outlined>
          Seguir
        </LargeButton>
        {/* se eu ja seguir */}
        {/* <ButtonA outlined>Seguindo</ButtonA> */}
        {/* e o houver */}
        {/* <ButtonA outlined>Deixar de seguir</ButtonA> */}
        <h1>@tx</h1>

        <Followage>
          <span>
            <strong>9</strong> seguindo
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

export const InfoProfile = () => {
  return (
    <ProfileInfo>
      <span>19 Posts</span>
    </ProfileInfo>
  );
};
