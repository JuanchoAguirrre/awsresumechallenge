import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;

    padding: 0 40px;
    margin: 0 10em 0;
    /* border-radius: 25px; */

    background-color: ${({ theme }) => theme.colors.header};

    /* background: radial-gradient(  ${({ theme }) => theme.colors.header} 20%,
        ${({ theme }) => theme.colors.backgroundFill} 180%,
       transparent 100%); */


`
export const StyledDiv = styled.div`

    margin: 0;
    display: 'flex';
    
`
