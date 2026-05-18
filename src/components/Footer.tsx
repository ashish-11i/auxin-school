import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Link to="/" className="footerLogo">
            <GraduationCap size={28} />
            <span><strong>Auxin</strong> Public School</span>
          </Link>
          <p>Nurturing bright minds and building strong futures since our founding. We provide quality education for Classes 1–5 and comprehensive coaching for Classes 1–12.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/courses', label: 'Courses' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(l => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Programs</h4>
          <ul>
            <li><Link to="/courses">School (Class 1–5)</Link></li>
            <li><Link to="/courses">Coaching (Class 1–12)</Link></li>
            <li><Link to="/courses">Mathematics</Link></li>
            <li><Link to="/courses">Science</Link></li>
            <li><Link to="/courses">English</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul className="footerContact">
            <li><MapPin size={16} /> Sohnag Road, Salempur, Deoria, Uttar Pardesh – 274604</li>
            <li><Phone size={16} /> +91 700 747 7936</li>
            <li><Mail size={16} /> kushavahaashish5504@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Auxin Public School & Coaching Center. All rights reserved.</p>
      </div>
    </footer>
  )
}
