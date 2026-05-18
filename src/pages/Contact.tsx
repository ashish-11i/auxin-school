import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

const info = [
  { icon: <MapPin size={22} />, label: 'Address', value: 'Sohnag Road, Salempur, Deoria, Uttar Pradesh – 274604' },
  { icon: <Phone size={22} />, label: 'Phone', value: '+91 700 747 7936' },
  { icon: <Mail size={22} />, label: 'Email', value: 'kushavahaashish5504@gmail.com' },
  { icon: <Clock size={22} />, label: 'School Hours', value: 'Mon–Sat: 8:00 AM – 1:30 PM' },
  { icon: <Clock size={22} />, label: 'Coaching Hours', value: 'Mon–Sat: 4:00 PM – 8:00 PM' },
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

  return (
    <main style={{ paddingTop: '70px' }}>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Get in Touch</span>
          <h1 className="section-title">We'd Love to Hear From You</h1>
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

            {/* Map placeholder */}
            <div className={styles.mapPlaceholder}>
              <MapPin size={40} />
              <p>Map will be embedded here</p>
              <span>Replace with Google Maps embed code</span>
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
                    <option value="coaching-primary">Coaching – Primary (Class 1–5)</option>
                    <option value="coaching-middle">Coaching – Middle School (Class 6–8)</option>
                    <option value="coaching-high">Coaching – High School (Class 9–10)</option>
                    <option value="coaching-senior">Coaching – Senior Secondary (Class 11–12)</option>
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

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  <Send size={18} /> Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
