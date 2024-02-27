import React from 'react';
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Side = () => (
    <InnerContainer>
        <div id="blog-content">
                <Headshot />
            <div>
                <h5>
                    <p>Welcome to my website completely built
                    using serverless Amazon Web Services. </p>
                    <p>While securely served with Cloudfront and Route53 and hosted on S3,
                    on the top right is a a dynamic visitor counter implemented with DynamoDB, API Gateway, and Lambda.
                    Below you can find a copy of my resume!</p>
                    <a
                        href='https://cloudresumechallenge.dev/docs/the-challenge/aws/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        Find information about the challenge here
                    </a>
                    &#160;or&#160;
                    <a
                        href='https://github.com/JuanchoAguirrre/awsresumechallenge.git'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                    check out my repository here!
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
