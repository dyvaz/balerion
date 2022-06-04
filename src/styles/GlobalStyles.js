import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sinzing: border-box;
    color: var(--white);
}
html, body, #root{
    max-heigth:100vh;
    max-width:100vw;

    width: 100%;
    heigth:100%
}
*, button, input {
    border: 0;
    background:none;
    font-family: Ubunto, Arial,sans-serif;
}
html{
  //background: gray;
   background: var(--primary);
}
:root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #043828;
    --twitter-dark-hover: #4c684c;
    --twitter-light-hover: #b4e1b4;
  }
`;
//mudar no root para as minhas cores
