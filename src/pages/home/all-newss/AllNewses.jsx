import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../../components/shared/news-card/NewsCard';

const AllNews = () => {
    const news = useLoaderData()
    return (
        <div className='flex flex-col gap-6 p-2'>
            {
                news.map(
                    n => <NewsCard key={n.id} news={n}></NewsCard>
                )
            }
        </div>
    );
};

export default AllNews;