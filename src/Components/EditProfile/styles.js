import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  justify-content: space-around;
  @media (min-width: 1280px) {
    width: 800px;
    margin-left: 20%;
    align-items: center;
  }
`;
export const Text = styled.div`
  padding-botton: 25px;
  margin-top: 30px;
  height: 100px;
  font-size: 20px;
  outline: none;
  //resize: none;
`;
export const Body = styled.div`
  margin-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;
export const Sp = styled.span`
  margin-top: 35px;
  font-size: 15px;
  position: absolute;

  padding: 0px 0 0 10px;
  color: var(--twitter-light-hover);
  &.birth {
    font-size: 18px;
    margin-top: 5px;
  }
  &.edit {
    margin-top: 3px;
  }
`;
export const Input = styled.input`
  margin-top: 30px;
  font-size: 20px;
  border: 2px solid var(--twitter-light-hover);
  border-radius: 10px;
  width: 396px;
  padding-left: 10px;
  padding-top: 15px;
  outline: 0;
  height: 55px;
`;

export const Bio = styled.textarea`
  margin-top: 30px;
  font-size: 20px;
  border: 2px solid var(--twitter-light-hover);
  border-radius: 10px;
  width: 396px;
  padding-left: 10px;
  padding-top: 25px;
  outline: 0;
  height: 75px;
  resize: none;
`;
export const Birt = styled.div`
  margin-top: 80px;
  height: 100px;
  font-size: 20px;
`;
export const Button = styled.a`
  color: var(--twitter);
  cursor: pointer;
  margin-left: 110px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: var(--twitter-dark-hover);
  }
`;
export const P = styled.p`
  margin: 10px;
  color: white;
  height: 20px;
  font-size: 20px;
`;
