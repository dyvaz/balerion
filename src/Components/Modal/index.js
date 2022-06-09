import React from "react";
import NewPost from "../NewPost";

import { ModalBox, Container, Botao } from "./styles";

const Modal = () => {
  return (
    <ModalBox>
      <Container>
        <NewPost />
        <Botao className="close">X</Botao>
      </Container>
    </ModalBox>
  );
};
export default Modal;
