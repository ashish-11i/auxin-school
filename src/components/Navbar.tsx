import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, GraduationCap, Sun, Moon, Bell } from 'lucide-react'
import { notices, Notice } from '../data/notices'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  // Notifications State
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeModalNotice, setActiveModalNotice] = useState<Notice | null>(null)
  const [readNoticeIds, setReadNoticeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('read_notices')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Click outside to close notifications dropdown
  useEffect(() => {
    if (!showDropdown) return
    const closeDropdown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(`.${styles.notificationWrapper}`)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  }, [showDropdown])

  const unreadCount = notices.filter(n => !readNoticeIds.includes(n.id)).length

  const markAllRead = () => {
    const allIds = notices.map(n => n.id)
    setReadNoticeIds(allIds)
    localStorage.setItem('read_notices', JSON.stringify(allIds))
  }

  const openNotice = (notice: Notice) => {
    setActiveModalNotice(notice)
    setShowDropdown(false)
    if (!readNoticeIds.includes(notice.id)) {
      const nextRead = [...readNoticeIds, notice.id]
      setReadNoticeIds(nextRead)
      localStorage.setItem('read_notices', JSON.stringify(nextRead))
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <GraduationCap size={30} />
          <span>
            <strong>Auxin</strong> Public School
          </span>
        </Link>

        <div className={styles.menuArea}>
          <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Enquire Now
            </Link>
          </nav>

          {/* Bell Notification Button */}
          <div className={styles.notificationWrapper}>
            <button
              className={styles.bellBtn}
              onClick={() => setShowDropdown(prev => !prev)}
              aria-label="Notifications"
            >
              <Bell size={20} />
              {unreadCount > 0 && <span className={styles.badgeCount}>{unreadCount}</span>}
            </button>
            
            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownHead}>
                  <h3>Alert Center</h3>
                  {unreadCount > 0 && (
                    <button onClick={markAllRead} className={styles.markAllBtn}>
                      Mark all read
                    </button>
                  )}
                </div>
                <div className={styles.dropdownList}>
                  {notices.map(n => {
                    const isRead = readNoticeIds.includes(n.id)
                    return (
                      <div
                        key={n.id}
                        className={`${styles.dropdownItem} ${!isRead ? styles.unreadItem : ''}`}
                        onClick={() => openNotice(n)}
                      >
                        <div className={styles.itemTop}>
                          <span
                            className={styles.itemTag}
                            style={{ background: n.tagColor + '18', color: n.tagColor }}
                          >
                            {n.tag}
                          </span>
                          <span className={styles.itemDate}>{n.date}</span>
                        </div>
                        <h4 className={styles.itemTitle}>{n.title}</h4>
                        <p className={styles.itemDesc}>{n.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            className={styles.themeToggle}
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {activeModalNotice && (
        <div className={styles.modalOverlay} onClick={() => setActiveModalNotice(null)}>
          <div className={`card ${styles.modalContent}`} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeModal}
              onClick={() => setActiveModalNotice(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className={styles.modalHeader}>
              <span
                className={styles.modalTag}
                style={{
                  background: activeModalNotice.tagColor + '18',
                  color: activeModalNotice.tagColor
                }}
              >
                {activeModalNotice.tag}
              </span>
              <span className={styles.modalDate}>{activeModalNotice.date}</span>
            </div>
            <h2 className={styles.modalTitle}>{activeModalNotice.title}</h2>
            <p className={styles.modalDesc}>{activeModalNotice.desc}</p>
            <div className={styles.modalFooter}>
              <button
                className="btn btn-primary"
                onClick={() => setActiveModalNotice(null)}
              >
                Close & Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
