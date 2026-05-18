import { Link } from 'react-router-dom'
import {
  BookOpen, Users, Award, Star, ArrowRight,
  CheckCircle, GraduationCap, Brain, Lightbulb,
  Bell, Calendar, Trophy, AlertCircle
} from 'lucide-react'
import styles from './Home.module.css'

const notices = [
  {
    icon: <Trophy size={18} />,
    tag: 'Result',
    tagColor: '#16a34a',
    title: 'Class 10 Board Result 2024–25',
    desc: 'Congratulations! All our Class 10 coaching students passed. 3 students scored above 90%.',
    date: '15 May 2025',
  },
  {
    icon: <Calendar size={18} />,
    tag: 'Exam',
    tagColor: '#d97706',
    title: 'Half-Yearly Exams Schedule',
    desc: 'Half-yearly examinations for School (Class 1–5) will be held from 10 June to 18 June 2025.',
    date: '1 May 2025',
  },
  {
    icon: <Bell size={18} />,
    tag: 'Holiday',
    tagColor: '#7c3aed',
    title: 'Summer Vacation Notice',
    desc: 'School will remain closed for summer vacation from 20 June to 30 June 2025. Coaching batches continue.',
    date: '28 Apr 2025',
  },
  {
    icon: <AlertCircle size={18} />,
    tag: 'Admission',
    tagColor: '#1a56db',
    title: 'Admissions Open – Session 2025–26',
    desc: 'New admissions are open for all classes. Limited seats. Contact us or visit the school to enrol.',
    date: '1 Apr 2025',
  },
]

const stats = [
  { value: '200+', label: 'Students Enrolled' },
  { value: '10+', label: 'Experienced Teachers' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '95%', label: 'Success Rate' },
]

const features = [
  {
    icon: <BookOpen size={28} />,
    title: 'School (Class 1–5)',
    desc: 'A nurturing environment where young learners build strong academic foundations with activity-based learning.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Coaching (Class 1–12)',
    desc: 'Expert coaching across all subjects for every grade — from basics to board exam preparation.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Holistic Development',
    desc: 'Beyond academics — we focus on sports, arts, moral values, and overall personality development.',
  },
  {
    icon: <Award size={28} />,
    title: 'Proven Results',
    desc: 'Consistent top results in school and board exams, with many students securing merit positions.',
  },
]

const whyUs = [
  'Experienced and dedicated faculty',
  'Small batch sizes for personal attention',
  'Regular parent-teacher meetings',
  'Affordable fee structure',
  'Safe and clean campus',
  'Regular tests and performance tracking',
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 4 student',
    text: 'My daughter has blossomed since joining Auxin Public School. The teachers are truly dedicated and the environment is very supportive.',
    stars: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Class 10 Coaching Student',
    text: 'The coaching here completely transformed my understanding of Maths and Science. I scored 92% in boards thanks to this coaching.',
    stars: 5,
  },
  {
    name: 'Sunita Devi',
    role: 'Parent of Class 2 student',
    text: 'Very affordable fees with top quality education. Chandan sir personally takes interest in each child\'s progress.',
    stars: 5,
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">Welcome to Auxin Public School</span>
          <h1>
            Where Every Child's <br />
            <span className={styles.highlight}>Bright Future</span> Begins
          </h1>
          <p>
            Quality school education for Classes 1–5 and comprehensive coaching
            for Classes 1–12. Affordable, caring, and results-driven.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/contact" className="btn btn-primary">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <Link to="/courses" className="btn btn-outline">
              Explore Courses
            </Link>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <GraduationCap size={220} strokeWidth={0.6} />
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">What We Offer</span>
            <h2 className="section-title">Education That Makes a Difference</h2>
            <p className="section-subtitle">
              From foundation school education to advanced exam coaching — we have it all under one roof.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={`section ${styles.whySection}`}>
        <div className={`container ${styles.whyInner}`}>
          <div>
            <span className="badge">Why Choose Us</span>
            <h2 className="section-title">The Auxin Advantage</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              We combine quality education with a caring atmosphere to help every student reach their true potential.
            </p>
            <ul className={styles.whyList}>
              {whyUs.map(item => (
                <li key={item}>
                  <CheckCircle size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.whyVisual}>
            <div className={styles.whyCard}>
              <Users size={48} />
              <h3>Join Our Growing Family</h3>
              <p>Over 200 students trust us for quality education and coaching.</p>
              <Link to="/contact" className="btn btn-accent" style={{ marginTop: '1rem' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="badge">Testimonials</span>
            <h2 className="section-title">What Parents & Students Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={`card ${styles.testimonialCard}`}>
                <div className={styles.stars}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.avatar}>{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className={`section ${styles.noticeSection}`}>
        <div className="container">
          <div className={`section-header ${styles.noticeHeader}`}>
            <div>
              <span className="badge">Notice Board</span>
              <h2 className="section-title">Latest Announcements</h2>
            </div>
            <Link to="/contact" className="btn btn-outline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.noticeGrid}>
            {notices.map(n => (
              <div key={n.title} className={`card ${styles.noticeCard}`}>
                <div className={styles.noticeTop}>
                  <span
                    className={styles.noticeTag}
                    style={{ background: n.tagColor + '18', color: n.tagColor }}
                  >
                    {n.icon} {n.tag}
                  </span>
                  <span className={styles.noticeDate}>{n.date}</span>
                </div>
                <h3 className={styles.noticeTitle}>{n.title}</h3>
                <p className={styles.noticeDesc}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Enrol Your Child?</h2>
          <p>Admissions are open. Take the first step towards a brighter future today.</p>
          <Link to="/contact" className="btn btn-accent">
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
