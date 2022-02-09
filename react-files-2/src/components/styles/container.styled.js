import styled from "styled-components";

export const InnerContainer = styled.div`
    
    margin: 5em;
    
    display: inline-block;

    background-color: ${({ theme }) => theme.colors.innerBody};

`
export const OutterContainer = styled.div`
    
    width: 70vw;
    height: 100vh;

    /* float: */
    margin: auto;
    display: table;

    background-color: ${({ theme }) => theme.colors.outerBody};

`

