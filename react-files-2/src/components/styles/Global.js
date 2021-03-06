import { createGlobalStyle } from "styled-components";
import backgroundImage from '../../public/background_img_pexels-pixabay-268415.jpg';

// import { Image } from 'react';

const StyleGlobal = createGlobalStyle`
    @import url('//db.onlinewebfonts.com/c/' +
    '952bab25f6798d6bb1937d67e9bee4dd?family=Sans');

    @import url('//db.onlinewebfonts.com/c/a78' + 
    'cfad3beb089a6ce86d4e280fa270b?family=Calibri');

    header {
        font-family: 'Calibri';
    }

    body {
        font-family: 'Sans', sans-serif;
        font-size: 1.15em;
        background-image: url(${backgroundImage});
    }

    /* thing causing resume to move w fade shoudld remove */
    div {
        margin: 0.5em;
    }

    @media all and (max-device-width: 480px) {

        div#wrapper {
            max-width:400px;
        }
        
    }
`
export default StyleGlobal;