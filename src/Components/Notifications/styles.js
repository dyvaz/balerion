import styled from "styled-components";
export const Avatar = styled.div`
  margin: 8px;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  // flex-shrink: 0;
  background: var(--gray);
  position: absolute;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 65px;
`;
export const Title = styled.div`
  margin-top: 5px;
  display: flex;
  width: 100%;
  cursor: pointer;
  > strong {
    margin-right: 5px;
  }
  > time {
    padding-left: 8px;
  }
`;
export const Section = styled.section`
  margin-top: 6px;
  max-height: 100%;
  display: flex;
  // flex-shrink: 0;
  min-height: 100px;
  border-bottom: 1px solid var(--outline);
`;
export const Content = styled.div`
  font-size: 17px;
  width: 100%;
  height: 50px;
  margin-top: 2px;
`;

export const Icons = styled.div`
  > svg {
    margin-left: 5px;
    color: var(--like);
    fill: var(--like);
    &.rt {
      margin-left: 5px;
      color: var(--retweet);
      fill: var(--retweet);
    }
  }
`;
export const P = styled.div`
  font-size: 17px;
  margin-top: -30px;
  margin-left: 50px;
`;
