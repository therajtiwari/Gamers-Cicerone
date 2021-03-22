import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}

html{
    // background-color:#1d2d50;
    &::-webkit-scrollbar{
        width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#989898;
    }
    
}

`;

export default GlobalStyles;
