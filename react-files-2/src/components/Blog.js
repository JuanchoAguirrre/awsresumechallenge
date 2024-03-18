import React from 'react'
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Blog2 = () => (
    <InnerContainer>
        <div id="blog-content">

            <Headshot />
            <div>
                <p >
                    Welcome to my website entirely composed of
                    serverless Amazon Web Services and third party tools. Securely served with Cloudfront and Route53 and hosted on S3,
                    the aim of the challenge was to build a website with a backend
                    leveraging solely serverless services. For example, the dynamic
                    visitor counter found
                </p>
                <a
                    href='https://cloudresumechallenge.dev/docs/the-challenge/aws/'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <p>
                        Find out more information about the challenge
                    </p>
                </a>
            </div>
        </div>
    </InnerContainer>

);

export default Blog2
