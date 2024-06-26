import styled from "styled-components";

export const StyledResume = styled.div`
    
    block-size: fit-content ;
    margin: 0.5em ;


    .documentDiv {
        z-index: 0;
    }

    div > div {
        display: inline-block;
        position: relative ;
        z-index: 1;
    }

    
    a > div {
        padding: 12em 13em;
        bottom: 8em;
        text-align: center;
        border-radius: 50%;
        background: radial-gradient(
            ${({ theme }) => theme.colors.outerBody},
            transparent 60%);
        position: absolute;
        text-align: center;

    }

    a {
        z-index: 3;
        position: relative;
        display: inline-block;
        margin: auto -2em;
    }
`