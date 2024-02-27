import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 3em;
    margin: auto;
    width: 60%;
    display: table;
    grid-template-columns: 1fr 1fr;

    background: linear-gradient(to top ,
        ${({ theme }) => theme.colors.header} ,
       transparent 85%);

    div {
        margin: 0;
        align-items: right;
    }

`


export const OuterContainer = styled.div`


    width: 60%;
    min-height: 100ch;
    padding: 0em 3em;
    margin: auto;
    margin-bottom: -5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;



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
export const StyledFooter = styled.div`

    margin: 0 auto;
    position: relative;
    align-items: right ;
    display: table;

`
