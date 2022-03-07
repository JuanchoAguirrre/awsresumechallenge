import React, { useEffect, useState } from "react"
import '../styles/body.styled'
import Blog from "../Blog";

const Fader = props => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });
    // const [fadeCheck, setFadeCheck] = useState(false)

    useEffect(() => {

        setInterval(() => {
            // if (fadeProp.fade === 'fade-out') {
                    setFadeProp({
                        fade:'fade-in'
                    })
                // } else {
                //     setFadeProp({
                //         fade:'fade-out'
                //     });
                // }
            }, 1000);
    }, []) 

    return (
        
        <div className={fadeProp.fade} >
           <Blog/>
        </div>
    )
}

export default Fader;