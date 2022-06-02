import styled, { css } from "styled-components";
import { Twitter } from "@styled-icons/remix-fill/Twitter";
import { Dragon } from "@styled-icons/fa-solid/Dragon";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from "../../styles/Icons";

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 19px 0 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Dragon)`
  width: 41px;
  height: 41px;
  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 6px;
      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }
  padding: 8.25px 0;
  outline: 0;
  & + button {
    margin-top: 16.5px;
  }
  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;
    > span {
      display: none;
    }
    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
      }
    }
  }
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background: var(--twitter-dark-hover);
  }
  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 50px;
  height: 30px;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;

export const ButtonB = styled.button`
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
  background: var(--twitter);
  color: var(--white);
  border: none;
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: var(--primary);
    // colocar outra cor
  }
`;
