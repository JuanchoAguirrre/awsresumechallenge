import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 120ch;
    vertical-align: middle;


    #blog-content {
        margin: 0em 1em 0em -4em;
        padding: 0em 4em 0em;
        background: linear-gradient(to right,
        ${({ theme }) => theme.colors.innerBody} ,
        transparent 85%);
        width: 50%;

        p {
            margin-top: -8em;
        }
        
        div {
            margin-bottom: 0em;
            padding: 0em;
            word-wrap: break-word;
            text-align: left;
        }
    }

    #resume {
        margin: 6em 2em auto -8em;
        display: flex;
        justify-content: center;
    }


`

