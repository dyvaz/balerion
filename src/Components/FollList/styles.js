import styled from "styled-components";

export const Tudo = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 30;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Nav = styled.div`
  position: fixed;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--twitter);
`;

export const A = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  color: var(--twitter);
  width: 50%;
  text-align: center;
  &:hover {
    background: var(--twitter-dark-hover);
    text-decoration: underline 3px;
  }
  &.active {
    background: var(--twitter-dark-hover);
    text-decoration: underline 3px;
  }
`;
export const Item = styled.div`
  cursor: pointer;
  display: flex;
`;
export const Button = styled.button`
  height: 40px;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: var(--twitter-dark-hover);
  }
  width: 150px;
  position: sticky;

  padding-left: 5px;
  margin-top: 30px;

  margin-right: 20px;
`;
