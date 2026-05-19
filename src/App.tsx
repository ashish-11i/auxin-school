import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnnouncementBar from './components/AnnouncementBar'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeight = () => {
      const height = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ScrollToTop />
      <div className="header-wrapper" ref={headerRef}>
        <AnnouncementBar />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
