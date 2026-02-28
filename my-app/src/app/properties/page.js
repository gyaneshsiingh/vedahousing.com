'use client'

import { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters from '../components/PropertyFilters'

export default function PropertiesPage() {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'))
        const unsub = onSnapshot(q, (snap) => {
            setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })))
            setLoading(false)
        })
        return () => unsub()
    }, [])

    const filtered = properties.filter(p => {
        const matchesType = filter === 'All' || p.type === filter
        const q = search.toLowerCase()
        const matchesSearch = !q || p.title?.toLowerCase().includes(q) || p.location?.toLowerCase().includes(q)
        return matchesType && matchesSearch
    })

    return (
        <div className="vh-app">
            <Header />
            <main className="vhl-page">
                <div className="vhl-header">
                    <p className="vh-eyebrow">VEDAHOUSING · VARANASI</p>
                    <h1 className="vhl-title">Find Your <span className="vh-title-highlight">Perfect Property</span></h1>
                    <p className="vhl-subtitle">Verified listings • Zero hidden charges • Book tours in one tap</p>
                </div>

                <PropertyFilters filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />

                {loading ? (
                    <div className="vhl-loading">
                        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="vhl-skeleton" />)}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="vhl-empty">
                        <p className="vhl-empty-text">
                            {properties.length === 0 ? 'No properties listed yet. Check back soon!' : 'No properties match your search.'}
                        </p>
                        {(search || filter !== 'All') && (
                            <button onClick={() => { setSearch(''); setFilter('All') }} className="vh-btn vh-btn-secondary">
                                Clear filters
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="vhl-grid">
                        {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
