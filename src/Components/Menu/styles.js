import styled, { css } from "styled-components";
import { Dragon } from "@styled-icons/fa-solid/Dragon";
import { Pencil } from "@styled-icons/octicons/Pencil";

import { Home, Notifications, Person, ExitToApp } from "../../styles/Icons";

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 30px 0 30px;
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
  margin-top: 10px;
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
    &.name {
      display: none;
    }
    &.bolinha[data-count]:after {
      width: 10px;
      height: 10px;
      position: absolute;
      content: attr(data-count);
      border-radius: 50%;
      color: white;
      background: var(--twitter);
      margin-left: -17px;
      margin-top: -17px;
    }
  }

  @media (min-width: 1380px) {
    > span {
      display: inline;
      margin-left: 9px;
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
    margin-top: 20px;
    width: 50px;
    height: 48px;
    > span {
      display: none;
    }
    @media (min-width: 1380px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
        margin-left: 20px;
      }
    }
  }

  cursor: pointer;
  border-radius: 55px;
  &.post {
    background-color: var(--twitter);

    &:hover {
      > span,
      svg {
        color: var(--twitter);
        fill: var(--twitter);
      }
    }
  }
  &:hover {
    background: var(--twitter-dark-hover);
  }
  &.active {
    background: #1f1f1f;
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
    &:hover {
      background: var(--twitter-dark-hover);
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

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
export const PostIcon = styled(Pencil)`
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
  @media (min-width: 1380px) {
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
  @media (min-width: 1480px) {
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
