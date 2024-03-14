import React from 'react';
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Blog2 = () => (
    <InnerContainer>
        <div id="blog-content">
            <Headshot />
            <div>
                <p>Welcome to my website completely built
                    using serverless Amazon Web Services and third party tools.
                </p>
                <p>While securely served with Cloudfront and Route53 and hosted on S3,
                    on the top right is a a dynamic visitor counter implemented with DynamoDB, API Gateway, and Lambda.
                    Below you can find a copy of my resume!
                </p>
                <p>
                    <a
                        href='https://cloudresumechallenge.dev/docs/the-challenge/aws/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        Find out more information about the challenge
                    </a>
                </p>
            </div>
        </div>
    </InnerContainer>

);

export default Blog2
