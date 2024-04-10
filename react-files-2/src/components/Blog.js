import React from 'react'
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Blog2 = () => (
    <InnerContainer>
        <div id="blog-content">
            <Headshot />
            <div>
                <p >
                    Securely served with Cloudfront and Route53 and hosted on S3,
                    the aim of the challenge was to build a website with a solely serverless backend.
                    The dynamic visitor counter found at the top right is also powered by an AWS Lambda function,
                    DynamoDB table, and API Gateway, all written in python.
                </p>
                <p>
                    Below you can find a diagram of the services used to power this website
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
