'use client'

import { useEffect, useState, use } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useRouter } from 'next/navigation'

export default function PropertyDetail({ params }) {
    const router = useRouter();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    const unwrappedParams = use(params);
    const id = unwrappedParams?.id || ""

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;

            try {
                const docRef = doc(db, 'properties', id)
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProperty({ id: docSnap.id, ...docSnap.data() })
                } else {
                    console.error("No such Property")
                }
            } catch (error) {
                console.error("Error fetching property:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProperty()
    }, [id])

    if (loading) {
        return (
            <div className='vh-app'>
                <Header />
                <main className='vh-main pd-main'>
                    <div className="vhl-loading">Loading property details...</div>
                </main>
                <Footer />
            </div>
        )
    }

    if (!property) {
        return (
            <div className="vh-app">
                <Header />
                <main className='vh-main pd-main pd-main-error'>
                    <h2>Property Not Found</h2>
                    <button onClick={() => router.back()} className='vh-btn vh-btn-secondary'>Go Back</button>
                </main>
                <Footer />
            </div>
        )
    }

    const { title, location, type, price, beds, baths, area, description, imageUrl } = property;

    const waLink = `https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}%20at%20${encodeURIComponent(location)}`

    return (
        <div className='vh-app'>
            <Header />
            <main className='vh-main pd-container'>
                <button
                    onClick={() => router.back()}
                    className='vh-btn vh-btn-secondary pd-back-btn'>
                    ← Back
                </button>

                <div className='pd-grid'>
                    <div className='pd-image-section'>
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={title}
                                className="pd-image"
                            />
                        ) : (
                            <div className='pd-image-placeholder'>
                                No Image Available
                            </div>
                        )}
                    </div>

                    <div className='pd-details-section'>
                        <div>
                            {type && (
                                <span className={`pc-badge pc-badge-${type?.toLowerCase()} pd-badge`}>
                                    {type}
                                </span>
                            )}

                            <h1 className='pd-title'>{title}</h1>
                            <p className="pd-location">📍 {location}</p>
                        </div>

                        <div className="pd-price">
                            {price}
                        </div>

                        <div className="pd-chips-container">
                            {beds > 0 && <span className="vh-chip pd-chip">🛏 {beds} Bed{beds > 1 ? 's' : ''}</span>}
                            {baths > 0 && <span className="vh-chip pd-chip">🚿 {baths} Bath{baths > 1 ? 's' : ''}</span>}
                            {area > 0 && <span className="vh-chip pd-chip">📐 {area} sqft</span>}
                        </div>

                        {description && (
                            <div className="pd-description-container">
                                <h3 className="pd-description-title">About this Property</h3>
                                <p className="pd-description-text">
                                    {description}
                                </p>
                            </div>
                        )}

                        <div className="pd-cta-container">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vh-btn vh-btn-primary pd-cta"
                            >
                                💬 Enquire on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
