import styled from "styled-components";

export const InnerContainer = styled.div`
    
    height: 100%;
    margin: 5em;
    display: inline-block;
    border-radius: 25px;
    
    background: linear-gradient(to bottom,
        ${({ theme }) => theme.colors.innerBody} ,
       transparent 105%);

       background: radial-gradient(top
        ${({ theme }) => theme.colors.innerBody} ,
       transparent);
`
export const OutterContainer = styled.div`
    
    width: 70vw;
    height: 100vh;
    margin: 2em  auto 0 auto;
    display: table;

    background: linear-gradient(to top,
        ${({ theme }) => theme.colors.outerBody} 10%,
       transparent 100%);

    /* background-color: ${({ theme }) => theme.colors.outerBody}; */

`

