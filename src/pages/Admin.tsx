import { useState, useEffect } from 'react'
import {
  isFirebaseConfigured,
  getDbNotices,
  addDbNotice,
  deleteDbNotice,
  getDbEvents,
  addDbEvent,
  deleteDbEvent
} from '../firebase'
import { Notice, EventItem } from '../data/notices'
import { AlertCircle, Lock, Bell, Calendar, Trash2, Plus, Info, CheckCircle } from 'lucide-react'
import styles from './Admin.module.css'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState('')

  // Database lists
  const [noticesList, setNoticesList] = useState<Notice[]>([])
  const [eventsList, setEventsList] = useState<EventItem[]>([])
  const [loading, setLoading] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [scheduling, setScheduling] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  // Forms states
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    desc: '',
    tag: 'Notice',
    tagColor: '#1a56db',
    date: '',
    iconName: 'alert' as 'trophy' | 'calendar' | 'bell' | 'alert'
  })

  const [eventForm, setEventForm] = useState({
    title: '',
    desc: '',
    date: '',
    month: '',
    time: ''
  })

  // Set document title
  useEffect(() => {
    document.title = 'Admin Panel | Auxin Public School'
  }, [])

  // Auto-clear message
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => setMessage(null), 4000)
    return () => clearTimeout(timer)
  }, [message])

  // Load lists once logged in
  useEffect(() => {
    if (!isLoggedIn) return
    loadData()
  }, [isLoggedIn])

  const loadData = async () => {
    setLoading(true)
    const dbNotices = await getDbNotices()
    const dbEvents = await getDbEvents()
    setNoticesList(dbNotices)
    setEventsList(dbEvents)
    setLoading(false)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'auxinadmin'
    if (password === correctPassword) {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Invalid password. Please try again.')
    }
  }

  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFirebaseConfigured) {
      setMessage({ text: 'Firebase is not configured. Notice cannot be saved.', type: 'error' })
      return
    }
    setPublishing(true)
    try {
      const success = await addDbNotice({
        title: noticeForm.title,
        desc: noticeForm.desc,
        tag: noticeForm.tag,
        tagColor: noticeForm.tagColor,
        date: noticeForm.date || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        iconName: noticeForm.iconName
      })

      if (success) {
        setMessage({ text: 'Notice published successfully!', type: 'success' })
        setNoticeForm({
          title: '',
          desc: '',
          tag: 'Notice',
          tagColor: '#1a56db',
          date: '',
          iconName: 'alert'
        })
        loadData()
      } else {
        setMessage({ text: 'Failed to publish notice. Database is not connected.', type: 'error' })
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: `Error: ${err?.message || err}`, type: 'error' })
    } finally {
      setPublishing(false)
    }
  }

  const handleDeleteNotice = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return
    setLoading(true)
    try {
      const success = await deleteDbNotice(id)
      if (success) {
        setMessage({ text: 'Notice deleted successfully.', type: 'success' })
        loadData()
      } else {
        setMessage({ text: 'Failed to delete notice.', type: 'error' })
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: `Error: ${err?.message || err}`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFirebaseConfigured) {
      setMessage({ text: 'Firebase is not configured. Event cannot be saved.', type: 'error' })
      return
    }
    setScheduling(true)
    try {
      const success = await addDbEvent({
        title: eventForm.title,
        desc: eventForm.desc,
        date: eventForm.date,
        month: eventForm.month,
        time: eventForm.time
      })

      if (success) {
        setMessage({ text: 'Event added successfully!', type: 'success' })
        setEventForm({
          title: '',
          desc: '',
          date: '',
          month: '',
          time: ''
        })
        loadData()
      } else {
        setMessage({ text: 'Failed to add event.', type: 'error' })
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: `Error: ${err?.message || err}`, type: 'error' })
    } finally {
      setScheduling(false)
    }
  }

  const handleDeleteEvent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return
    setLoading(true)
    try {
      const success = await deleteDbEvent(id)
      if (success) {
        setMessage({ text: 'Event deleted successfully.', type: 'success' })
        loadData()
      } else {
        setMessage({ text: 'Failed to delete event.', type: 'error' })
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: `Error: ${err?.message || err}`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="animateFadeInUp">
        <section className={styles.loginSection}>
          <div className={`card ${styles.loginCard}`}>
            <div className={styles.lockIcon}>
              <Lock size={32} />
            </div>
            <h2>School Admin Gate</h2>
            <p>Access is restricted to school administrators. Please log in below.</p>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="adminPassword">Password</label>
                <input
                  id="adminPassword"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {loginError && <p className={styles.errorMessage}><AlertCircle size={16} /> {loginError}</p>}
              <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center' }}>
                Unlock Panel
              </button>
            </form>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="animateFadeInUp">
      <section className={styles.adminHero}>
        <div className="container">
          <span className="badge">Control Center</span>
          <h1 className="section-title">School <span className="gradientText">Dashboard</span></h1>
          <p className="section-subtitle">
            Update notices, schedule parent-teacher meetings, and coordinate holidays or news feeds.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {message && (
            <div className={`${styles.toast} ${message.type === 'success' ? styles.toastSuccess : styles.toastError}`}>
              {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <span>{message.text}</span>
            </div>
          )}

          {!isFirebaseConfigured && (
            <div className={styles.warningAlert}>
              <Info size={24} />
              <div>
                <h4>Firebase is offline or unconfigured</h4>
                <p>
                  To connect your real database, register a project on Firebase console and add VITE_FIREBASE_* credentials in your local `.env` file. Currently falling back to static mock data on user pages.
                </p>
              </div>
            </div>
          )}

          <div className={styles.dashboardGrid}>
            {/* Notices Panel */}
            <div className={styles.dashboardCol}>
              <div className={`card ${styles.editorCard}`}>
                <div className={styles.cardHeader}>
                  <Bell size={22} />
                  <h3>Publish New Announcement</h3>
                </div>
                <form onSubmit={handleAddNotice} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label>Notice Title</label>
                    <input
                      type="text"
                      value={noticeForm.title}
                      onChange={e => setNoticeForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g. Admission Open 2025"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Description</label>
                    <textarea
                      value={noticeForm.desc}
                      onChange={e => setNoticeForm(prev => ({ ...prev, desc: e.target.value }))}
                      placeholder="Enter full notice body text..."
                      rows={3}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label>Tag (Badge Label)</label>
                      <input
                        type="text"
                        value={noticeForm.tag}
                        onChange={e => setNoticeForm(prev => ({ ...prev, tag: e.target.value }))}
                        placeholder="e.g. Holiday, Result"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Badge Color</label>
                      <input
                        type="color"
                        value={noticeForm.tagColor}
                        onChange={e => setNoticeForm(prev => ({ ...prev, tagColor: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label>Notice Date (Optional)</label>
                      <input
                        type="text"
                        value={noticeForm.date}
                        onChange={e => setNoticeForm(prev => ({ ...prev, date: e.target.value }))}
                        placeholder="e.g. 15 May 2025"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Icon Symbol</label>
                      <select
                        value={noticeForm.iconName}
                        onChange={e => setNoticeForm(prev => ({ ...prev, iconName: e.target.value as any }))}
                      >
                        <option value="alert">Alert / Star</option>
                        <option value="bell">Bell</option>
                        <option value="calendar">Calendar</option>
                        <option value="trophy">Trophy / Success</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={publishing} style={{ justifyContent: 'center' }}>
                    {publishing ? 'Publishing...' : <><Plus size={18} /> Publish Announcement</>}
                  </button>
                </form>
              </div>

              {/* Active Notices List */}
              <div className={`card ${styles.listCard}`}>
                <div className={styles.cardHeader}>
                  <h3>Active Announcements</h3>
                </div>
                <div className={styles.list}>
                  {loading && noticesList.length === 0 ? <p className={styles.loadingText}>Fetching notices...</p> : null}
                  {!loading && noticesList.length === 0 ? <p className={styles.emptyText}>No notices in database.</p> : null}
                  {noticesList.map(n => (
                    <div key={n.id} className={styles.listItem}>
                      <div className={styles.listItemText}>
                        <span className={styles.listTag} style={{ color: n.tagColor }}>{n.tag}</span>
                        <h4>{n.title}</h4>
                        <p>{n.desc}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteNotice(n.id)}
                        className={styles.deleteBtn}
                        aria-label="Delete notice"
                        disabled={loading}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events Panel */}
            <div className={styles.dashboardCol}>
              <div className={`card ${styles.editorCard}`}>
                <div className={styles.cardHeader}>
                  <Calendar size={22} />
                  <h3>Schedule Upcoming Event</h3>
                </div>
                <form onSubmit={handleAddEvent} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label>Event Name</label>
                    <input
                      type="text"
                      value={eventForm.title}
                      onChange={e => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g. World Environment Day"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Short Description</label>
                    <textarea
                      value={eventForm.desc}
                      onChange={e => setEventForm(prev => ({ ...prev, desc: e.target.value }))}
                      placeholder="Brief summary of the scheduled event..."
                      rows={3}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label>Date Number</label>
                      <input
                        type="text"
                        value={eventForm.date}
                        onChange={e => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                        placeholder="e.g. 05 or 24"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Month Abbreviation</label>
                      <input
                        type="text"
                        value={eventForm.month}
                        onChange={e => setEventForm(prev => ({ ...prev, month: e.target.value }))}
                        placeholder="e.g. Jun or May"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Event Time Frame</label>
                    <input
                      type="text"
                      value={eventForm.time}
                      onChange={e => setEventForm(prev => ({ ...prev, time: e.target.value }))}
                      placeholder="e.g. 08:30 AM – 11:30 AM"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={scheduling} style={{ justifyContent: 'center' }}>
                    {scheduling ? 'Scheduling...' : <><Plus size={18} /> Schedule Event</>}
                  </button>
                </form>
              </div>

              {/* Active Events List */}
              <div className={`card ${styles.listCard}`}>
                <div className={styles.cardHeader}>
                  <h3>Scheduled Events</h3>
                </div>
                <div className={styles.list}>
                  {loading && eventsList.length === 0 ? <p className={styles.loadingText}>Fetching events...</p> : null}
                  {!loading && eventsList.length === 0 ? <p className={styles.emptyText}>No events in database.</p> : null}
                  {eventsList.map(e => (
                    <div key={e.id} className={styles.listItem}>
                      <div className={styles.listItemText}>
                        <span className={styles.listDate}>{e.date} {e.month} ({e.time})</span>
                        <h4>{e.title}</h4>
                        <p>{e.desc}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteEvent(e.id)}
                        className={styles.deleteBtn}
                        aria-label="Delete event"
                        disabled={loading}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
