import styled, { css } from "styled-components";
import { Home, Search, Notifications, Person } from "../../styles/Icons";
import { Pencil } from "@styled-icons/octicons/Pencil";

export const Container = styled.div`
  flex-direction: column;
  width: min(700px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const H1 = styled.h1`
  font-size: 20px;
  padding: 8px 0 6px 10px;
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
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

export const BottomMenu = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 15px 0 15px 0;
  @media (min-width: 500px) {
    display: none;
  }
`;
const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &.active {
    fill: var(--twitter);
  }
  &.post {
    fill: white;
    width: 29px;
    height: 29px;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
  margin-left:10px;
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const PostIcon = styled(Pencil)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
  margin-right:10px;
`;

export const Post = styled.button`
  margin-top: -10px;
  margin-bottom: -10px;

  width: 50px;
  height: 50px;
  background: var(--twitter);
  border-radius: 50%;
`;
