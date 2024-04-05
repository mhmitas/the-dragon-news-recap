import React from 'react';
import Header from '../../components/shared/header/Header';
import Navbar from '../../components/shared/navbar/Navbar';
import LeftSideContent from '../../components/shared/left-side-content/LeftSideContent';
import RightSideContent from '../../components/shared/right-side-content/RightSideContent';
import BreakingNews from './BreakingNews';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <div className='text-center mb-20'>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {/* Left side */}
                <div className=''>
                    <LeftSideContent></LeftSideContent>
                </div>
                {/* /main container */}
                <div className='md:col-span-3 lg:col-span-2'>
                    <Outlet></Outlet>
                </div>
                {/* Right side */}
                <div className='hidden md:block'>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;