import { useState } from 'react'
import { X } from 'lucide-react'
import styles from './Gallery.module.css'

const categories = ['All', 'Campus', 'Classroom', 'Events', 'Sports', 'Achievements']

const items = [
  { id: 1,  category: 'Campus',       title: 'School Building',    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80' },
  { id: 2,  category: 'Classroom',    title: 'Primary Classroom',  src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80' },
  { id: 3,  category: 'Events',       title: 'Annual Day 2024',    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80' },
  { id: 4,  category: 'Sports',       title: 'Sports Day',         src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80' },
  { id: 5,  category: 'Campus',       title: 'School Library',     src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80' },
  { id: 6,  category: 'Classroom',    title: 'Science Lab',        src: 'https://images.unsplash.com/photo-1532094349884-543571834595?auto=format&fit=crop&w=600&q=80' },
  { id: 7,  category: 'Achievements', title: 'Award Ceremony',     src: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=600&q=80' },
  { id: 8,  category: 'Events',       title: 'Independence Day',   src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80' },
  { id: 9,  category: 'Sports',       title: 'Cricket Match',      src: 'https://images.unsplash.com/photo-1540747913346-19212a4dbece?auto=format&fit=crop&w=600&q=80' },
  { id: 10, category: 'Campus',       title: 'Playground',         src: 'https://images.unsplash.com/photo-1555116505-38ab61800975?auto=format&fit=crop&w=600&q=80' },
  { id: 11, category: 'Achievements', title: 'Board Toppers 2024', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
  { id: 12, category: 'Events',       title: "Teacher's Day",      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null)

  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <main style={{ paddingTop: '70px' }}>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Gallery</span>
          <h1 className="section-title">Life at Chandan School</h1>
          <p className="section-subtitle">
            A glimpse into our vibrant campus, classrooms, events, and proud achievements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div className={styles.filters}>
            {categories.map(c => (
              <button
                key={c}
                className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map(item => (
              <div
                key={item.id}
                className={styles.item}
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
              >
                <img src={item.src} alt={item.title} className={styles.photo} loading="lazy" />
                <div className={styles.overlay}>
                  <p>{item.title}</p>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <img src={lightbox.src} alt={lightbox.title} className={styles.lightboxImg} />
            <div className={styles.lightboxInfo}>
              <h3>{lightbox.title}</h3>
              <span>{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
