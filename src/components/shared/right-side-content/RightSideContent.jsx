import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../q-zone/QZone';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideContent = () => {
    const { user, logInWithPopup } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    // console.log(user);
    function signInWithGoogle() {
        logInWithPopup(googleProvider)
            .then((result) => {
                console.log(result.user);
                location.state ? navigate(location.state) : navigate('/')
            }).catch(error => console.log(error.message))
    }

    return (
        <div className='flex flex-col gap-3'>
            {
                user ? "" : <div className='space-y-2 mb-6'>
                    <h3 className='text-2xl'>Login with</h3>
                    <button onClick={signInWithGoogle} className="btn btn-outline w-full">
                        <FaGoogle className='text-xl' />
                        Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub className='text-xl' />
                        Github
                    </button>
                </div>
            }

            <div className='space-y-2 mb-6'>
                <h3 className='text-2xl'>Find Us On</h3>
                <div className="border border-b-0 rounded-md *:rounded-md *:border-b">
                    <Link href="" className='p-4 flex items-center gap-4'>
                        <FaFacebook className='text-2xl'></FaFacebook>
                        <span>Facebook</span>
                    </Link>
                    <Link href="" className='p-4 flex items-center gap-4'>
                        <FaTwitter className='text-2xl'></FaTwitter>
                        <span>Facebook</span>
                    </Link>
                    <Link href="" className='p-4 flex items-center gap-4'>
                        <FaInstagram className='text-2xl'></FaInstagram>
                        <span>Facebook</span>
                    </Link>
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