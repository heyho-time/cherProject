import { createGlobalStyle } from "styled-components";
import Drukeot from "../assets/font/Druk-BoldItalic-Web.eot";
import Drukttf from "../assets/font/Druk-BoldItalic-Web.ttf";
import Drukwoff from "../assets/font/Druk-BoldItalic-Web.woff";
import NanumSquareBeot from "../assets/font/NanumSquareB.eot";
import NanumSquareBwoff from "../assets/font/NanumSquareB.woff";
import NanumSquareBttf from "../assets/font/NanumSquareB.ttf";
import NanumSquareEBeot from "../assets/font/NanumSquareEB.eot";
import NanumSquareEBwoff from "../assets/font/NanumSquareEB.woff";
import NanumSquareEBttf from "../assets/font/NanumSquareEB.ttf";
import NanumSquareLeot from "../assets/font/NanumSquareL.eot";
import NanumSquareLwoff from "../assets/font/NanumSquareL.woff";
import NanumSquareLttf from "../assets/font/NanumSquareL.ttf";
import NanumSquareReot from "../assets/font/NanumSquareR.eot";
import NanumSquareRwoff from "../assets/font/NanumSquareR.woff";
import NanumSquareRttf from "../assets/font/NanumSquareR.ttf";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
        margin:0; padding:0;

        @media(max-width: 768px){
            ::-webkit-scrollbar {
                display:none;
            }
        }
    }

    button, input {
        border: none;
        outline: none;
        background: none;
    }

    li {
        list-style:none;
    }

    @font-face {
        font-family:Druk;
        src:url(${Drukeot});
        src:url(${Drukwoff}) format('woff'),
            url(${Drukttf}) format('truetype')
    }

    @font-face {
        font-family:NanumSquare;
        src:url(${NanumSquareReot});
        src:url(${NanumSquareRwoff}) format('woff'),
            url(${NanumSquareRttf}) format('truetype')
    }

    @font-face {
        font-family:NanumSquare_acL;
        font-weight: 300;
        src:url(${NanumSquareLeot});
        src:url(${NanumSquareLwoff}) format('woff'),
            url(${NanumSquareLttf}) format('truetype')
    }

    @font-face {
        font-family:NanumSquare_acR;
        font-weight: 400;
        src:url(${NanumSquareReot});
        src:url(${NanumSquareRwoff}) format('woff'),
            url(${NanumSquareRttf}) format('truetype')
    }

    @font-face {
        font-family:NanumSquare_acB;
        font-weight: 600;
        src:url(${NanumSquareBeot});
        src:url(${NanumSquareBwoff}) format('woff'),
            url(${NanumSquareBttf}) format('truetype')
    }

    @font-face {
        font-family:NanumSquare_acEB;
        font-weight: 700;
        src:url(${NanumSquareEBeot});
        src:url(${NanumSquareEBwoff}) format('woff'),
            url(${NanumSquareEBttf}) format('truetype')
    }

    body {
        font-family: NanumSquare_acR, sans-serif;
        margin: 0px;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
