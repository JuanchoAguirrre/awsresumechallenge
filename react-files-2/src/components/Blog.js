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
                        using serverless Amazon Web Services. While securely served with Cloudfront and Route53 and hosted on S3,
                        on the top right is a a dynamic visitor counter implemented with DynamoDB, API Gateway, and Lambda.
                        Below you can find a copy of my resume!
                        <br/>
                            <a 
                                href='https://cloudresumechallenge.dev/docs/the-challenge/aws/' 
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                More information about the challenge  
                            </a>
                            &#160;and &#160;
                             <a 
                                href='https://github.com/JuanchoAguirrre/awsresumechallenge.git' 
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                check my repo out here!
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
            {/* <button className="download_resume" onClick={get_resume}>Download!</button> */}
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