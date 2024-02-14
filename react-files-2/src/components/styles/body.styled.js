import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 100ch;
    left: 0px;
    vertical-align: middle;

    #blog-content {
        margin: 0em 2em auto 2em;
        padding: 2em;
        background: linear-gradient(to bottom ,
        ${({ theme }) => theme.colors.innerBody} ,
        transparent 105%);
        width: 40%;
    }

    #resume {
        width: 50%;
    }

`

export const OuterContainer = styled.div`
    
    width: 80%;
    min-height: 100ch;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: center;

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

