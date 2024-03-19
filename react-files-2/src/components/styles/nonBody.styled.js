import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 2.15em;
    margin: auto;
    width: 60%;
    min-width: 60%;
    display: table;
    grid-template-columns: 1fr 1fr;

    background: linear-gradient(to top ,
        ${({ theme }) => theme.colors.header} ,
       transparent 85%);

    #title-text {
        @media only screen and (min-width: 1280px) {
            float: left;
        }
    }

    #vistor-counter-text {
        @media only screen and (min-width: 1280px) {
            float: right;
        }
    }

`

export const StyledFooter = styled.div`

    margin: 0 auto;
    min-width: 70%;
    position: relative;
    align-items: right ;
    display: table;
    p , a {color: #456c82;}

`

export const BackgroundContainer = styled.div`

    width: 60%;
    min-width: 60%;
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


    min-height: 90em;
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
        margin: auto;
        height: auto;   
        padding: 2em 2em 2em 8em;
        max-width: 200%;
    }

`

