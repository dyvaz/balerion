import React from "react";

import { Tweet, TweetComFoto } from "../Tweet";

import { Container, Tab, Tweets } from "./styles";

const Feed = () => {
  return (
    <Container>
      <Tweets>
        <Tweet />
        <TweetComFoto />
        <TweetComFoto />
        <Tweet />
        <TweetComFoto />
      </Tweets>
    </Container>
  );
};

export default Feed;
