
import React, { useEffect, useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf'
import resumePDF from '../public/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const heightVal = window.innerHeight / 1.3;

const Resume = () => {


        const [resumeHeight, setResumeHeight] = 
                useState(heightVal);

        useEffect(() => {
                        setResumeHeight(heightVal);
        }, [])

        return (
                <Document 
                        file={resumePDF}
                        // options={{ workerSrc: "/pdf.worker.js" }}
                        loading="Loading Page..."
                >
                        <Page  
                                pageNumber={1}
                                orientation="portrait"
                                height={resumeHeight}
                        />
                </Document>
        );
}

export default Resume;