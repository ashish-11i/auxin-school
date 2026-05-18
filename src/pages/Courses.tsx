import { BookOpen, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Courses.module.css'

const schoolClasses = [
  { grade: 'Class 1', subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Art & Craft'], fee: '₹800/month' },
  { grade: 'Class 2', subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Art & Craft'], fee: '₹800/month' },
  { grade: 'Class 3', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'], fee: '₹900/month' },
  { grade: 'Class 4', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'], fee: '₹900/month' },
  { grade: 'Class 5', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Basics'], fee: '₹1,000/month' },
]

const coachingGroups = [
  {
    label: 'Primary (Class 1–5)',
    desc: 'Foundation coaching to reinforce school learning and build exam confidence.',
    subjects: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies'],
    fee: '₹600/month',
  },
  {
    label: 'Middle School (Class 6–8)',
    desc: 'Structured coaching for all major subjects as the curriculum becomes more challenging.',
    subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science', 'Sanskrit'],
    fee: '₹900/month',
  },
  {
    label: 'High School (Class 9–10)',
    desc: 'Intensive board exam preparation with regular tests and doubt sessions.',
    subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'English', 'Hindi', 'Social Science'],
    fee: '₹1,400/month',
  },
  {
    label: 'Senior Secondary (Class 11–12)',
    desc: 'Expert coaching for Science and Commerce streams with board & entrance exam focus.',
    subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'English', 'Accountancy / Economics'],
    fee: '₹1,800/month',
  },
]

const highlights = [
  'Regular weekly tests and progress reports',
  'Special doubt-clearing sessions every Saturday',
  'Study material provided at no extra cost',
  'Board exam special batches from January',
  'Individual attention in small batch sizes (max 25 students)',
  'Parent-teacher meetings every month',
]

export default function Courses() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Programs & Courses</span>
          <h1 className="section-title">Education for Every Stage</h1>
          <p className="section-subtitle">
            From Class 1 to Class 12 — we have the right program to help your child grow, learn, and excel.
          </p>
        </div>
      </section>

      {/* School Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionIcon} style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <BookOpen size={30} />
            </div>
            <div>
              <span className="badge">Primary School</span>
              <h2 className="section-title">Auxin Public School — Class 1 to 5</h2>
              <p className="section-subtitle">
                A safe, nurturing school where young children develop curiosity, confidence, and a love for learning.
              </p>
            </div>
          </div>

          <div className={styles.classGrid}>
            {schoolClasses.map(c => (
              <div key={c.grade} className={`card ${styles.classCard}`}>
                <div className={styles.classHeader}>
                  <h3>{c.grade}</h3>
                  <span className={styles.fee}>{c.fee}</span>
                </div>
                <ul className={styles.subjectList}>
                  {c.subjects.map(s => (
                    <li key={s}><CheckCircle size={15} /> {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className={`section ${styles.coachingSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionIcon} style={{ background: '#fef3c7', color: '#d97706' }}>
              <GraduationCap size={30} />
            </div>
            <div>
              <span className="badge">Coaching Center</span>
              <h2 className="section-title">Auxin Coaching Center — Class 1 to 12</h2>
              <p className="section-subtitle">
                After-school and evening coaching batches designed to strengthen concepts and boost exam scores.
              </p>
            </div>
          </div>

          <div className={styles.coachingGrid}>
            {coachingGroups.map(g => (
              <div key={g.label} className={`card ${styles.coachingCard}`}>
                <div className={styles.coachingHeader}>
                  <h3>{g.label}</h3>
                  <span className={styles.fee}>{g.fee}</span>
                </div>
                <p className={styles.coachingDesc}>{g.desc}</p>
                <div className={styles.subjectTags}>
                  {g.subjects.map(s => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className={`container ${styles.highlightsInner}`}>
          <div>
            <span className="badge">What's Included</span>
            <h2 className="section-title">Every Program Includes</h2>
            <ul className={styles.highlightList}>
              {highlights.map(h => (
                <li key={h}><CheckCircle size={18} /> {h}</li>
              ))}
            </ul>
          </div>
          <div className={styles.enquiryBox}>
            <h3>Not Sure Which Program?</h3>
            <p>Talk to us — we'll help you pick the right course and batch timing for your child.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
