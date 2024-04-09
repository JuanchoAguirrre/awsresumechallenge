import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 50em;
    vertical-align: middle;


    #blog-content {
        margin: 0em 1em 0em -4em;
        padding: 0em 4em 0em;
        background: linear-gradient(to right,
        ${({ theme }) => theme.colors.innerBody} ,
        transparent 85%);
        width: 50%;
                
        #face-img {
            margin-top: 5em;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            padding: 0;
        }


        div {
            padding: 0em;
            word-wrap: break-word;
            text-align: left;
        }
    }

    #resume {
        margin: 6em 2em auto -10em;
        display: flex;
        justify-content: center;
    }

    #diagram-title {
        margin: auto;
    }


`

