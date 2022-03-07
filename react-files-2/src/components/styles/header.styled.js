import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;

    padding: 0 40px;
    margin: 0 10em;
    border-radius: 25px 25px 0px 0px;

    background: linear-gradient(to bottom,
        ${({ theme }) => theme.colors.header} 60%,
       transparent 100%);

`
export const StyledDiv = styled.div`

    margin: 0;
    display: 'flex';
    
`
