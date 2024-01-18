import React from 'react';

import { InnerContainer } from './styles/body.styled';
import Resume from './Resume';
import { Headshot } from './Headshot';

export const Blog = () => {
 
    return (  
        <InnerContainer>
            <div>
                <h1>Juancho A</h1>
                <Headshot/>
                <InnerContainer id='blog-content'>
                    <h5>
                        Welcome to my website completely built 
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
                </InnerContainer>
            </div>
            <button className="download_resume" onClick={get_resume}>Download!</button>
            <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <Resume/>
            </div>
        </InnerContainer>
    )
}

export default Blog;