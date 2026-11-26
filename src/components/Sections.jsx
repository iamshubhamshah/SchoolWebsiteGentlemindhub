import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import * as Icons from 'lucide-react'
import { getSchoolConfig } from '../data/school'

export function PageHero({ eyebrow, title, description, image }) {
  return <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg,rgba(13,40,34,.88),rgba(13,40,34,.35)),url(${image})` } : {}}><div className="container"><div className="eyebrow eyebrow-light"><span/>{eyebrow}</div><h1>{title}</h1><p>{description}</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>{eyebrow}</b></div></div></section>
}
export function SectionHeading({ eyebrow, title, text, centered = false }) { return <div className={`section-heading ${centered ? 'centered' : ''}`}><div className="eyebrow"><span/>{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div> }
export function CtaBand() { const s = getSchoolConfig(); return <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow eyebrow-light"><span/> TAKE THE NEXT STEP</div><h2>Every great journey<br/>starts with a conversation.</h2><p>We'd love to help you discover if {s.name} is the right place for your child.</p></div><Link className="button button-light" to="/contact">Talk to our team <ArrowUpRight size={17}/></Link></div></section> }
export function FacilityGrid({ items }) { return <div className="facility-grid">{items.map(item => { const Icon = Icons[item.icon] || Sparkles; return <article className="facility-card" key={item.title}><div className="facility-icon"><Icon size={23}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow"><ArrowRight size={17}/></span></article> })}</div> }
export function ImageCard({ item, index }) { return <article className={`gallery-card gallery-card-${index % 3}`}><img src={item.src} alt={item.title} loading="lazy"/><div className="gallery-overlay"><span>{item.category}</span><h3>{item.title}</h3></div></article> }
