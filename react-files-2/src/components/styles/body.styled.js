import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 120ch;
    vertical-align: middle;

    #blog-content {
        margin: 0em 1em 0em -4em;
        padding: 6em 3em 10em;
        background: linear-gradient(to right,
        ${({ theme }) => theme.colors.innerBody} ,
        transparent 85%);
        width: 50%;
        color: white;
        
        div {
            margin: 0px;
            padding: 0px;
            word-wrap: break-word;
            text-align: left;
        }
    }

    #resume {
        margin: 2em 2em auto -10em;
    }


`

