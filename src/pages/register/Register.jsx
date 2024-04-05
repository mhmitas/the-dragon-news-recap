import React, { useContext, useState } from 'react';
import Navbar from '../../components/shared/navbar/Navbar';
// import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const [registerError, setRegisterError] = useState(null)
    const { registerUser } = useContext(AuthContext)

    function handleRegister(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name, photo, email, password);
        registerUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset()
            }).catch(error => setRegisterError(error.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-3xl text-center my-10 font-bold">Please Register</h3>
                <div className='flex justify-center my-10 '>
                    <div className="w-96 p-8 rounded-md *:w-full space-y-6  bg-base-300">

                        <form
                            className='*:w-full space-y-6'
                            onSubmit={handleRegister}
                        >
                            <input className='input' type="text" name="name" placeholder='Name' />
                            <input className='input' type="text" name="photo" placeholder='Photo URL' />
                            <input className='input' type="text" required name="email" placeholder='Email' />
                            <input className='input' type="text" required name="password" placeholder='Password' />
                            {registerError && <p>{registerError}</p>}
                            <br />
                            <input className='btn btn-secondary' type="submit" value="Register" />
                            <p>Already have an account! Please <Link to="/login" className='text-primary'><b>Login</b></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;