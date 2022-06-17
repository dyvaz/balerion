import styled, { css } from "styled-components";

import { Favorite } from "../../styles/Icons";
import { Retweet } from "@styled-icons/evil/Retweet";
import { Verified } from "@styled-icons/material-rounded/Verified";
import { Lock } from "@styled-icons/boxicons-solid/Lock";
import { Chat1 } from "@styled-icons/remix-line/Chat1";

// @styled-icons/evil/Retweet

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  white-space: nowrap;
  > span,
  time {
    color: var(--gray);
  }
  > span {
    padding: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */
  @media (min-width: 330px) {
    width: 63%;
  }
  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  &.post {
    display: flex;
    align-items: center;
    font-size: 14px;
    > svg {
      margin-right: 5px;
    }
    &:nth-child(1) {
      &,
      > svg path {
        color: var(--gray);
      }
    }
    &:nth-child(2) {
      color: var(--retweet);
      > svg path {
        fill: var(--retweet);
      }
    }
    &:nth-child(3) {
      color: var(--like);
      > svg {
        fill: var(--like);
      }
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
  &.notf {
    width: 39px;
    height: 39px;
    text-align: left;
  }
`;

export const CommentIcon = styled(Chat1)`
  ${iconCSS}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;
export const VerifiedIcon = styled(Verified)`
  ${iconCSS}
  padding:0 3px;
`;
export const LockIcon = styled(Lock)`
  ${iconCSS}
  padding:0 3px;
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
