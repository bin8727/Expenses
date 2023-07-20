import { createGlobalStyle } from "styled-components";

const GlobalyStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  *{
    box-sizing: border-box;  
  }

  html{
    font-family: 'Noto Sans Jp', sans-serif;
  }

  body{
    margin: 0;
    background-color: #3f3f3f;
  }
`;

export default GlobalyStyle;