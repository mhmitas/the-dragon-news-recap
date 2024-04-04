import React from 'react';
import Heading3 from '../../components/shared/heading-3xl/Heading3';
import Header from '../../components/shared/header/Header';
import Navbar from '../../components/shared/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Heading3 h3="Welcome to home"></Heading3>
        </div>
    );
};

export default Home;