import React from "react";

import { Tweet, TweetComFoto } from "../Tweet";
import NewPost from "../NewPost";
import {
  Container,
  Body,
  Post,
  Retweeted,
  Avatar,
  Content,
  Header,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  LockIcon,
  Text,
  T,
} from "./styles";

const PostOlny = () => {
  return (
    <Container>
      <Body>
        <Post>
          <Avatar />
          <Content>
            <Header>
              <strong>
                Dyanna <LockIcon />
              </strong>
              <span>@dyvaz</span>
            </Header>

            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Text>Teste sem foto</Text>
            <T>
              <p>
                <b>18</b> Likes
              </p>
            </T>
            <Icons>
              <Status>
                <CommentIcon />
              </Status>
              <Status>
                <RetweetIcon />
              </Status>

              <Status>
                <LikeIcon />
              </Status>
            </Icons>
          </Content>
        </Post>
        <NewPost />
        <Tweet />
        <TweetComFoto />
      </Body>
    </Container>
  );
};

export default PostOlny;
