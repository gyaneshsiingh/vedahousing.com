import React from 'react'
import { PROPERTYFILTERS_CONSTANTS } from './propertyFilters.constants';

export default function PropertyFilters({ filter, setFilter, search, setSearch }) {
    return (
        <div className="pf-wrap">
            <div className="pf-search-wrap">
                <span className="pf-search-icon">🔍</span>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title or location…" className="pf-search-input" />
                {search && (
                    <button onClick={() => setSearch('')} className="pf-clear-btn" aria-label="Clear">✕</button>
                )}
            </div>
            <div className="pf-pills">
                {PROPERTYFILTERS_CONSTANTS.map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                        className={`pf-pill ${filter === f ? 'pf-pill-active' : ''}`}>
                        {f}
                    </button>
                ))}
            </div>
        </div>
    )
}
