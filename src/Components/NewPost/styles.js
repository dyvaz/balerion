import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 15px;
  max-width: 100%;
  @media (min-width: 800px) {
    background-color: var(--twitter-dark-hover);
    color: #000;
    width: 50%;
    height: 30%;
    border-radius: 20px;
  }
`;

export const ModalBox = styled.div`
  @media (min-width: 800px) {
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
  }
`;
export const Body = styled.div`
  width: 97%;
  height: 165px;
  margin-top: 37px;
  display: flex;
`;

export const Border = styled.div`
  max-width: 650px;
  border-bottom: 1px solid var(--outline);
  @media (min-width: 900px) {
    max-width: 600px;
    border-bottom: 1px solid var(--outline);
  }

  margin-left: 2%;
`;
export const Text = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 13px 0px 0 70px;
  font-size: 20px;
  outline: none;
  resize: none;
`;
export const Avatar = styled.div`
  margin: 0 10px;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
`;

export const Botao = styled.button`
  z-index: 2;
  float: rigth;
  background-color: var(--twitter);
  margin-left: auto;
  margin-top: -48px;
  position: sticky;
  font-weight: bold;
  height: 40px;
  width: 80px;
  cursor: pointer;
  border-radius: 55px;
  &:hover {
    > span {
      color: var(--twitter);
    }
    &:hover {
      background-color: var(--twitter-light-hover);
    }
  }
`;
