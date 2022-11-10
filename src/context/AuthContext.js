import { useState, useEffect, createContext, useContext } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase";

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubCribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
        })

        return () => {
            unsubCribe()
        }
    })
    return(
        <AuthContext.Provider
        value={{
            signUp, user, userLogIn, userLogOut
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}