import styled from "styled-components";
import { Dragon } from "@styled-icons/fa-solid/Dragon";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Box = styled.div`
  margin-top: 200px;
  width: 550px;
  heigth: 1600px;

  background-color: var(--secondary);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
`;

export const Logo = styled(Dragon)`
  width: 41px;
  height: 41px;
  margin: 20px;
`;

export const Title = styled.div`
  color: white;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 350px;
  height: 40px;
  border: none;
  border-radius: 29.5px;
  margin: 10px;
  background-color: var(--twitter);
`;
//usar o mesmo botao?
export const Button = styled.button`
  width: 260px;
  height: 50px;
  border: none;
  border-radius: 29.5px;
  color: #fff;
  margin: 20px 30px;
  font-weight: bold;
  background-color: var(--twitter-dark-hover);
  cursor: pointer;
  &:hover {
    background: var(--twitter-light-hover);
  }
  &.exit {
    font-size: 14px;
    position: sticky;
    margin: 210px -50px 0 0;
    width: 40px;
    height: 40px;
    background-color: var(--twitter);
    &:hover {
      background: var(--twitter-light-hover);
    }
  }
  &.edit {
    margin-top: 20px;
  }
`;
export const Link = styled.div`
  padding: 0 0 15px 0;
  display: inline-block;
  flex-direction: row;
  color: var(--twitter-dark-hover);
  cursor: pointer;
  &:hover {
    color: var(--twitter-light-hover);
  }
  &.confirm {
    font-size: 15px;
    padding: 0;
  }
`;
export const Exit = styled.div`
  cursor: pointer;
  margin: 10px 500px 0 0;
  &:hover {
    background: var(--twitter-light-hover);
  }
`;
