import React from 'react';
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Side = () => (
    <InnerContainer>
        <div id="blog-content">
                <Headshot />
            <div>
                <h5>
                    Welcome to my website completely built
                    using serverless Amazon Web Services. While securely served with Cloudfront and Route53 and hosted on S3,
                    on the top right is a a dynamic visitor counter implemented with DynamoDB, API Gateway, and Lambda.
                    Below you can find a copy of my resume!
                    <br />
                    <a
                        href='https://cloudresumechallenge.dev/docs/the-challenge/aws/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        More information about the challenge
                    </a>
                    &#160;and&#160;
                    <a
                        href='https://github.com/JuanchoAguirrre/awsresumechallenge.git'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                    check my repo out here!
                    </a>

                </h5>
                <br />
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
        </div>
    </InnerContainer>

);

export default Side
