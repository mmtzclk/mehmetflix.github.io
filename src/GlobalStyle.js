import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html body {
    height: 100%;
}

body{
    font-family: 'Ubuntu', sans-serif;
}

h5{ 
    font-weight: bold;
    font-size: 0.9rem;
}

.App{
    max-height: 100vh;
}

`;

export default GlobalStyle;
