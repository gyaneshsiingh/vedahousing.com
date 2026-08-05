'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore'
import { useAuth } from '@/context/AuthContext'
import { db } from '@/firebase/config'
import Link from 'next/link'

export default function AdminDashboard() {
    const { user, logout } = useAuth()
    const router = useRouter()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState(null)
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    // Redirect if not logged in
    useEffect(() => {
        if (user === null && !isLoggingOut) router.replace('/admin/login')
    }, [user, router, isLoggingOut])

    // Fetch properties once logged in
    useEffect(() => {
        if (!user) return
        fetchProperties()
    }, [user])

    const fetchProperties = async () => {
        setLoading(true)
        try {
            const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'))
            const snap = await getDocs(q)
            setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })))
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (property) => {
        if (!confirm(`Delete "${property.title}"?`)) return
        setDeleting(property.id)
        try {
            await deleteDoc(doc(db, 'properties', property.id))
            setProperties(prev => prev.filter(p => p.id !== property.id))
        } catch (e) {
            alert('Failed to delete. Try again.')
        } finally {
            setDeleting(null)
        }
    }

    const handleLogout = async () => {
        setIsLoggingOut(true)
        router.push('/')
        await logout()
    }

    if (user === undefined || loading) {
        return (
            <div className="admin-loading">
                <div className="admin-spinner" />
            </div>
        )
    }

    return (
        <div className="admin-page">
            <header className="admin-topbar">
                <div className="admin-topbar-inner">
                    <div className="admin-topbar-left">
                        <img src="/logo.svg" alt="Vedahousing" className="admin-topbar-logo" />
                        <span className="admin-topbar-tag">Admin Panel</span>
                    </div>
                    <div className="admin-topbar-actions">
                        <Link href="/admin/dashboard/upload" className="admin-btn-add">+ Add Property</Link>
                        <button onClick={handleLogout} className="admin-btn-logout">Logout</button>
                    </div>
                </div>
            </header>

            <main className="admin-main">
                <h1 className="admin-page-title">
                    All Properties <span className="admin-count">{properties.length}</span>
                </h1>

                {properties.length === 0 ? (
                    <div className="admin-empty">
                        <p>No properties yet.</p>
                        <Link href="/admin/dashboard/upload" className="admin-btn-add">Add your first property</Link>
                    </div>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map(p => (
                                    <tr key={p.id}>
                                        <td>
                                            {p.imageUrl
                                                ? <img src={p.imageUrl} alt={p.title} className="admin-table-img" />
                                                : <div className="admin-table-img-placeholder" />
                                            }
                                        </td>
                                        <td className="admin-td-title">{p.title}</td>
                                        <td>
                                            <span className={`admin-badge admin-badge-${p.type?.toLowerCase()}`}>
                                                {p.type}
                                            </span>
                                        </td>
                                        <td>{p.location}</td>
                                        <td className="admin-td-price">{p.price}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(p)}
                                                disabled={deleting === p.id}
                                                className="admin-btn-delete"
                                            >
                                                {deleting === p.id ? '…' : 'Delete'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    )
}
