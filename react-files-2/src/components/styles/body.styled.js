import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 100ch;
    left: 0px;
    vertical-align: middle;

    #blog-content {
        margin: 0em 12em auto -4em;
        padding: 3em;
        background: linear-gradient(to bottom ,
        ${({ theme }) => theme.colors.innerBody} ,
        transparent 105%);
        width: 50%;
        
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

