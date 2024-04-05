import React, { useContext } from 'react';
import Navbar from '../../components/shared/navbar/Navbar';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {

    const { signInUser } = useContext(AuthContext)

    function handleLogIn(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // sign in firbase
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset()
            }).catch(error => console.log(error.message))
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
                        <div className='flex text-3xl justify-center gap-6 '>
                            <button className='btn-btn' >
                                <FaGoogle />
                            </button>
                            <button className='btn-btn' >
                                <FaGithub />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;