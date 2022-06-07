import React from "react";

import {
  Box,
  Title,
  Container,
  Input,
  Button,
  Link,
  Logo,
} from "../Login/styles";

const New = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Title>Create yout account</Title>
        <Input type="text" placeholder="    Name" />
        <Input type="email" placeholder="    Email or number" />
        <Input type="password" placeholder="    Password" />
        <Input type="password" placeholder="    Confirm assword" />
        {/* adivionar igone de ver a senha */}
        <Button>Create</Button>
        {/* nome 
        email verificar email 
        data de nascimento?
        senha e confirmar senha */}
        {/* talvez fazer os link com tags separadas depois, ja que cada um leva para um lugar e só estilizar pra alinharem um do lado do outro */}{" "}
        <Link>Already have an account? Login to Balerion</Link>
        {/* link leva para pagina de login */}
      </Box>
    </Container>
  );
};

export default New;
