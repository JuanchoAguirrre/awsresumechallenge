import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 2.15em;
    margin: auto;
    width: 70%;
    min-width: 65%;
    display: table;
    grid-template-columns: 1fr 1fr;

    background: linear-gradient(to top ,
        ${({ theme }) => theme.colors.header} ,
       transparent 85%);

    @media only screen and (min-width: 1280px) {
        #title-text {
            float: left;
        }
        #vistor-counter-text {
            float: right;
        }
    }

`

export const StyledFooter = styled.div`

    width: 70%;
    position: relative;
    margin: 0 28%;
    display: table;
    align-items: center;
    p , a {color: #456c82;}

`

export const BackgroundContainer = styled.div`

    width: 70%;
    min-width: 70%;
    /* min-height: 120%; */
    padding: 0em 3em;
    margin: auto;

    background: linear-gradient(to bottom,
            ${({ theme }) => theme.colors.outerBody} 40%,
            transparent 130%);

    
    .fade-in {
        transition: opacity 1s ease;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 1s ease;;
    }

`

export const BlogContainer = styled.div`


    min-height: 100em;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .test {
        p {
            color: black;
        }
    }

    #diagram-image {
        margin: 20em -10em 5em 8em;
        max-width: 180%;
    }

`

