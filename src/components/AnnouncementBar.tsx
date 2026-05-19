import { useState } from 'react'
import { X, Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Megaphone size={16} />
        <p>
          <strong>Admissions Open for Session 2025–26!</strong>
          {' '}Limited seats available for School (Class 1–5).{' '}
          <Link to="/contact">Enquire Now →</Link>
        </p>
        <button onClick={() => setVisible(false)} aria-label="Close">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
