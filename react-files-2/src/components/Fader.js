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

            }, props.count);
    }, []) 

    return  <div className={fadeProp.fade}
                style={{margin:'0'}}
            >
           {props.children}
        </div>
    
}

export default Fader;