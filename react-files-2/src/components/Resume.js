
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import resumePDF from '../public/resume.pdf';
import { StyledResume } from './styles/resume.styled'
import Fader from './Fader'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const actualHeightVal = window.innerWidth / 2;


const Resume = () => {

        let workedHeightVal = actualHeightVal > 640 ? 640 : actualHeightVal;

        const [resumeHeight, setResumeHeight] =
                useState(workedHeightVal);

        const [displayText, setDisplayText] =
                useState(false);

        useEffect(() => {
                        setResumeHeight(workedHeightVal);
        }, [workedHeightVal])

        return (
                <StyledResume>
                        <div >

                                <div
                                        onMouseEnter={() => setDisplayText(true)}
                                        onMouseLeave={() => setDisplayText(false)}
                                >
                                        {displayText && (
                                                <Fader fadeCount="50">
                                                        <a
                                                                href={resumePDF}
                                                                target='_blank'
                                                                rel="noopener noreferrer"
                                                        >
                                                                <div>
                                                                        <p>Download it here!</p>
                                                                </div>
                                                        </a>
                                                </Fader>
                                        )}
                                        <div className='documentDiv'>
                                                < Document
                                                        file={resumePDF}
                                                        loading="Loading Page..."
                                                >
                                                        <Page size="A4"
                                                                pageNumber={1}
                                                                orientation="portrait"
                                                                height={resumeHeight}
                                                        />
                                                </Document>
                                        </div>
                                </div>
                        </div>
                </StyledResume>

        );
}

export default Resume;