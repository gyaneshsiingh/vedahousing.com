import React from 'react'

export default function PropertyCard({ property }) {
    const { title, location, type, price, beds, baths, area, imageUrl } = property
    const waLink = `https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}%20at%20${encodeURIComponent(location)}`

    return (
        <div className="pc-card">
            <div className="pc-image-wrap">
                {imageUrl
                    ? <img src={imageUrl} alt={title} className="pc-image" loading="lazy" />
                    : <div className="pc-image-placeholder" />
                }
                <span className={`pc-badge pc-badge-${type?.toLowerCase()}`}>{type}</span>
            </div>
            <div className="pc-body">
                <h3 className="pc-title">{title}</h3>
                <p className="pc-location">📍 {location}</p>
                <p className="pc-price">{price}</p>
                <div className="pc-chips">
                    {beds > 0 && <span className="vh-chip">🛏 {beds} Bed{beds > 1 ? 's' : ''}</span>}
                    {baths > 0 && <span className="vh-chip">🚿 {baths} Bath{baths > 1 ? 's' : ''}</span>}
                    {area > 0 && <span className="vh-chip">📐 {area} sqft</span>}
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="pc-cta">
                    💬 Enquire on WhatsApp
                </a>
            </div>
        </div>
    )
}
