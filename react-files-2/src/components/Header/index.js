import React, { useState, useEffect }  from 'react'
import { StyledHeader, StyledDiv } from '../styles/header.styled';


const Header = () => {

    
    const [visitCount, setCount] = useState([])

    useEffect(() => {
        fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/putdb', {
            method : "POST",
        })
        .then(() => fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/getdb', 
                        {method: "GET"
                    })
                    
        )
        .then(response => response.json())
        .then(
            (data) => {
                setCount(data.visitCount)
            }
        )
    }, []);
    return (
        <StyledHeader>
            <StyledDiv
                style={{
                    float: "left",
                    display: "display-inside"
                }}
            >            
                <h2>
                    Juancho A
                </h2>
            </StyledDiv>
            <StyledDiv
                style={{
                    float: "right",
                    display: "display-inside"
                    }}
            >
                <h3>
                    Visit Counter: {visitCount}
               </h3>
            </StyledDiv>
        </StyledHeader>
    )
}

export default Header