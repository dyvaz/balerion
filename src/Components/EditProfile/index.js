import React from "react";

import { Banner, Avatar } from "../ProfilePage/styles";
import { ProfileInfo } from "../Main/styles";
import { BackIcon } from "../Header/styles";
import { Container, Text, Body, Sp, Input, Bio } from "./styles";
import { LargeButton } from "../Button/styles";

export const EditProfile = () => {
  return (
    <Container>
      <ProfileInfo>
        <strong>Edit profile</strong>
        <LargeButton className="profile" outlined>
          save
        </LargeButton>
      </ProfileInfo>

      <Banner>
        <Avatar />
      </Banner>
      <Body>
        <Text maxLength="50">
          <Sp>Username</Sp>
          <Input className="name" />
        </Text>

        <Text maxLength="160">
          <Sp>Bio</Sp>
          <Bio />
        </Text>
      </Body>
    </Container>
  );
};
