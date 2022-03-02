// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';
import ReactRoundedImage from "react-rounded-image";

import Resume from '../Resume';
import Fader from '../Fader'
import { InnerContainer, OutterContainer } from '../styles/body.styled';
import headshot from '../../public/headshot.png';

const Body = () => {

    return (
        <>
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
                    imageHeight={window.innerHeight / 3}
                    imageWidth={window.innerWidth / 4.8}
                    roundedSize="10"
                />
        </div>

            <InnerContainer>
                <div>
                    <br/>
                    <h1>Blog:</h1>
                    <h3>
                        Welcome to my website completely built 
                        using serverless Amazon Web Services such as DynamoDB and S3.
                        Below you can find a downloadble copy of my resume as well as
                        a brief diagram of all the services used to host this website!
                        Enjoy!
                    </h3>
                    <br/>
                    <h3
                        style={{
                            alignContent: 'flex-end',
                        }}
                    >Juancho</h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                <>  
                    <Fader />
                </>
                    </div>
            </InnerContainer>
        
        </OutterContainer>
        </>   
    )
}



export default Body