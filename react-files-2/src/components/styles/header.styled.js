import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;
    padding: 1em;
    margin:  auto 10em;
    background-color: ${({ theme }) => theme.colors.header};

    div {
        margin: 0;
        display: 'flex';
        
    }

`
