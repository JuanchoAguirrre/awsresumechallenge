import { createGlobalStyle } from "styled-components";

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
    }
`
export default StyleGlobal;