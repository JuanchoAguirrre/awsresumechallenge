import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import '../styles/body.styled'
import Resume from "../Resume"

const Fader = props => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });
    // const [fadeCheck, setFadeCheck] = useState(false)

    useEffect(() => {

        setInterval(() => {
                    setFadeProp({
                        fade:'fade-in'
                    })
        }, 1000);
    }, [])

    return (
        <div className={fadeProp.fade} >
            < Resume/>
        </div>
    )
}

export default Fader;