import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--twitter-dark-hover);
  color: #000;
  width: 50%;
  height: 30%;
  border-radius: 20px;
`;
export const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Botao = styled.button`
  background-color: var(--twitter);
  top: 0;
  left: 0;
  align-items: center;

  font-weight: bold;
  height: 32px;
  width: 32px;
  cursor: pointer;
  border-radius: 55px;
  &:hover {
    > span {
      color: var(--twitter);
    }
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
