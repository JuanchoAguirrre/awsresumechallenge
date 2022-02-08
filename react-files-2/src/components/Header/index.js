import React, { useState, useEffect }  from 'react'
import { StyledHeader } from '../styles/header.styled';


const Header = () => {

    
    const [visitCount, setCount] = useState([])
    // const [isLoading, setLoading] = useState(false)

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
            <p>
                Header Here!
            </p>
            <div>
               Visit Counter: {visitCount}
            </div>
        </StyledHeader>
    )
}

export default Header