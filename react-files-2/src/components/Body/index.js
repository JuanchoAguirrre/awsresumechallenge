// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';
import ReactRoundedImage from "react-rounded-image";

import Resume from '../Resume';
import { InnerContainer, OutterContainer } from '../styles/body.styled';
import headshot from '../../public/headshot.png';

const Body = () => {

    return (
        <>

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
                    imageHeight={window.innerHeight / 3}
                    imageWidth={window.innerWidth / 4.8}
                    roundedSize="10"
                />
        </div>
        <OutterContainer>
            <InnerContainer>
                <div>
                    <br/>
                    <h1>Blog:</h1>
                    <h3>
                        Hi all! I spent quite some time developing this website so 
                        take a tour, as it was all built using serverless Amazon web services
                    </h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                           >

                    <Resume />
                    </div>
            </InnerContainer>
        
        </OutterContainer>
        </>   
    )
}



export default Body