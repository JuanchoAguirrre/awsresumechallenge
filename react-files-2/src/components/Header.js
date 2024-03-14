import React, { useState, useEffect } from 'react'
import { StyledHeader, } from './styles/nonBody.styled';

const Header = () => {


    const [visitCount, setCount] = useState([])

    useEffect(() => {
        fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/putdb', {
            method: "POST",
        })
            .then(() => fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/getdb',
                {
                    method: "GET"
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
                <p>    The AWS Resume Challenge </p>
            </h2>
            <h3
                style={{
                    float: "right",
                }}
            >
                <p>    Visit Counter: {visitCount}</p>
            </h3>
        </StyledHeader>
    )
}

export default Header