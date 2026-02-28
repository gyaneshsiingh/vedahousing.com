'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'

// ✏️ Replace this with YOUR Google account email
export const ADMIN_EMAIL = 'gsdd9875@gmail.com'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined) // undefined = loading, null = not logged in

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            // Only allow the admin email — kick everyone else out
            if (u && u.email !== ADMIN_EMAIL) {
                signOut(auth)
                setUser(null)
            } else {
                setUser(u ?? null)
            }
        })
        return () => unsub()
    }, [])

    const logout = () => signOut(auth)

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
