import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap');

*{
    box-sizing: border-box;
}

body{
    background-color: rgb(228, 228, 228);
    color:hsl(192,100%,9%);
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Outfit',sans-serif
}

p{
    opacity: 0.6;
    line-height: 1.5;
}
`

export default GlobalStyles