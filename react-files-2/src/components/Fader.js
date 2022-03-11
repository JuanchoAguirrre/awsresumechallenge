import React, { useEffect, useState } from "react"
import './styles/body.styled'
import Blog from "./Blog";

const Fader = props => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect(() => {

        setInterval(() => {
                    setFadeProp({
                        fade:'fade-in'
                    })

            }, 1000);
    }, []) 

    return (
        
        <div className={fadeProp.fade} >
           <Blog/>
        </div>
    )
}

export default Fader;