// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';
import ReactRoundedImage from "react-rounded-image";

import { OutterContainer } from '../styles/body.styled';
import headshot from '../../public/headshot.png';
import Fader from '../Fader'

const Body = () =>  (
        <OutterContainer>

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
                    imageWidth={window.innerWidth / 6.5}
                    roundedSize="10"
                />

        </div>
        <Fader/>
        </OutterContainer>
);



export default Body