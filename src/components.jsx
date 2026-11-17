import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Instagram, MapPin, Phone, MessageCircle, Dumbbell, Trophy, CalendarDays, Clock, ChevronRight } from "lucide-react";
import { siteConfig } from "./config/siteConfig";

export function JoinButton({ className = "", children = "JOIN THE FIGHT" }) {
  const url = siteConfig.brand.registrationFormUrl;
  return <a className={`join-button ${className}`} href={url} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={17}/></a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => { setOpen(false); }, [location]);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <Link to="/" className="brand"><img src={siteConfig.brand.logo} alt="City Fight Club logo" onError={(e) => { e.currentTarget.style.display="none"; }} /><span>CITY <b>FIGHT</b><small>CLUB · BENGALURU</small></span></Link>
    <nav className={open ? "nav open" : "nav"}>{siteConfig.navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<JoinButton className="nav-join"/></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
  </header>;
}

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? "center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div><Link to="/" className="footer-brand">CITY <b>FIGHT</b> CLUB</Link><p>{siteConfig.brand.description}</p><strong className="footer-tag">{siteConfig.footer.tagline}</strong></div>
      <div><h4>EXPLORE</h4>{siteConfig.navigation.slice(0,6).map(([n,u]) => <a key={n} href={u}>{n}</a>)}</div>
      <div><h4>OUR BRANCHES</h4>{Object.values(siteConfig.branches).map(b => <Link key={b.id} to={`/branches/${b.id}`}>{b.shortName} <ArrowUpRight size={13}/></Link>)}</div>
      <div><h4>GET IN TOUCH</h4><a href={siteConfig.brand.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a><a href="#contact"><MessageCircle size={15}/> Enquiries</a><JoinButton/></div>
    </div>
    <div className="footer-bottom"><span>{siteConfig.footer.copyright}</span><span>BUILT ON DISCIPLINE.</span></div>
  </footer>;
}

export function BranchCard({ branch }) {
  return <article className="branch-card">
    <div className="branch-image" style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.88),rgba(0,0,0,.08)),url("${branch.image}")`}}><span className="branch-number">{branch.number} / BRANCH</span><span className="branch-arrow"><ArrowUpRight/></span></div>
    <div className="branch-content"><span className="eyebrow">CITY FIGHT CLUB</span><h3>{branch.shortName.toUpperCase()}</h3><p>{branch.address}</p><div className="branch-actions"><Link className="text-link" to={`/branches/${branch.id}`}>EXPLORE BRANCH <ArrowRight size={16}/></Link><a className="icon-link" href={branch.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16}/> DIRECTIONS</a></div></div>
  </article>;
}

export function ProgramCard({ program }) {
  return <article className="program-card">
    <div className="program-image" style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.7),transparent 70%),url("${program.image}")`}}><span>{program.short}</span></div>
    <div className="program-info"><h3>{program.name}</h3><p>{program.description}</p><div className="program-meta"><span><Clock size={14}/> {program.duration}</span><span>{program.level}</span></div><div className="branch-tags">{program.branches.map(id => <span key={id}>{siteConfig.branches[id].shortName}</span>)}</div></div>
  </article>;
}

export function Pricing({ branch }) {
  return <div className="pricing-grid">{branch.pricing.map((p) => <div className="price-card" key={p.name}><span>{p.name}</span><strong>{p.price}</strong><small>{p.detail}</small><JoinButton className="price-join">ENQUIRE <ArrowRight size={14}/></JoinButton></div>)}</div>;
}

export function Timetable({ branch }) {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  return <div className="schedule-grid">{days.map(day => {
    const entries = branch.schedule.filter(s => s.day === day);
    return <div className="day-card" key={day}><h4>{day}</h4>{entries.length ? entries.map(s => <div className="session" key={s.id}><b>{s.session}</b><span>{s.start} – {s.end}</span><small>{s.coach} · {s.level}</small>{s.notes && <small>{s.notes}</small>}</div>) : <p className="no-session">No session details added.</p>}</div>;
  })}</div>;
}

export function ContactBranch({ branch }) {
  return <div className="contact-branch"><div><span className="eyebrow">{branch.number} / BRANCH</span><h3>{branch.shortName}</h3><p><MapPin size={15}/>{branch.address}</p><p><Phone size={15}/>{branch.phone}</p></div><div className="contact-actions"><a className="outline-button" href={branch.mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={15}/></a><a className="outline-button" href={branch.whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WHATSAPP</a></div></div>;
}

export function LightboxGallery({ items }) {
  const [selected, setSelected] = useState(null);
  return <><div className="gallery-grid">{items.map((item,i) => <button className={`gallery-item gallery-${i%6}`} key={item.id} onClick={() => setSelected(item)} aria-label={`Open ${item.caption}`}><img src={item.image} alt={item.caption} loading="lazy"/><span>{item.caption}</span></button>)}</div>{selected && <div className="lightbox" onClick={() => setSelected(null)}><button className="lightbox-close" aria-label="Close"><X/></button><img src={selected.image} alt={selected.caption}/><p>{selected.caption}</p></div>}</>;
}

export function QuoteStrip() {
  const [index,setIndex] = useState(0);
  useEffect(() => { const t=setInterval(()=>setIndex(i=>(i+1)%siteConfig.quotes.length),5000); return ()=>clearInterval(t); }, []);
  return <section className="quote-strip"><span className="eyebrow">THE FIGHTER'S MINDSET</span><h2 key={index}>“{siteConfig.quotes[index]}”</h2><div className="quote-dots">{siteConfig.quotes.map((q,i)=><button key={i} className={i===index?"active":""} onClick={()=>setIndex(i)} aria-label={`Show quote ${i+1}`}/>)}</div></section>;
}