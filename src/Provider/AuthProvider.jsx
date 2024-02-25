import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])
    const profileUpdate = (displayName,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName:displayName,
            photoURL:photoURL
        })
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleLogIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogIn = () =>{
        return signInWithPopup(auth,githubProvider)
    }
     const userInfo = {
        user,
        loading,
        createUser,
        login,
        profileUpdate,
        logOut,
        googleLogIn,
        githubLogIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;