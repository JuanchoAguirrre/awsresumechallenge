import React, { useState, useEffect }  from 'react'
import { StyledHeader, } from '../styles/header.styled';

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
            <div
                style={{
                    float: "left",
                }}
            >            
                <h2>
                    Juancho A
                </h2>
            </div>
            <div
                style={{
                    float: "right",
                    }}
            >
                <h3>
                    Visit Counter: {visitCount}
               </h3>
            </div>
        </StyledHeader>
    )
}

export default Header