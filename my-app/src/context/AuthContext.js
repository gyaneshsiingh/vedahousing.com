'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';


// export const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined) // undefined = loading, null = not logged in
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (u) => {

            if (!u) {
                setUser(null);
                setError(null);
                return;
            }

            // The user just authenticated, but we need to verify their
            // admin status in Firestore. While we do this async check,
            // we must put the state back to 'undefined' (loading) so 
            // the Dashboard doesn't immediately kick them out.
            setUser(undefined);

            if (!u.email) {
                await signOut(auth);
                setUser(null);
                setError('No email found for user')
                return;
            }

            try {
                const adminRef = doc(db, 'admins', u.email);
                const adminSnap = await getDoc(adminRef);

                if (adminSnap.exists()) {
                    u.isAdmin = true;
                } else {
                    u.isAdmin = false;
                }
                setUser(u);
                setError(null);
            } catch (err) {
                console.error(err);
                setUser(null);
                setError('Something went wrong');
            }
        })
        return () => unsub()
    }, [])

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)