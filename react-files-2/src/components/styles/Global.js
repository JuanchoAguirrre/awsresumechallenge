import { createGlobalStyle } from "styled-components";
import backgroundImage from '../../public/simple-gray-texture.jpg';

const StyleGlobal = createGlobalStyle`

        
    p , a {
            font-weight: normal;
            color: white;
            font-size: 1em;
        }

    header {
        font-size: 1.4em;
        font-weight: bold;
    }

    body {
        font-family: 'Roboto';
        background-image: url(${backgroundImage});
    }

    div {
        margin: 0em 1em;
        display: inline-grid;
    }
`
export default StyleGlobal;