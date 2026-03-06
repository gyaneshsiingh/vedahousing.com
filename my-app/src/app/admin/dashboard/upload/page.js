'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '@/context/AuthContext'
import { db } from '@/firebase/config'
import Link from 'next/link'

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
const PROPERTY_TYPES = ['Buy', 'Rent', 'PG']

async function uploadToCloudinary(file, onProgress) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('folder', 'vedahousing/properties')

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`)

        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                onProgress(Math.round((e.loaded / e.total) * 100))
            }
        })

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText)
                resolve({ url: data.secure_url, publicId: data.public_id })
            } else {
                reject(new Error(`Upload failed: ${xhr.responseText}`))
            }
        })

        xhr.addEventListener('error', () => reject(new Error('Network error during upload')))
        xhr.send(formData)
    })
}

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
            // Step 1: Upload image to Cloudinary
            const { url: imageUrl, publicId: imageRef } = await uploadToCloudinary(imageFile, setProgress)

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
            setError(err.message || 'Upload failed. Please try again.')
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
