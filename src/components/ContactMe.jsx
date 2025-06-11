import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // 'success', 'error', or null
    const [loading, setLoading] = useState(false);
    const [resetting, setResetting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setResetting(true);
        setTimeout(() => {
            setFormData({
                name: '',
                mobile: '',
                email: '',
                subject: '',
                message: '',
            });
            setResetting(false);
        }, 500);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic frontend validation
        const phoneRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!phoneRegex.test(formData.mobile)) {
            alert('Please enter a valid 10-digit Indian mobile number');
            return;
        }

        setLoading(true);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: '1e4070e2-f5d6-4de3-a939-6f5504e0ddbf', // Replace with your actual key
                ...formData,
            }),
        });

        const result = await res.json();
        if (result.success) {
            setStatus('success');
            setFormData({
                name: '',
                mobile: '',
                email: '',
                subject: '',
                message: '',
            });
        } else {
            setStatus('error');
        }

        setLoading(false);
        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <section className="bg-light">
            <div className="contact-container container py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="contact-label d-none d-md-block" data-aos="fade-right">
                    <h2 className="vertical-text">CONTACT - ME</h2>
                </div>

                <div className="contact-form p-4" data-aos="fade-left">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input name="name" value={formData.name} onChange={handleChange} required />
                            <label>Full Name</label>
                        </div>
                        <div className="form-group">
                            <input name="mobile" value={formData.mobile} onChange={handleChange} required />
                            <label>Mobile Number</label>
                        </div>
                        <div className="form-group">
                            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                            <label>Email</label>
                        </div>
                        <div className="form-group">
                            <input name="subject" value={formData.subject} onChange={handleChange} required />
                            <label>Subject</label>
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                            <label>Message</label>
                        </div>

                        <div className="button-group mt-4">
                            <button type="submit" className="btn btn-submit" disabled={loading}>
                                {loading ? <span className="spinner"></span> : 'Submit'}
                            </button>
                            <button type="button" className="btn btn-reset" onClick={handleReset} disabled={resetting}>
                                {resetting ? <span className="spinner red"></span> : 'Reset'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Popup Messages */}
                {status === 'success' && <div className="popup success">✅ Message sent successfully!</div>}
                {status === 'error' && <div className="popup error">❌ Failed to send. Please try again!</div>}
            </div>
        </section>
    );
};

export default ContactMe;
