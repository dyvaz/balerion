import React from "react";

import { Banner, Avatar, ButtonA } from "../ProfilePage/styles";
import { ProfileInfo, BackIcon, Header } from "../Main/styles";
import { EditBirth } from "../EditBirth";

import {
  Container,
  Text,
  Body,
  Sp,
  Input,
  Bio,
  Birt,
  Button,
  P,
} from "./styles";

export const EditProfile = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Edit profile</strong>
          <ButtonA outlined>save</ButtonA>
        </ProfileInfo>
      </Header>

      <Banner>
        <Avatar />
      </Banner>
      <Body>
        <Text maxLength="50">
          <Sp>Name</Sp>
          <Input className="name" />
        </Text>

        <Text maxLength="160">
          <Sp>Bio</Sp>
          <Bio />
        </Text>

        <Birt>
          <Sp className="birth">Birth date •</Sp>

          <Button outlined>Edit</Button>
          <P>August 1, 2003</P>
        </Birt>
        {/* o edit birth sera um modal */}
        <EditBirth />
      </Body>
    </Container>
  );
};
