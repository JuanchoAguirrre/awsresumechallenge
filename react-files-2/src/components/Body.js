// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';

import { BlogContainer } from './styles/nonBody.styled';
import { InnerContainer } from './styles/body.styled';
import diagram from '../public/diagram.png'
import Fader from './Fader'
import Blog from './Blog.js';
import Resume from './Resume';

const Body = () => (
    <div>
        <BlogContainer>
            <Blog />
            <Fader fadeCount="800">
                <InnerContainer >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        id='resume'
                    >
                        <Resume />
                    </div>
                </InnerContainer>
            </Fader>
        </BlogContainer>
        <div>
            <img src={diagram} alt="Diagram" />
        </div>
    </div>
);



export default Body