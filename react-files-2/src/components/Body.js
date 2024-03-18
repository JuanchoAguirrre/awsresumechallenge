// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';

import { BlogContainer, BackgroundContainer } from './styles/nonBody.styled';
import { InnerContainer } from './styles/body.styled';
import diagram from '../public/diagram.png'
import Fader from './Fader'
import Blog from './Blog.js';
import Resume from './Resume';

const Body = () => (
    <BackgroundContainer>
        <Fader fadeCount="800">
            <BlogContainer>
                <Blog />
                <InnerContainer >
                    <div  id='resume'  >
                        <Resume />
                    </div>
                </InnerContainer>
                <div>
                    <h2><p>Services Diagram</p></h2>
                    <img id="diagram-image" src={diagram} alt="Diagram" />
                </div>
            </BlogContainer>
        </Fader>
    </BackgroundContainer>
);



export default Body