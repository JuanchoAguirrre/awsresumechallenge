import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 3em;
    margin: auto;

    background-color: ${({ theme }) => theme.colors.header};

    div {
        margin: 0;
        display: 'flex';
        
    }

`
