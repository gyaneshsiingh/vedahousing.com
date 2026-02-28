'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useAuth } from '@/context/AuthContext'
import { db, storage } from '@/firebase/config'
import Link from 'next/link'

const PROPERTY_TYPES = ['Buy', 'Rent', 'PG']

export default function UploadProperty() {
    const { user } = useAuth()
    const router = useRouter()

    const [form, setForm] = useState({
        title: '', location: '', type: 'Buy',
        price: '', beds: '', baths: '', area: '', description: '',
    })
    const [imageFile, setImageFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [progress, setProgress] = useState(0)
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState('')

    if (user === null) {
        router.replace('/admin/login')
        return null
    }

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setImageFile(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!imageFile) { setError('Please select a property image.'); return }
        setUploading(true)
        try {
            // Step 1: Upload image
            const imageRef = `properties/${Date.now()}_${imageFile.name}`
            const uploadTask = uploadBytesResumable(ref(storage, imageRef), imageFile)

            const imageUrl = await new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snap) => setProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
                    reject,
                    async () => resolve(await getDownloadURL(uploadTask.snapshot.ref))
                )
            })

            // Step 2: Save to Firestore
            await addDoc(collection(db, 'properties'), {
                ...form,
                beds: Number(form.beds) || 0,
                baths: Number(form.baths) || 0,
                area: Number(form.area) || 0,
                imageUrl, imageRef,
                createdAt: serverTimestamp(),
            })

            router.push('/admin/dashboard')
        } catch (err) {
            console.error(err)
            setError('Upload failed. Please try again.')
            setUploading(false)
        }
    }

    return (
        <div className="admin-page">
            <header className="admin-topbar">
                <div className="admin-topbar-inner">
                    <img src="/veda_logo.png" alt="Vedahousing" className="admin-topbar-logo" />
                    <Link href="/admin/dashboard" className="admin-btn-logout">← Back</Link>
                </div>
            </header>

            <main className="admin-main">
                <h1 className="admin-page-title">Add New Property</h1>

                <form onSubmit={handleSubmit} className="upload-form">
                    <div className="upload-image-section">
                        <label className="upload-image-label" htmlFor="image-input">
                            {preview
                                ? <img src={preview} alt="Preview" className="upload-preview" />
                                : <div className="upload-placeholder">
                                    <span className="upload-icon">🖼️</span>
                                    <span>Click to upload property image</span>
                                </div>
                            }
                        </label>
                        <input id="image-input" type="file" accept="image/*" onChange={handleImage} className="upload-file-input" />
                    </div>

                    <div className="upload-fields">
                        <div className="admin-field">
                            <label className="admin-label">Property Title</label>
                            <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. 3BHK Luxury Flat" className="admin-input" required />
                        </div>
                        <div className="admin-field">
                            <label className="admin-label">Location</label>
                            <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Lanka, Varanasi" className="admin-input" required />
                        </div>
                        <div className="upload-row">
                            <div className="admin-field">
                                <label className="admin-label">Type</label>
                                <select name="type" value={form.type} onChange={handleChange} className="admin-input admin-select">
                                    {PROPERTY_TYPES.map(t => <option key={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="admin-field">
                                <label className="admin-label">Price</label>
                                <input name="price" value={form.price} onChange={handleChange} placeholder="e.g. ₹85 L or ₹18K/mo" className="admin-input" required />
                            </div>
                        </div>
                        <div className="upload-row">
                            <div className="admin-field">
                                <label className="admin-label">Bedrooms</label>
                                <input name="beds" type="number" min="0" value={form.beds} onChange={handleChange} placeholder="3" className="admin-input" />
                            </div>
                            <div className="admin-field">
                                <label className="admin-label">Bathrooms</label>
                                <input name="baths" type="number" min="0" value={form.baths} onChange={handleChange} placeholder="2" className="admin-input" />
                            </div>
                            <div className="admin-field">
                                <label className="admin-label">Area (sqft)</label>
                                <input name="area" type="number" min="0" value={form.area} onChange={handleChange} placeholder="1200" className="admin-input" />
                            </div>
                        </div>
                        <div className="admin-field">
                            <label className="admin-label">Description</label>
                            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the property…" className="admin-input admin-textarea" rows={4} />
                        </div>

                        {error && <p className="admin-error">{error}</p>}
                        {uploading && (
                            <div className="upload-progress-wrap">
                                <div className="upload-progress-bar" style={{ width: `${progress}%` }} />
                                <span className="upload-progress-text">{progress}%</span>
                            </div>
                        )}
                        <button type="submit" className="admin-submit-btn" disabled={uploading}>
                            {uploading ? `Uploading… ${progress}%` : 'Publish Property'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}
