
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf'
import { PDFViewer, View, Text, StyleSheet } from '@react-pdf/renderer';
import resumePDF from '../../public/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
   

const pdfStyles = StyleSheet.create({
    viewer: {
        height: window.innerHeight /2 ,
        width: window.innerWidth / 3,
    },
    page: { 
        flexDirection: 'row' 
    },
    section: { 
        textAlign: 'center',
        margin: 30 
    }
});


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


// ReactPDF.renderToFile(<Resume/>)

export default Resume;