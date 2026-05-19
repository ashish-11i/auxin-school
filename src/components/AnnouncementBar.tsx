import { useState } from 'react'
import { X, Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const tickerText = "★ Admissions Open for Session 2025–26! Limited seats available for Classes 1 to 5. ★ Parent-Teacher Meeting (PTM) scheduled on Saturday, May 24th. ★ World Environment Day Celebrations on June 5th."

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
