import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  .main {
    width: 40%;
    margin: 0 auto;
    margin-top: 5vh;
    flex-direction: column;
    row-gap: 20;
  }

  :root {
    --discord-black: #202225;
    --discord-gray: #36393f;
    --discord-dark-gray: #2f3136;
    
    --discord-blue: #7289da;
    --discord-green: #43b581;
    --discord-red: #d84040;

    --reddit-red: #ff4500;
  }
`;
