import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`
  width: max(100px, min(135px, 23vw));
  height: max(100px, min(135px, 23vw));
  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
`;

export const Followage = styled.div`
  padding: 10px 0;
  display: flex;
  > span {
    font-size: 17px;
    color: var(--gray);
    & + span {
      margin-left: 20px;
    }
  }
`;
