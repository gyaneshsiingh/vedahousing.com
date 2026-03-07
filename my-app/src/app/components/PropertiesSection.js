'use client'

import { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import PropertyCard from './PropertyCard'
import PropertyFilters from './PropertyFilters'

const PAGE_SIZE = 3

export default function PropertiesSection() {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

    useEffect(() => {
        const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'))
        const unsub = onSnapshot(q, (snap) => {
            setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })))
            setLoading(false)
        })
        return () => unsub()
    }, [])

    // Reset visible count when filter/search changes
    useEffect(() => {
        setVisibleCount(PAGE_SIZE)
    }, [filter, search])

    const filtered = properties.filter(p => {
        const matchesType = filter === 'All' || p.type === filter
        const q = search.toLowerCase()
        const matchesSearch = !q ||
            p.title?.toLowerCase().includes(q) ||
            p.location?.toLowerCase().includes(q)
        return matchesType && matchesSearch
    })

    const visible = filtered.slice(0, visibleCount)
    const hasMore = visibleCount < filtered.length

    return (
        <section id="explore" className="hs-section">
            <div className="hs-inner">
                <div className="hs-header">
                    <p className="vh-eyebrow">VEDAHOUSING · VARANASI</p>
                    <h2 className="hs-title">
                        Find Your <span className="vh-title-highlight">Perfect Property</span>
                    </h2>
                    <p className="hs-subtitle">
                        Verified listings · Zero hidden charges · Book tours in one tap
                    </p>
                </div>

                <PropertyFilters
                    filter={filter}
                    setFilter={setFilter}
                    search={search}
                    setSearch={setSearch}
                />

                {loading ? (
                    <div className="vhl-loading">
                        {[1, 2, 3].map(i => <div key={i} className="vhl-skeleton" />)}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="vhl-empty">
                        <p className="vhl-empty-text">
                            {properties.length === 0
                                ? 'No properties listed yet. Check back soon!'
                                : 'No properties match your search.'}
                        </p>
                        {(search || filter !== 'All') && (
                            <button
                                onClick={() => { setSearch(''); setFilter('All') }}
                                className="vh-btn vh-btn-secondary"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="vhl-grid">
                            {visible.map(p => <PropertyCard key={p.id} property={p} />)}
                        </div>

                        {hasMore && (
                            <div className="hs-load-more-wrap">
                                <button
                                    className="hs-load-more-btn"
                                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                                >
                                    Load more properties ({filtered.length - visibleCount} remaining)
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}
