import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { cover_image, title, description, readable_publish_date, url, id } = news
    return (
        <>
            <Link to={`/news/${id}`}>
                <div className="card bg-base-200 hover:border-2 border-primary shadow-xl rounded-md p-1">
                    {
                        cover_image && <div>
                            <img className='w-full rounded-md' src={cover_image} alt="Album" />
                        </div>
                    }
                    <div className="card-body">
                        {/* <h3 className='card-title'>
                    <a href={url} target='_blank'>{title}</a>
                </h3> */}
                        <h3 className='card-title'>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default NewsCard;