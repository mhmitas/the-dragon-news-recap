import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function registerUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
        return signOut(auth)
    }
    function logInWithPopup(provider) {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        logInWithPopup,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;