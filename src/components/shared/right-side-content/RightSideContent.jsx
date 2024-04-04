import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../q-zone/QZone';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideContent = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='space-y-2 mb-6'>
                <h3 className='text-2xl'>Login with</h3>
                <button className="btn btn-outline w-full">
                    <FaGoogle className='text-xl' />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className='text-xl' />
                    Github
                </button>
            </div>
            <div className='space-y-2 mb-6'>
                <h3 className='text-2xl'>Find Us On</h3>
                <div className="border border-b-0 rounded-md *:rounded-md *:border-b">
                    <a href="" className='p-4 flex items-center gap-4'>
                        <FaFacebook className='text-2xl'></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a href="" className='p-4 flex items-center gap-4'>
                        <FaTwitter className='text-2xl'></FaTwitter>
                        <span>Facebook</span>
                    </a>
                    <a href="" className='p-4 flex items-center gap-4'>
                        <FaInstagram className='text-2xl'></FaInstagram>
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
            {/* // Q-Zone */}
            <div className='space-y-2 mb-6'>
                <h3 className='text-2xl'>Q-Zone</h3>
                <QZone image={qzone1} text="Swimming"></QZone>
                <QZone image={qzone2} text="Class"></QZone>
                <QZone image={qzone3} text="Plaground"></QZone>
            </div>
        </div>
    );
};

export default RightSideContent;