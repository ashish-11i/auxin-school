import { useState, useEffect } from 'react'
import { X, Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { notices } from '../data/notices'
import { isFirebaseConfigured, getDbNotices } from '../firebase'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [noticesList, setNoticesList] = useState(notices)

  useEffect(() => {
    if (!isFirebaseConfigured) return
    let active = true
    const fetchNotices = async () => {
      const dbNotices = await getDbNotices()
      if (active && dbNotices.length > 0) {
        setNoticesList(dbNotices)
      }
    }
    fetchNotices()
    return () => { active = false }
  }, [])

  if (!visible) return null

  const tickerText = noticesList.map(n => `★ ${n.title}: ${n.desc}`).join('   ') + '   '

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Megaphone size={16} />
        <div className={styles.tickerContainer}>
          <div className={styles.tickerWrapper}>
            <div className={styles.tickerContent}>
              <span>{tickerText} <Link to="/contact">Enquire Now →</Link></span>
              <span>{tickerText} <Link to="/contact">Enquire Now →</Link></span>
            </div>
          </div>
        </div>
        <button onClick={() => setVisible(false)} aria-label="Close" className={styles.closeBtn}>
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
