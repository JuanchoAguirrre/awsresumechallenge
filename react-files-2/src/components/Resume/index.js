
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf'
import resumePDF from '../../public/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => (

        <Document 
                file={resumePDF}
                options={{ workerSrc: "/pdf.worker.js" }}
                loading="Loading Page..."
        >
                <Page  
                        pageNumber={1}
                        orientation="portrait"
                        height={window.innerHeight }
                />
        </Document>
);

export default Resume;