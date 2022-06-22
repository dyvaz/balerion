import React from "react";

import { Tweet, TweetComFoto } from "../Tweet";
import NewPost from "../NewPost";
import {
  Container,
  Body,
  Post,
  Avatar,
  Content,
  Cab,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  LockIcon,
  Text,
  T,
} from "./styles";
import Header from "../Header";

const PostOlny = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Post>
          <Content>
            <Cab>
              <Avatar />
              <span>
                @dyvaz <LockIcon />
              </span>
            </Cab>

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

        {/* <NewPost /> */}

        <Tweet />
        <TweetComFoto />
      </Body>
    </Container>
  );
};

export default PostOlny;
