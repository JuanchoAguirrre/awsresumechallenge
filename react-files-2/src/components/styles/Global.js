import { createGlobalStyle } from "styled-components";
import backgroundImage from '../../public/simple-gray-texture.jpg';

// import { Image } from 'react';

const StyleGlobal = createGlobalStyle`


    header {
        font-family: 'Roboto';
        color: white;
    }

    body {
        font-family: 'Roboto';
        p , a {
            color: white;
            font-size: 1.20em;
            font-weight: normal;
        }
        background-image: url(${backgroundImage});
    }

    div {
        margin: 0em 1em;
        display: inline-grid;
    }

    @media all and (max-device-width: 480px) {

        div#wrapper {
            max-width:400px;
        }
        
    }
`
export default StyleGlobal;