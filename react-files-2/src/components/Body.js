// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';

import { OuterContainer } from './styles/body.styled';
import Fader from './Fader'
import Blog from './Blog';

const Body = () =>  (
        <OuterContainer>
            <Fader count="1000">
                <Blog/>
            </Fader>
        </OuterContainer>
);



export default Body