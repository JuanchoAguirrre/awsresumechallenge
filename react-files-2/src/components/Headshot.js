// *props* to AmineVolk for their rounded image element  found at 
// https://github.com/AmineVolk/react-rounded-image#readme

import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import headshot from '../public/headshot_3.png';


export const Headshot = () => (
        <div
            style={{
                margin: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center'
        }}>
            <ReactRoundedImage 
                image={headshot}
                alt='' 
                imageHeight={window.innerHeight / 6}
                imageWidth={(window.innerHeight / 6)}
                roundedSize="10"
            />
        </div>

)
