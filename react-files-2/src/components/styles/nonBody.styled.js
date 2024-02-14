import styled from "styled-components";

export const StyledHeader = styled.header`
    
    overflow: hidden;   
    padding: 0em 3em;
    margin: auto;
    width: 80%;
    display: table;
    grid-template-columns: 1fr 1fr;

    background: linear-gradient(to top ,
        ${({ theme }) => theme.colors.header} ,
       transparent 85%);

    div {
        margin: 0;
        align-items: right ;

    }

`

export const StyledFooter = styled.div`

    margin: 0 auto;
    position: relative;
    align-items: right ;
    display: table;

`
