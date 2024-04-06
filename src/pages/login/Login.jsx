import React, { useContext } from 'react';
import Navbar from '../../components/shared/navbar/Navbar';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { signInUser, logInWithPopup } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const location = useLocation()
    const navigate = useNavigate()

    function handleLogIn(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // sign in firbase
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset()
                location.state ? navigate(location.state) : navigate('/')
            }).catch(error => console.log(error.message))
    }
    function signInWithGoogle() {
        logInWithPopup(googleProvider)
            .then(r => {
                console.log(r.user);
                location.state ? navigate(location.state) : navigate('/')
            }).catch(e => console.error(e))

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-3xl text-center my-10 font-bold">Please login</h3>
                <div className='flex justify-center my-10 '>
                    <div className="w-96 p-8 rounded-md *:w-full space-y-6  bg-base-300">

                        <form
                            className='*:w-full space-y-6'
                            onSubmit={handleLogIn}
                        >
                            <input
                                className='input' type="text"
                                required name="email" placeholder='Email'
                            />
                            <input
                                className='input' type="text"
                                required name="password" placeholder='Password'
                            />
                            <br />
                            <input
                                className='btn btn-secondary'
                                type="submit"
                                value="Log in"
                            />
                            <p>Don't have an account! Please <Link to="/register" className='text-primary'><b>Register</b></Link></p>
                        </form>
                        <p className='text-center'>------------- or -------------</p>
                        <div className='flex flex-col gap-2 text-3xl justify-center'>
                            <button onClick={signInWithGoogle} className="btn btn-outline w-full">
                                <FaGoogle className='text-xl' />
                                <span>Continue with Google</span>
                            </button>
                            <button className="btn btn-outline w-full">
                                <FaGithub className='text-xl' />
                                <span>Continue with Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;