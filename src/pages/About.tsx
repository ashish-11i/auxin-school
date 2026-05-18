import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react'
import styles from './About.module.css'

const values = [
  { icon: <Target size={26} />, title: 'Mission', desc: 'To provide affordable, high-quality education that empowers every student to achieve their academic and personal goals.' },
  { icon: <Eye size={26} />, title: 'Vision', desc: 'To be the most trusted educational institution in the region, known for academic excellence and holistic development.' },
  { icon: <Heart size={26} />, title: 'Values', desc: 'Integrity, dedication, inclusivity, and a genuine love for learning — these are the pillars of everything we do.' },
]

const team = [
  { name: 'Chandan Kumar Singh', role: 'Founder & Principal', subject: 'Mathematics & Science', exp: '15+ years' },
  { name: 'Priya Gupta', role: 'Senior Teacher', subject: 'English & Hindi', exp: '10+ years' },
  { name: 'Amit Kumar', role: 'Senior Teacher', subject: 'Social Studies', exp: '8+ years' },
  { name: 'Sunita Rao', role: 'Coaching Faculty', subject: 'Physics & Chemistry', exp: '12+ years' },
  { name: 'Rajesh Pandey', role: 'Coaching Faculty', subject: 'Mathematics', exp: '10+ years' },
  { name: 'Meena Singh', role: 'Primary Teacher', subject: 'All Subjects (1–3)', exp: '7+ years' },
]

const milestones = [
  { year: '2014', event: 'Auxin Public School founded with 50 students' },
  { year: '2016', event: 'Coaching Center launched for Classes 6–10' },
  { year: '2018', event: 'Expanded to a dedicated coaching building' },
  { year: '2020', event: 'Coaching extended to Classes 11 & 12' },
  { year: '2022', event: 'Crossed 400+ enrolled students' },
  { year: '2024', event: 'New classrooms and library inaugurated' },
]

export default function About() {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">About Us</span>
          <h1 className="section-title">Building Futures,<br />One Student at a Time</h1>
          <p className="section-subtitle">
            Auxin Public School and Coaching Center has been a beacon of quality education in our community since 2014.
            Founded by Chandan Kumar Singh with a vision to make excellent education accessible to all.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className={`container ${styles.storyGrid}`}>
          <div>
            <span className="badge">Our Story</span>
            <h2 className="section-title">From a Small Classroom to a Thriving Institution</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.8 }}>
              Auxin Public School was born from a simple but powerful idea: every child in our community deserves access to quality education, regardless of their financial background.
            </p>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.8 }}>
              Starting with just 50 students in 2014, our founder Chandan Kumar Singh built the school from the ground up, personally teaching every subject in the early years. His dedication and the results he achieved attracted more students and more talented teachers.
            </p>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.8 }}>
              Today, we run a full-fledged primary school for Classes 1–5 and a comprehensive coaching center serving students from Class 1 all the way to Class 12, helping them excel in school exams and board examinations alike.
            </p>
          </div>
          <div className={styles.statsBox}>
            {[
              { icon: <Users size={28} />, val: '500+', lbl: 'Students' },
              { icon: <BookOpen size={28} />, val: '15+', lbl: 'Teachers' },
              { icon: <Award size={28} />, val: '95%', lbl: 'Success Rate' },
              { icon: <Target size={28} />, val: '5+', lbl: 'Years' },
            ].map(s => (
              <div key={s.lbl} className={styles.statItem}>
                <div className={styles.statIcon}>{s.icon}</div>
                <strong>{s.val}</strong>
                <span>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className={`section ${styles.mvvSection}`}>
        <div className="container">
          <div className={`section-header ${styles.centered}`}>
            <span className="badge">Our Foundation</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className={styles.mvvGrid}>
            {values.map(v => (
              <div key={v.title} className={`card ${styles.mvvCard}`}>
                <div className={styles.mvvIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className={`section-header ${styles.centered}`}>
            <span className="badge">Our Journey</span>
            <h2 className="section-title">Key Milestones</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={`section-header ${styles.centered}`}>
            <span className="badge">Our Team</span>
            <h2 className="section-title">Meet Our Faculty</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Experienced, passionate educators who are committed to every student's success.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map(t => (
              <div key={t.name} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{t.name.split(' ').map(w => w[0]).join('')}</div>
                <h3>{t.name}</h3>
                <span className={styles.teamRole}>{t.role}</span>
                <div className={styles.teamMeta}>
                  <span><BookOpen size={14} /> {t.subject}</span>
                  <span><Award size={14} /> {t.exp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
