import { createGlobalStyle } from "styled-components";
import fontsCss from './fonts.module.css';

export const GlobalStyles = createGlobalStyle`
  ${fontsCss}

  
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }


  body{
    margin: 0;
    padding:0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fonts.PoppinsFont}, ${({ theme }) => theme.fonts.HindFont}, sans-serif;
  }

`;