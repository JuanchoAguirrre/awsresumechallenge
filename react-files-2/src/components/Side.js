import React from 'react';

import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';


export const Side = () => {


    return (
        <InnerContainer >
            <div id='blog-content'>
                <h1>Juancho A</h1>
                <Headshot/>
                    <h5>
                        Welcome to my website entirely built 
                        using serverless Amazon Web Services such as DynamoDB and S3.
                        Below you can find a copy of my resume!
                        In terms of my experience, 
                        <br/>
                            <a 
                                href='https://github.com/JuanchoAguirrre/awsresumechallenge.git' 
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                Check the repo out.
                            </a>
                    </h5>
                    <br/>
                    <i>
                        <h3
                        style={{
                            display: 'flex',
                            justifyContent: 'right'
                        }}
                        >
                            Juancho
                        </h3>
                    </i>
                </div>
            </InnerContainer>

    )

}

export default Side;