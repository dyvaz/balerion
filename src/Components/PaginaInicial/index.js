import React from "react";
import Feed from "../Feed";
import PostBox from "../PostBox";

import { Container } from "../ProfilePage/styles";

const PaginaInicial = () => {
  return (
    <Container>
      {/* o que esta acontecendo */}
      <PostBox />
      <Feed />
    </Container>
  );
};

export default PaginaInicial;
