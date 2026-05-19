import { useState, useEffect } from 'react'
import { BookOpen, CheckCircle, ArrowRight, Download, Award, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import styles from './Courses.module.css'

const schoolClasses = [
  {
    grade: 'Class 1',
    fee: '₹800/month',
    timing: '8:00 AM – 1:30 PM',
    subjects: ['English Reading & Phonics', 'Hindi Vyakaran', 'Mathematics (Foundational)', 'Environmental Studies', 'Art & Craft'],
    objectives: 'Focuses on sensory learning, basic numeracy, reading fluently, letter recognition, and creative expression.',
    color: '#3b82f6'
  },
  {
    grade: 'Class 2',
    fee: '₹800/month',
    timing: '8:00 AM – 1:30 PM',
    subjects: ['English Grammar', 'Hindi Sahitya', 'Mathematics (Arithmetic)', 'Environmental Studies', 'Art & Craft'],
    objectives: 'Introduces advanced vocabulary, arithmetic operations, basic safety habits, and collective teamwork.',
    color: '#10b981'
  },
  {
    grade: 'Class 3',
    fee: '₹900/month',
    timing: '8:00 AM – 1:30 PM',
    subjects: ['English Composition', 'Hindi Vyakaran', 'Mathematics (Word Problems)', 'General Science', 'Social Studies'],
    objectives: 'Prepares kids for analytical thinking, story composition, basics of plants and animal life, and regional geography.',
    color: '#f59e0b'
  },
  {
    grade: 'Class 4',
    fee: '₹900/month',
    timing: '8:00 AM – 1:30 PM',
    subjects: ['English Literature', 'Hindi Composition', 'Mathematics (Fractions & Decimals)', 'General Science', 'Social Studies'],
    objectives: 'Deepens understanding of fraction math, historical monuments, digestive and skeletal systems, and essay writing.',
    color: '#8b5cf6'
  },
  {
    grade: 'Class 5',
    fee: '₹1,000/month',
    timing: '8:00 AM – 1:30 PM',
    subjects: ['English & Hindi Literature', 'Mathematics (Geometry & Algebra Basics)', 'General Science', 'Social Studies', 'Computer Basics'],
    objectives: 'A transition year focusing on geometric constructions, basics of spreadsheets, weather cycles, and national history.',
    color: '#ec4899'
  }
]

const extraCurricular = {
  grade: 'Activities',
  fee: 'Included',
  timing: 'Every Wednesday & Saturday',
  subjects: ['Yoga & Gymnastics', 'Debate & Public Speaking', 'Drawing & Crafting', 'Music & Drama', 'Spelling Bee & Quizzes'],
  objectives: 'Nurtures creative talents, builds self-confidence, leadership qualities, physical fitness, and mental wellness.',
  color: '#06b6d4'
}

const highlights = [
  'Regular weekly progress reports and evaluations',
  'Special doubt-clearing and guidance sessions',
  'Textbooks and study aids provided at no extra cost',
  'Interactive learning classes and computer basics',
  'Small class sizes (max 25 students) for personalized attention',
  'Parent-teacher interactive meetings every month',
]

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0)
  const currentClass = activeTab < schoolClasses.length ? schoolClasses[activeTab] : extraCurricular

  useEffect(() => {
    document.title = 'Programs & Curriculum | Auxin Public School'
  }, [])

  return (
    <main className="animateFadeInUp">
      <PageHeader
        badge="Programs & Curriculum"
        title={<>Education for Every <span className="gradientText">Stage</span></>}
        subtitle="From Class 1 to Class 5 — we have the right primary program to help your child grow, learn, and excel."
      />

      {/* School Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionIcon} style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <BookOpen size={30} />
            </div>
            <div>
              <span className="badge">Primary School</span>
              <h2 className="section-title"><span className="gradientText">Curriculum Explorer</span> (Class 1–5)</h2>
              <p className="section-subtitle">
                Explore the learning highlights, schedules, fees, and syllabus details for our primary education levels.
              </p>
            </div>
          </div>

          <div className={styles.explorerContainer}>
            {/* Left Sidebar Tabs */}
            <div className={styles.tabsSidebar}>
              {schoolClasses.map((c, index) => (
                <button
                  key={c.grade}
                  className={`${styles.tabBtn} ${activeTab === index ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ '--active-color': c.color } as React.CSSProperties}
                >
                  <span className={styles.tabIndicator} style={{ backgroundColor: c.color }} />
                  {c.grade}
                </button>
              ))}
              <button
                className={`${styles.tabBtn} ${activeTab === schoolClasses.length ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(schoolClasses.length)}
                style={{ '--active-color': extraCurricular.color } as React.CSSProperties}
              >
                <span className={styles.tabIndicator} style={{ backgroundColor: extraCurricular.color }} />
                Extracurriculars
              </button>
            </div>

            {/* Right Content Panel */}
            <div className={styles.contentPanel}>
              <div className={styles.panelHeader} style={{ borderLeftColor: currentClass.color }}>
                <div>
                  <span className={styles.panelCategory} style={{ color: currentClass.color }}>
                    {activeTab < schoolClasses.length ? 'Primary Academic Program' : 'Co-Curricular Activities'}
                  </span>
                  <h2>{currentClass.grade === 'Activities' ? 'Extracurricular Activities' : `${currentClass.grade} Program`}</h2>
                </div>
                <div className={styles.panelFee}>
                  <span className={styles.feeLabel}>Tuition Fee</span>
                  <span className={styles.feeVal}>{currentClass.fee}</span>
                </div>
              </div>

              <div className={styles.panelBody}>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <Clock size={20} style={{ color: currentClass.color }} />
                    <div>
                      <strong>Timing:</strong>
                      <span>{currentClass.timing}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <Award size={20} style={{ color: currentClass.color }} />
                    <div>
                      <strong>Development Focus:</strong>
                      <span>{currentClass.objectives}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.subjectsSection}>
                  <h3>Subjects & Key Learning Modules</h3>
                  <div className={styles.subjectGrid}>
                    {currentClass.subjects.map(sub => (
                      <div key={sub} className={styles.subjectCard}>
                        <CheckCircle size={16} style={{ color: currentClass.color, flexShrink: 0 }} />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.panelFooter}>
                  <button 
                    className={`btn btn-outline ${styles.downloadBtn}`}
                    onClick={() => alert(`Downloading official Syllabus PDF for ${currentClass.grade}...`)}
                  >
                    <Download size={18} /> Download Syllabus PDF
                  </button>
                </div>
              </div>
            </div>
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
            <p>Talk to us — we'll help you pick the right class and share admission steps for your child.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
