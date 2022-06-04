import React from "react";

import { Box, Title, Container, Input, Button, Link, Logo } from "./styles";

const Login = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Title>Login in to Balerion</Title>
        <Input type="email" placeholder="    Email or username" />
        <Input type="password" placeholder="    Password" />
        <Button>Login</Button>

        {/* talvez fazer os link com tags separadas depois, ja que cada um leva para um lugar e só estilizar pra alinharem um do lado do outro */}

        <Link>Forget password? </Link>
        <Link>Sing up for Balerion</Link>
      </Box>
    </Container>
  );
};

export default Login;
