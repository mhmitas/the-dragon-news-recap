import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    function registerUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        registerUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;