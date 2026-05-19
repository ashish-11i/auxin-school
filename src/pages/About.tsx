import { useEffect } from 'react'
import { Target, Eye, Heart, BookOpen, Award, Quote } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import styles from './About.module.css'

const values = [
  {
    icon: <Target size={28} />,
    title: 'Mission',
    desc: 'To deliver affordable, top-tier primary education that nurtures early cognitive growth, builds foundational literacy and numeracy, and encourages children to be curious, independent learners.'
  },
  {
    icon: <Eye size={28} />,
    title: 'Vision',
    desc: 'To establish Auxin Public School as a benchmark primary learning space where kids build core life skills, develop robust ethical character, and transition seamlessly into higher school cycles.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Values',
    desc: 'Inclusivity, character building, safety, and a creative learning drive define us. We believe in providing equal learning access and dedicated individual attention to every child.'
  },
]

const team = [
  { name: 'Chandan Kumar Singh', role: 'Founder & Principal', subject: 'Mathematics & Science', exp: '15+ years experience' },
  { name: 'Priya Gupta', role: 'Senior Primary Teacher', subject: 'English & Grammar', exp: '10+ years experience' },
  { name: 'Amit Kumar', role: 'Primary Teacher', subject: 'Social Studies & EVS', exp: '8+ years experience' },
  { name: 'Meena Singh', role: 'Primary Assistant Teacher', subject: 'Hindi & Art/Craft', exp: '7+ years experience' },
]

const milestones = [
  { year: '2014', title: 'The Genesis', event: 'Auxin Public School opened its doors with a mission to serve, starting with 50 students and 3 teaching classrooms.' },
  { year: '2017', title: 'Expansion & Recognition', event: 'Obtained official regulatory recognition and constructed our primary block to house more children.' },
  { year: '2020', title: 'Digital Integration', event: 'Set up our first interactive computer lab, introducing basic computer courses to kids from Class 3 to 5.' },
  { year: '2022', title: 'Community Trust', event: 'Successfully grew to support over 200+ students with enhanced transportation facilities.' },
  { year: '2024', title: 'Modern Facilities', event: 'Opened a dedicated children’s reading library and modern classroom amenities for interactive activities.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Auxin Public School'
  }, [])

  return (
    <main className="animateFadeInUp">
      <PageHeader
        badge="About Us"
        title={<><span className="gradientText">Nurturing Minds</span>,<br />Building Strong Foundations</>}
        subtitle="Auxin Public School has been a trusted beacon of quality primary education in Salempur, Deoria since 2014, committed to fostering curiosity and confidence."
      />

      {/* Story & Principal Desk */}
      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          {/* Left Column: Our Story */}
          <div className={styles.storyCol}>
            <span className="badge">Our Story</span>
            <h2 className="section-title"><span className="gradientText">Nurturing Young Minds</span> Since 2014</h2>
            <p className={styles.paragraph}>
              Auxin Public School was established under a simple, powerful vision: that quality, value-based primary education should be accessible to every family in Salempur, Deoria. What began with a handful of kids in a single classroom has blossomed into a trusted center of childhood education.
            </p>
            <p className={styles.paragraph}>
              Under the direct leadership of our founder, Chandan Kumar Singh, the school has focused entirely on primary development (Class 1 to 5). We understand that the early years are when children form their learning habits, moral compass, and creative confidence.
            </p>
            <p className={styles.paragraph}>
              By keeping our class sizes small, we ensure that every single child gets the personalized attention they need to master foundational language skills, basic mathematics, and logical science.
            </p>
            
            <div className={styles.statsRow}>
              {[
                { val: '200+', lbl: 'Active Pupils' },
                { val: '100%', lbl: 'Primary Pass' },
                { val: '10+', lbl: 'Years Service' },
              ].map(s => (
                <div key={s.lbl} className={styles.statItemMini}>
                  <strong>{s.val}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Principal's Desk */}
          <div className={styles.deskCol}>
            <div className={`card ${styles.deskCard}`}>
              <div className={styles.quoteIcon}>
                <Quote size={40} strokeWidth={1} />
              </div>
              <p className={styles.quoteText}>
                Primary education is not just about teaching subjects; it is about building the capacity to learn, adapt, and grow. At Auxin, we strive to make each day a stepping stone for children to discover their unique potential.
              </p>
              <hr className={styles.divider} />
              <div className={styles.principalProfile}>
                <div className={styles.principalAvatar}>C</div>
                <div>
                  <h4>Chandan Kumar Singh</h4>
                  <span className={styles.principalRole}>Founder & Principal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className={`section ${styles.mvvSection}`}>
        <div className="container">
          <div className={`section-header ${styles.centered}`}>
            <span className="badge">Our Foundation</span>
            <h2 className="section-title">Mission, Vision & <span className="gradientText">Values</span></h2>
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
            <h2 className="section-title">Key <span className="gradientText">Milestones</span></h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={`${styles.timelineContent} card`}>
                  <span className={styles.year}>{m.year}</span>
                  <h3>{m.title}</h3>
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
            <h2 className="section-title">Meet Our <span className="gradientText">Faculty</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Experienced, passionate educators who are committed to every child's success.
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
