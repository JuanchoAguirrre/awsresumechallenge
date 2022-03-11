import React from 'react';

import { InnerContainer } from './styles/body.styled';
import Resume from './Resume';
import { Headshot } from './Headshot';

export const Blog = () => {

    // function get_resume(){

    //     fetch(window.location.href + '/s3bucket.cloud-resume-challenge/static/media/resume.e66e9d1a.pdf',
    //        { 
    //            method: 'GET',
    //            headers: {
    //             'Content-Type': 'application/pdf',
    //             'Access-Control-Allow-Origin': '*'
    //            },
    //         }
    //     )
    //     .then((response) => response.blob())
    //     .then((data) => {
    //             const url = window.URL.createObjectURL(
    //                 new Blob([data]),    
    //             );
    //             const setPdf = document.getElementsByClassName('download_resume');
    //             setPdf.href = url;
    //             setPdf.setAttribute(
    //                 'download',
    //                 'Juancho-Resume.pdf',
    //             );

    //         } 
    //     )
    //     .catch(err => {
    //         console.log(err)
    //     }
    //     );
    // }
    
    
    return (  
        <InnerContainer>
            <div>
                <h1>Blog:</h1>
                <Headshot/>
                <InnerContainer >
                    <h5>
                        Welcome to my website completely built 
                        using serverless Amazon Web Services such as DynamoDB and S3.
                        Below you can find a copy of my resume!
                        Enjoy!
                        <br/>
                            <a 
                                href='https://github.com/JuanchoAguirrre/awsresumechallenge.git' 
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                Check the repo out 
                            </a>
                    </h5>
                    <br/>
                    <i>
                        <h3
                        style={{
                            display: 'flex',
                            justifyContent: 'right'
                        }}
                        >
                            Juancho
                        </h3>
                    </i>
                </InnerContainer>
            </div>
            {/* <button className="download_resume" onClick={get_resume}>Download!</button> */}
            <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <Resume/>
            </div>
        </InnerContainer>
    )
}

export default Blog;