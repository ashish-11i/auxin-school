import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

const info = [
  { icon: <MapPin size={22} />, label: 'Address', value: 'Sohnag Road, Salempur, Deoria, Uttar Pradesh – 274604' },
  { icon: <Phone size={22} />, label: 'Phone', value: '+91 700 747 7936' },
  { icon: <Mail size={22} />, label: 'Email', value: 'kushavahaashish5504@gmail.com' },
  { icon: <Clock size={22} />, label: 'School Hours', value: 'Mon–Sat: 8:00 AM – 1:30 PM' },
]

type FormState = {
  name: string
  phone: string
  email: string
  enquiry: string
  message: string
}

const initialForm: FormState = { name: '', phone: '', email: '', enquiry: 'school', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, send form data to an API here
    setSubmitted(true)
    setForm(initialForm)
  }

  const handleWhatsAppSubmit = () => {
    const phoneNumber = '917007477936'
    const text = `Hello Auxin Public School, my name is ${form.name || '[Name]'}. I would like to enquire about school admissions.\n\n*Phone:* ${form.phone || 'N/A'}\n*Email:* ${form.email || 'N/A'}\n*Message:* ${form.message || 'N/A'}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  return (
    <main className="animateFadeInUp">
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Get in Touch</span>
          <h1 className="section-title">We'd Love to <span className="gradientText">Hear From You</span></h1>
          <p className="section-subtitle">
            Have a question about admissions, courses, or fees? Reach out — we'll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {/* Info */}
          <div>
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <div className={styles.infoList}>
              {info.map(i => (
                <div key={i.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{i.icon}</div>
                  <div>
                    <span className={styles.infoLabel}>{i.label}</span>
                    <p>{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed */}
            <div className={styles.mapContainer}>
              <iframe
                title="Auxin Public School Location Map"
                src="https://maps.google.com/maps?q=Sohnag%20Road,%20Salempur,%20Deoria,%20Uttar%20Pradesh%20%E2%80%93%20274604&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className={`card ${styles.formCard}`}>
            {submitted ? (
              <div className={styles.successMsg}>
                <CheckCircle size={56} />
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. We'll contact you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Enquiry Form</h2>
                <p className={styles.formSubtitle}>Fill in your details and we'll call you back.</p>

                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="enquiry">Enquiry For *</label>
                  <select id="enquiry" name="enquiry" value={form.enquiry} onChange={handleChange} required>
                    <option value="school">School Admission (Class 1–5)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any specific questions or requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.btnRow}>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    <Send size={18} /> Send Enquiry
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline ${styles.whatsappBtn}`}
                    onClick={handleWhatsAppSubmit}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg> Chat on WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
