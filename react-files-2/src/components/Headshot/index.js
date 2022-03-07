import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import headshot from '../../public/headshot.png';


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
                imageHeight={window.innerHeight / 4}
                imageWidth={(window.innerHeight / 3)}
                roundedSize="10"
            />
        </div>

)
