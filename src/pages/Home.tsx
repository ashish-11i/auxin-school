import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, Users, Award, Star, ArrowRight,
  CheckCircle, Brain, Lightbulb,
  Bell, Calendar, Trophy, AlertCircle,
  Plus, Minus
} from 'lucide-react'
import { notices, events } from '../data/notices'
import styles from './Home.module.css'

const getNoticeIcon = (iconName: string) => {
  switch (iconName) {
    case 'trophy': return <Trophy size={18} />
    case 'calendar': return <Calendar size={18} />
    case 'bell': return <Bell size={18} />
    case 'alert':
    default:
      return <AlertCircle size={18} />
  }
}

const stats = [
  { value: '200+', label: 'Students Enrolled' },
  { value: '10+', label: 'Experienced Teachers' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '95%', label: 'Success Rate' },
]

const features = [
  {
    icon: <BookOpen size={28} />,
    title: 'Primary School (Class 1–5)',
    desc: 'A nurturing environment where young learners build strong academic foundations with activity-based learning.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Modern Curriculum',
    desc: 'Focusing on mathematics, science, language skills, and foundational concepts for cognitive growth.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Holistic Development',
    desc: 'Beyond academics — we focus on sports, arts, moral values, and overall personality development.',
  },
  {
    icon: <Award size={28} />,
    title: 'Proven Excellence',
    desc: 'Consistent outstanding results in school examinations, helping students stand out and succeed.',
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
    name: 'Sanjay Kumar',
    role: 'Parent of Class 5 student',
    text: 'The teachers here are very friendly and experienced. My son\'s foundation in mathematics and science has become extremely strong.',
    stars: 5,
  },
  {
    name: 'Sunita Devi',
    role: 'Parent of Class 2 student',
    text: 'Very affordable fees with top quality education. Chandan sir personally takes interest in each child\'s progress.',
    stars: 5,
  },
]

const faqs = [
  {
    q: 'What classes does Auxin Public School offer?',
    a: 'We offer primary school education for Classes 1 to 5. We focus on building strong foundational skills in languages, mathematics, science, and environmental studies during these critical early years.'
  },
  {
    q: 'What are the school hours?',
    a: 'Our primary school classes run from Monday to Saturday, 8:00 AM to 1:30 PM. We maintain a balanced schedule that covers core academics, co-curricular activities, and active recess.'
  },
  {
    q: 'Is school transportation available?',
    a: 'Yes, we provide safe and reliable van and bus transportation services for students residing in Salempur and nearby villages. Contact our office for details on routes and fee structures.'
  },
  {
    q: 'What is the student-to-teacher ratio?',
    a: 'We keep our class sizes small with a maximum of 25 students per class. This allows our teachers to give individual attention and personalized guidance to every child.'
  },
  {
    q: 'How can I apply for admission?',
    a: 'You can initiate admission by clicking the \'Enquire Now\' button, filling out the enquiry form on our Contact page, or visiting our campus on Sohnag Road. We guide you through the documents and basic interaction check.'
  }
]

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'Auxin Public School | Nurturing Minds & Building Foundations'
  }, [])

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <main className="animateFadeInUp">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className="badge">Welcome to Auxin Public School</span>
            <h1>
              Where Every Child's <br />
              <span className={styles.highlight}>Bright Future</span> Begins
            </h1>
            <p>
              Quality primary school education for Classes 1–5. Affordable, caring, and foundation-focused.
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
          <div className={styles.heroVisual}>
            <div className={styles.imageWrapper}>
              <img
                src="/hero-students.png"
                alt="Happy students at Auxin Public School"
                className={styles.heroImage}
              />
              <div className={styles.imageCard}>
                <Award size={24} className={styles.imageCardIcon} />
                <div>
                  <h4>100% Pass Rate</h4>
                  <p>In Board Exams</p>
                </div>
              </div>
              <div className={styles.imageCardSecondary}>
                <Users size={24} className={styles.imageCardIcon} />
                <div>
                  <h4>200+ Students</h4>
                  <p>Enrolled this year</p>
                </div>
              </div>
            </div>
            <div className={styles.blob}></div>
          </div>
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
            <h2 className="section-title">Education That Makes a <span className="gradientText">Difference</span></h2>
            <p className="section-subtitle">
              Building strong academic foundations and personal character from Class 1 to 5.
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
              <p>Over 200 students trust us for quality primary school education.</p>
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

      {/* Notice Board & Events Calendar */}
      <section className={`section ${styles.noticeSection}`}>
        <div className="container">
          <div className={styles.boardGrid}>
            
            {/* Notices Column */}
            <div className={styles.noticeCol}>
              <div className={styles.columnHead}>
                <span className="badge">Announcements</span>
                <h2 className="section-title"><span className="gradientText">Notice Board</span></h2>
              </div>
              <div className={styles.noticeList}>
                {notices.map(n => (
                  <div key={n.title} className={`card ${styles.verticalNotice}`}>
                     <div className={styles.noticeTop}>
                       <span
                         className={styles.noticeTag}
                         style={{ background: n.tagColor + '18', color: n.tagColor }}
                       >
                         {getNoticeIcon(n.iconName)} {n.tag}
                       </span>
                       <span className={styles.noticeDate}>{n.date}</span>
                     </div>
                     <h3 className={styles.noticeTitle}>{n.title}</h3>
                     <p className={styles.noticeDesc}>{n.desc}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Events Column */}
            <div className={styles.eventCol}>
              <div className={styles.columnHead}>
                <span className="badge">School Calendar</span>
                <h2 className="section-title">Upcoming <span className="gradientText">Events</span></h2>
              </div>
              <div className={styles.eventList}>
                {events.map((e, idx) => (
                  <div key={idx} className={`card ${styles.eventCard}`}>
                    <div className={styles.calendarSheet}>
                      <div className={styles.sheetMonth}>{e.month}</div>
                      <div className={styles.sheetDate}>{e.date}</div>
                    </div>
                    <div className={styles.eventDetails}>
                      <h3>{e.title}</h3>
                      <span className={styles.eventTime}>{e.time}</span>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Frequently Asked Questions</span>
            <h2 className="section-title">Common <span className="gradientText">Questions</span> from Parents</h2>
            <p className="section-subtitle">
              Find answers to the most common queries about admissions, schedules, transportation, and school policies.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                  <button
                    className={styles.faqHeader}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className={styles.faqContent}>
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
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
