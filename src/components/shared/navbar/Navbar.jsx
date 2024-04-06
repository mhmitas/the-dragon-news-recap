import React, { useContext } from 'react';
import userDefault from '../../../assets/user.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)

    const navigate = useNavigate()
    function handleSignOut() {
        logOut()
            .then(() => {
                console.log('Sign-out successful.');
                navigate('/')

            }).catch(error => console.error(error))

    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Career</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-200 rounded-md my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">The Dragon News</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                {
                    loading ?
                        <div className='navbar-end'>
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                        :
                        <div className="navbar-end flex gap-2 mr-4">

                            {/* //Login logOut */}
                            {
                                user ?
                                    <>
                                        {
                                            user.photoURL ?
                                                <img className="w-10 rounded-full border-2 border-secondary" src={`${user.photoURL}`} alt="" />
                                                :
                                                <>
                                                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                                        <div className="w-10 rounded-full">
                                                            <img alt="Tailwind CSS Navbar component" src={userDefault} />
                                                        </div>
                                                    </div>
                                                    <p> {user.email}</p>
                                                </>
                                        }
                                        <button
                                            onClick={handleSignOut}
                                            className="btn btn-primary"
                                        >Sign out</button>
                                    </>
                                    :
                                    <Link to="/login">
                                        <button className="btn btn-primary">Login</button>
                                    </Link>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;