'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '@/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'

const provider = new GoogleAuthProvider()

const Header = () => {
    const { user, logout } = useAuth()
    const router = useRouter()
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogin = async () => {
        setMenuOpen(false)
        try {
            const credential = await signInWithPopup(auth, provider)
            const u = credential.user;
            
            // Check if admin to decide where to route
            const adminRef = doc(db, 'admins', u.email);
            const adminSnap = await getDoc(adminRef);
            
            if (adminSnap.exists()) {
                router.push('/admin/dashboard')
            } else {
                router.push('/')
            }
        } catch (err) {
            const ignored = ['auth/popup-closed-by-user', 'auth/user-cancelled']
            if (!ignored.includes(err.code)) {
                console.error('Login failed:', err)
            }
        }
    }

    return (
        <>
            <header className='vh-header'>
                <div className='vh-header-inner'>
                    {/* Desktop: logo left */}
                    <div className='vh-logo vh-logo-desktop'>
                        <Link href="/">
                            <img src="/veda_logo.png" alt="vedahousing" className="vh-logo-image" />
                        </Link>
                    </div>

                    {/* Mobile: logo centered */}
                    <div className='vh-logo-mobile-wrap'>
                        <Link href="/">
                            <img src="/veda_logo.png" alt="vedahousing" className="vh-logo-image-mobile" />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="vh-nav-auth vh-nav-desktop">
                        <nav className="vh-nav">
                            {pathname !== '/' && (
                                <a href="/" className='vh-nav-link'>Home</a>
                            )}
                            {pathname !== '/properties' && (
                                <a href="/properties" className='vh-nav-link'>Explore</a>
                            )}
                            {pathname !== '/contact' && (
                                <a href="/contact" className='vh-nav-link'>Contact</a>
                            )}
                        </nav>
                        <div className="vh-auth">
                            {user ? (
                                <div className="vh-user-menu">
                                    {user.photoURL && (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="vh-avatar"
                                            referrerPolicy="no-referrer"
                                        />
                                    )}
                                    <span className="vh-user-name">{user.displayName?.split(' ')[0]}</span>
                                    <button onClick={logout} className="vh-logout-btn">Sign out</button>
                                </div>
                            ) : (
                                <button onClick={handleLogin} className="vh-login-btn">
                                    <svg width="16" height="16" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                        <path fill="none" d="M0 0h48v48H0z" />
                                    </svg>
                                    Sign in
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile: hamburger button */}
                    <button
                        className="vh-menu-btn"
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Menu"
                    >
                        <span className={`vh-menu-icon ${menuOpen ? 'vh-menu-icon-open' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="vh-mobile-menu" onClick={() => setMenuOpen(false)}>
                    <div className="vh-mobile-menu-inner" onClick={e => e.stopPropagation()}>
                        {/* <Link href="/" className="vh-mobile-menu-logo" onClick={() => setMenuOpen(false)}>
                            <img src="/veda_logo.png" alt="Vedahousing" className="vh-mobile-menu-logo-img" />
                            <span>Vedahousing</span>
                        </Link> */}
                        <nav className="vh-mobile-menu-nav">
                            {pathname !== '/' && (
                                <a href="/" className="vh-mobile-menu-link" onClick={() => setMenuOpen(false)}>
                                    🏠 Home
                                </a>
                            )}
                            {pathname !== '/properties' && (
                                <a href="/properties" className="vh-mobile-menu-link" onClick={() => setMenuOpen(false)}>
                                    🔍 Explore Properties
                                </a>
                            )}
                            {pathname !== '/contact' && (
                                <a href="/contact" className="vh-mobile-menu-link" onClick={() => setMenuOpen(false)}>
                                    📞 Contact
                                </a>
                            )}
                        </nav>
                        <div className="vh-mobile-menu-auth">
                            {user ? (
                                <div className="vh-mobile-menu-user">
                                    {user.photoURL && <img src={user.photoURL} alt={user.displayName} className="vh-avatar" referrerPolicy="no-referrer" />}
                                    <span>{user.displayName?.split(' ')[0]}</span>
                                    <button onClick={() => { logout(); setMenuOpen(false) }} className="vh-logout-btn">Sign out</button>
                                </div>
                            ) : (
                                <button onClick={handleLogin} className="vh-login-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    <svg width="16" height="16" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                        <path fill="none" d="M0 0h48v48H0z" />
                                    </svg>
                                    Sign in with Google
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header