import React from 'react'
import { InnerContainer } from './styles/body.styled';
import { Headshot } from './Headshot';

const Blog2 = () => (
    <InnerContainer>
        <div id="blog-content">
            <Headshot />
            <div>
                <h3>About me</h3>
                <p>
                    My name's Juancho and I'm an IT enthusiast with experience as a cloud engineer, full stack developer
                    and software engineer. I'm interested in the latest developments in DevOps, AI, and digital health to name a few.
                    In my free time, I play guitar, write music and screenplays, as well as participate in musicals and 
                    practice Brazilian jiu-jitsu.
                </p>
                <h3>About the website</h3>
                <p>
                    Securely served with Cloudfront and Route53 and hosted on S3,
                    the aim of the challenge was to build a website with a solely serverless backend.
                    The dynamic visitor counter found at the top right is also powered by an AWS Lambda function,
                    DynamoDB table, and API Gateway, all written in python. Below you can find a diagram of the services used to power this website
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
