import styled from "styled-components";
export const MenuButton = styled.button`
  //background-color: black;
  display: flex;
  align-items: center;
  padding: 8.25px 0;
  outline: 0;
  cursor: pointer;
  border-radius: 55px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

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
      background: var(--twitter);
      margin-left: -20px;
      margin-top: -15px;
    }
  }

  @media (min-width: 1380px) {
    > span {
      &.name {
        display: inline;
      }
      margin-left: 9px;
      font-weight: bold;
      font-size: 19px;

      &.bolinha[data-count]:after {
        margin-left: -30px;
        margin-top: -15px;
      }
    }
    padding-right: 15px;
  }
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

  &.post {
    background-color: var(--twitter);

    &:hover {
      background: var(--twitter-dark-hover);
      > span,
      svg {
        color: var(--twitter);
        fill: var(--twitter);
      }
    }
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
  &.search {
    @media (min-width: 1067px) {
      display: none;
    }
  }
`;
export const LargeButton = styled.button`
  margin-right: 10px;
  background-color: var(--twitter);
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  max-width: 100px;
  min-width: 90px;

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
  &.edit {
    max-width: 125px;
    background: transparent;
    color: var(--twitter);
    border: 1px solid var(--twitter);
    position: absolute;
    top: 2vw;
    right: 7px;
    padding: 4px 16px;

    @media (min-width: 320px) {
      top: 10px;
      padding: 10px 19px;
      font-size: 15px;
    }
  }
  //botao do modal
  &.post {
    z-index: 2;
    float: rigth;
    margin-left: auto;
    margin-top: -48px;
    &:hover {
      > span {
        color: var(--twitter);
      }
      &:hover {
        background-color: var(--twitter-light-hover);
      }
    }
  }
  &.profile {
    float: rigth;
    margin-left: auto;
    margin-top: -30px;
  }
`;
