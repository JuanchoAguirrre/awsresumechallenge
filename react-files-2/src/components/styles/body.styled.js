import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 100ch;
    margin: 0em 5em;
    display: inline-block;
    border-radius: 25px;
    block-size: fit-content;

    background: linear-gradient(to bottom ,
        ${({ theme }) => theme.colors.innerBody} ,
       transparent 105%);

`
export const OuterContainer = styled.div`
    
    width: 70vw;
    min-height: 100ch;
    margin: 0em  auto -10em auto;
    display: table;

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
