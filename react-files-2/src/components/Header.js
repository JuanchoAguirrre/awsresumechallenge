import React, { useState, useEffect }  from 'react'
import { StyledHeader, } from './styles/nonBody.styled';

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
                <h2
                style={{
                    float: "left",
                }}
                >
                    Juancho A
                </h2>
                <h3
                style={{
                    float: "right",
                }}
                >
                    Visit Counter: {visitCount}
               </h3>
        </StyledHeader>
    )
}

export default Header