import styled, { css } from "styled-components";
import { ArrowLeft } from "../../styles/Icons";

export const Container = styled.div`
  background-color: var(--primary);
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  width: min(700px, 100%);
  height: 6vh;
`;
export const H1 = styled.div`
  height: 50px;
  width: 100%;
  > h1 {
    font-size: max(25px);
    margin-top: 10px;
  }
`;
export const BackIcon = styled(ArrowLeft)`
  margin: 5px;
  width: 26px;
  height: 26px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    fill: var(--twitter);
    background: var(--twitter-dark-hover);
  }
`;
export const ProfileInfo = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
