// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';

import { OuterContainer } from './styles/nonBody.styled';
import Fader from './Fader'
import Blog from './Blog';
import Side from './Side.js';

const Body = () => (
    <OuterContainer>
        <Side />
        <Fader fadeCount="800">
            <Blog />
        </Fader>
    </OuterContainer>
);



export default Body