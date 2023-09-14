import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #84dad5;
    --purple-600: #9f6a15;
    --purple-900: #07392e;

    --font-black: #521f2e;
    --font-white: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1000px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87.5%;
    }

}

`
;
