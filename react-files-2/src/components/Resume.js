
import React, { useEffect, useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf'
import resumePDF from '../public/resume.pdf';
import { StyledResume } from './styles/resume.styled'
import Fader from './Fader'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const heightVal = window.innerHeight / 1.3;

// const styles = StyleSheet.create({
//         page: { height: 30}
// })j

const Resume = () => {

        const [resumeHeight, setResumeHeight] =
                useState(heightVal);

        const [displayText, setDisplayText] =
                useState(false);

        // function setResumeHeight() {

        //         useEffect(() => {
        //                 window.addEventListener('resize', setResumeHeight)

        //                 return () => {
        //                         window.removeEventListener('resize', setResumeHeight);
        //                 };

        //         }, [])
        // }

        return (
                <StyledResume>
                        <div >

                                <div
                                        onMouseEnter={() => setDisplayText(true)}
                                        onMouseLeave={() => setDisplayText(false)}>
                                        {displayText && (
                                                <Fader fadeCount="50">
                                                        <a
                                                                href={resumePDF}
                                                                target='_blank'
                                                                rel="noopener noreferrer"
                                                        >
                                                                <div>
                                                                        Download it here!
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
                                                        //  style={styles.page}
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