import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 3em;
    margin: auto;

    /* background-color: ${({ theme }) => theme.colors.header}; */

    background: linear-gradient(to top ,
        ${({ theme }) => theme.colors.header} ,
       transparent 85%);

    div {
        margin: 0;
        display: 'flex';
        
    }

`

export const StyledFooter = styled.div`

    margin: auto;
    position: relative;
    right: 0px;
    position: float;

`
