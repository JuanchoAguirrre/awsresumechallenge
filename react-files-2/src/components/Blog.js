import React from 'react';

import { InnerContainer } from './styles/body.styled';
import Resume from './Resume';

export const Blog = () => {
 
    return (  
        <InnerContainer >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                id='resume'
            >
                <Resume/>
            </div>
        </InnerContainer>
    )
}

export default Blog;