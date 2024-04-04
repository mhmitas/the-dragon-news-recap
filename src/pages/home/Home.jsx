import React from 'react';
import Heading3 from '../../components/shared/heading-3xl/Heading3';
import Header from '../../components/shared/header/Header';
import Navbar from '../../components/shared/navbar/Navbar';
import LeftSideContent from '../../components/shared/left-side-content/LeftSideContent';
import RightSideContent from '../../components/shared/right-side-content/RightSideContent';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <div className='text-center mb-20'>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideContent></LeftSideContent>
                </div>
                <div className='md:col-span-2 border'>
                    <Heading3 h3="news coming soon" />
                </div>
                <div className=''>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;