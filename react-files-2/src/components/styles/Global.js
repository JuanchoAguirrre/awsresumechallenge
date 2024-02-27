import { createGlobalStyle } from "styled-components";
import backgroundImage from '../../public/simple-gray-texture.jpg';

// import { Image } from 'react';

const StyleGlobal = createGlobalStyle`
    @import url('//db.onlinewebfonts.com/c/' +
    '952bab25f6798d6bb1937d67e9bee4dd?family=Sans');

    @import url('//db.onlinewebfonts.com/c/a78' + 
    'cfad3beb089a6ce86d4e280fa270b?family=Roboto');


    header {
        font-family: 'Calibri';
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 1.25em;
        background-image: url(${backgroundImage});
    }

    /* thing causing resume to move w fade shoudld remove */
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