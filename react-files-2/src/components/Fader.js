import React, { useEffect, useState } from "react"
import './styles/body.styled'

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

    return  <div className={fadeProp.fade} >
           {props.children}
        </div>
    
}

export default Fader;