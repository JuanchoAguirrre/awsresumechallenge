// *props* to webisora for their pdf display function found at 
// https://github.com/webisora/displaying-pdf-using-react/blob/master/public/pdf.worker.js

import React from 'react';
import { InnerContainer, OutterContainer } from '../styles/container.styled';
import { Document, Page } from 'react-pdf';

import resumePDF from '../../public/resume.pdf';


const Resume = () => {

    return (
        <OutterContainer>
            <InnerContainer>
                <div>
                    <br/>
                    <h1>Blog:</h1>
                    <h3>
                        Hi all! I spent quite some time developing this website so 
                        take a tour, as it was all built using serverless Amazon web services
                    </h3>
                    <Document file={resumePDF}
                   options={{ workerSrc: "../public/pdf.worker.js" }}
                   ></Document>
                </div>
            </InnerContainer>
        </OutterContainer>
    )
}

export default Resume