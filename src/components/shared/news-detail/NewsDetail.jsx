import React from 'react';
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from '../navbar/Navbar';

const NewsDetail = () => {
    const news = useLoaderData()
    // console.log(news);
    const { cover_image, title, description, readable_publish_date, url, body_markdown, body_html } = news

    return (
        <div>
            {/* <Header></Header> */}
            <Navbar></Navbar><br /><br />
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={cover_image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p>{description}</p> */}
                    <div>
                        {parse(`${body_html}`)}
                        {/* {
                            body_html
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;