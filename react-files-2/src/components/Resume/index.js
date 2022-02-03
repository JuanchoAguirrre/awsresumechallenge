import React, { useState, useEffect } from 'react';


const Resume = () => {

    const [visitCount, setCount] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        // fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/putdb', {
        //     method : "POST",
        //     })
        //         .then(() => fetch('https://vt5buigdf6.execute-api.us-east-1.amazonaws.com/Prod/getdb', 
        //     {method: "GET"
        //     }))
        //     .then(res =>res.json())
        //         .then(data => {
        //     document.getElementById('visits').innerText = data.visitCount
        //     })

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
        <div className="Resume">
            <p>
                Resume Here!    
            </p>
            <div>
                {visitCount}
            </div>

        </div>
    )
}

export default Resume