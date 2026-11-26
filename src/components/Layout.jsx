import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { getSchoolConfig } from '../data/school'

export default function Layout() {
  const school = getSchoolConfig()
  const [open, setOpen] = useState(false)
  const links = [['Home', '/'], ['About', '/about'], ['Facilities', '/facilities'], ['Gallery', '/gallery'], ['Contact', '/contact']]
  return <>
    <div className="topbar"><div className="container topbar-inner"><span><MapPin size={13}/>{school.location}</span><span className="topbar-right"><Phone size={13}/>{school.phone}<i className="topbar-dot"/> Admissions open · Enquire today</span></div></div>
    <header className="header"><div className="container nav-wrap">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">{school.logo}</span><span><b>{school.name}</b><small>LEARN · LEAD · THRIVE</small></span></Link>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Enquire now <ArrowUpRight size={16}/></Link></nav>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></header>
    <main><Outlet/></main>
    <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Link to="/" className="brand brand-light"><span className="brand-mark">{school.logo}</span><span><b>{school.name}</b><small>LEARN · LEAD · THRIVE</small></span></Link><p>Growing curious minds, nurturing kind hearts and preparing every learner for a brighter tomorrow.</p><div className="socials"><a href={school.social.instagram} aria-label="Instagram"><Instagram/></a><a href={school.social.facebook} aria-label="Facebook"><Facebook/></a><a href={school.social.youtube} aria-label="YouTube"><Youtube/></a></div></div><div><h4>Explore</h4>{links.map(([label,path])=><Link key={path} to={path}>{label}</Link>)}</div><div><h4>Get in touch</h4><p><MapPin size={15}/>{school.address}</p><p><Phone size={15}/>{school.phone}</p><p>{school.email}</p><p>{school.hours}</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span><span>Website demo by <b>Gentle Mind Hub</b></span></div></footer>
    <a className="floating-whatsapp" href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent(`Hello ${school.name}, I would like to know more about admissions.`)}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>Chat with us</span><Phone size={19}/></a>
  </>
}
