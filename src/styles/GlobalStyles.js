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
    background:nonde;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Robotom 'Helvetica Neue', Ubunto, Arial,sans-serif;
}
html{
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
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;
//mudar no root para as minhas cores
