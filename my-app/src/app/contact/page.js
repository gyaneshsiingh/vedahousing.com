'use client'

import { useState } from 'react'
import Link from 'next/link'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase/config'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', phone: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            await addDoc(collection(db, 'callbacks'), {
                ...form,
                createdAt: serverTimestamp(),
            })
            setStatus('success')
            setForm({ name: '', phone: '', message: '' })
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return (
        <div className="ct-page">
            {/* Back to home */}
            <Link href="/" className="ct-back">← Back to home</Link>

            <div className="ct-card">
                {/* Icon */}
                <div className="ct-icon">📞</div>

                <h1 className="ct-title">Request a Callback</h1>
                <p className="ct-subtitle">
                    Leave your number and we'll call you back shortly — no spam, ever.
                </p>

                {status === 'success' ? (
                    <div className="ct-success">
                        <span className="ct-success-icon">✅</span>
                        <p>Thank you! We'll call you back soon.</p>
                        <button className="ct-submit" onClick={() => setStatus('idle')}>
                            Submit another request
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="ct-form">
                        <div className="ct-field">
                            <label className="ct-label">Your Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="e.g. Rahul Sharma"
                                className="ct-input"
                                required
                            />
                        </div>

                        <div className="ct-field">
                            <label className="ct-label">Phone Number</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="e.g. +91 98765 43210"
                                className="ct-input"
                                type="tel"
                                required
                            />
                        </div>

                        <div className="ct-field">
                            <label className="ct-label">What's it about? <span className="ct-optional">(optional)</span></label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="e.g. Looking for a 2BHK flat in Lanka…"
                                className="ct-input ct-textarea"
                                rows={3}
                            />
                        </div>

                        {status === 'error' && (
                            <p className="ct-error">Something went wrong. Please try again.</p>
                        )}

                        <button type="submit" className="ct-submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending…' : 'Request Callback'}
                        </button>
                    </form>
                )}

                {/* WhatsApp alternative */}
                <p className="ct-alt">
                    Or message us directly on{' '}
                    <a
                        href="https://wa.me/919455664970"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ct-wa-link"
                    >
                        WhatsApp →
                    </a>
                </p>
            </div>
        </div>
    )
}
