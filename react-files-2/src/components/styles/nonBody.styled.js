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
        align-items: right ;
    display: table;

    }

`

export const StyledFooter = styled.div`

    margin: 0 auto;
    position: relative;
    align-items: right ;
    display: table;
    /* width: 50%; */
    /* position: float; */

`
