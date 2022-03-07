import React from 'react';

import { InnerContainer } from '../styles/body.styled';
import Resume from '../Resume';

export const Blog = () => {
    
    return (  
        <InnerContainer>
            <div>
                <h1>Blog:</h1>
                <h3>
                    Welcome to my website completely built 
                    using serverless Amazon Web Services such as DynamoDB and S3.
                    Below you can find a downloadble copy of my resume as well as
                    a brief diagram of all the services used to host this website!
                    Enjoy!
                </h3>
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
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                   <Resume/>
                </div>
            </div>
        </InnerContainer>
    )
}

export default Blog;