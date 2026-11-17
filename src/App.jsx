import { useEffect } from "react";
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Shield, Target, HeartPulse, Trophy, Users, Zap, Instagram, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig, getBranch } from "./config/siteConfig";
import { Header, Footer, JoinButton, SectionHeading, BranchCard, ProgramCard, Pricing, Timetable, ContactBranch, LightboxGallery, QuoteStrip } from "./components";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({behavior:"smooth"}), 100); else window.scrollTo(0,0); }, [pathname,hash]);
  return null;
}

function Home() {
  const c=siteConfig;
  return <>
    <section className="hero" id="home" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 55%,rgba(0,0,0,.25) 100%),linear-gradient(0deg,#050505 0%,transparent 24%),url("${c.brand.heroImage || "/images/hero/hero-training.jpg"}")`}}>
      <div className="hero-content"><span className="hero-kicker"><i/> MMA · BOXING · COMBAT SPORTS <i/></span><h1>{c.brand.heroHeadline.split(". ").map((part,i)=><span key={i}>{part}{i===0?".":""} </span>)}</h1><p>{c.brand.heroDescription}</p><div className="hero-actions"><JoinButton/><a className="outline-button" href="#training">EXPLORE OUR TRAINING <ArrowRight size={16}/></a></div><div className="hero-foot"><span>01 — TRAIN WITH PURPOSE</span><a href="#about">SCROLL TO DISCOVER <ArrowRight size={14}/></a></div></div>
      <div className="hero-stamp"><span>EST.</span><b>FIGHT</b><span>YOUR WAY</span></div>
    </section>

    <section className="ticker"><div>DISCIPLINE <b>✳</b> RESPECT <b>✳</b> RESILIENCE <b>✳</b> COURAGE <b>✳</b> DISCIPLINE <b>✳</b> RESPECT <b>✳</b> RESILIENCE <b>✳</b></div></section>

    <section className="section about-section" id="about"><div className="about-visual"><img src={c.about.image} alt="Combat sports training" loading="lazy"/><div className="visual-label">BUILT THROUGH<br/><b>THE WORK.</b></div></div><div className="about-copy"><SectionHeading eyebrow={c.about.eyebrow} title={c.about.title} text={c.about.description}/><div className="value-list">{c.about.points.map((p,i)=><span key={p}><b>0{i+1}</b>{p}</span>)}</div><a className="text-link" href="#branches">FIND YOUR BRANCH <ArrowRight size={16}/></a></div></section>

    <section className="section training-section" id="training"><div className="section-top"><SectionHeading eyebrow="FIND YOUR DISCIPLINE" title="TRAIN WITH INTENT." text="Explore the training categories. Program availability, coaches and timings vary by branch."/><span className="section-index">01 / TRAINING</span></div><div className="program-grid">{c.programs.map(p=><ProgramCard key={p.id} program={p}/>)}</div></section>

    <QuoteStrip/>

    <section className="section branches-section" id="branches"><SectionHeading eyebrow="TWO LOCATIONS. ONE FIGHTING SPIRIT." title="FIND YOUR FIGHT. CHOOSE YOUR BRANCH." text="Choose the location that works for you. Each branch has its own fees, schedule and program availability."/><div className="branch-grid">{Object.values(c.branches).map(b=><BranchCard key={b.id} branch={b}/>)}</div></section>

    <section className="section schedule-section" id="timetable"><div className="section-top"><SectionHeading eyebrow="PLAN YOUR TRAINING" title="THE WEEK. THE WORK." text="Choose a branch to view its independent timetable. Replace all placeholder timings with confirmed schedules."/></div><div className="schedule-tabs"><Link to="/branches/yelahanka">YELAHANKA SCHEDULE <ArrowUpRight size={15}/></Link><Link to="/branches/kogilu">KOGILU SCHEDULE <ArrowUpRight size={15}/></Link></div><div className="schedule-preview"><div><CalendarDays/><h3>YOUR NEXT ROUND STARTS HERE.</h3><p>View branch-specific class days, session timings, coaches and training levels.</p></div><Link className="text-link" to="/branches/yelahanka">VIEW TIMETABLES <ArrowRight size={16}/></Link></div></section>

    <section className="section achievement-section" id="achievements"><div className="section-top"><SectionHeading eyebrow="EVERY FIGHT HAS A STORY" title="OUR FIGHTERS. OUR PRIDE." text="Real people. Real work. Add approved student photographs and verified achievements here."/></div><div className="achievement-grid">{c.achievements.slice(0,2).map((a,i)=><article className="achievement-card" key={a.id}><img src={a.image} alt={a.title} loading="lazy"/><div><span>0{i+1} / ACHIEVEMENT</span><h3>{a.title}</h3><p>{a.person} · {a.event}</p><small>{a.date}</small></div></article>)}</div><LightboxGallery items={c.gallery}/></section>

    <section className="section coaches-section"><SectionHeading eyebrow="THE PEOPLE BEHIND THE PROGRESS" title="LEARN FROM THE CORNER." text="Coach profiles are placeholders until verified details and approved photographs are provided."/><div className="coach-grid">{c.coaches.map((coach,i)=><article className="coach-card" key={coach.id}><img src={coach.image} alt={coach.name} loading="lazy"/><div><span>0{i+1} / {coach.branch}</span><h3>{coach.name}</h3><b>{coach.role}</b><p>{coach.specialty} · {coach.experience}</p><small>{coach.bio}</small></div></article>)}</div></section>

    <section className="section events-section" id="events"><SectionHeading eyebrow="WHAT'S NEXT" title="THE NEXT CHALLENGE." text="Upcoming competitions, workshops and academy events. Publish only confirmed details."/><div className="events-grid">{c.events.map((e,i)=><article className="event-card" key={e.id}><img src={e.image} alt={e.title} loading="lazy"/><div><span className="eyebrow">0{i+1} / {e.status}</span><h3>{e.title}</h3><p>{e.description}</p><small><CalendarDays size={14}/> {e.date} · {e.time}</small><small><MapPin size={14}/> {e.location} · {e.branch}</small><a className="text-link" href={e.registrationUrl}>EVENT DETAILS <ArrowRight size={15}/></a></div></article>)}</div></section>

    <section className="why-section"><div><span className="eyebrow">WHY CITY FIGHT CLUB</span><h2>BUILT ON THE<br/><em>RIGHT VALUES.</em></h2></div><div className="why-grid">{c.whyChooseUs.map((x,i)=><div key={x}><CheckCircle2/><span>0{i+1}</span><b>{x}</b></div>)}</div></section>

    <section className="cta-band"><div><span className="eyebrow">YOUR FIRST STEP STARTS HERE</span><h2>READY TO PUT<br/>IN THE WORK?</h2></div><div><p>Choose your branch, ask your questions and take the first step towards training.</p><JoinButton/><a href="#contact" className="text-link">TALK TO THE TEAM <ArrowRight size={16}/></a></div></section>

    <section className="section contact-section" id="contact"><SectionHeading eyebrow="START A CONVERSATION" title="MAKE YOUR MOVE." text="Select your preferred branch and contact the academy directly. Update the contact placeholders before publishing."/><div className="contact-grid">{Object.values(c.branches).map(b=><ContactBranch key={b.id} branch={b}/>)}</div><div className="contact-bottom"><a href={c.brand.instagramUrl} target="_blank" rel="noreferrer"><Instagram/> FOLLOW CITY FIGHT CLUB</a><JoinButton>REGISTER YOUR INTEREST</JoinButton></div></section>

    <section className="locations-section"><div className="locations-heading"><span className="eyebrow">BENGALURU · TWO BRANCHES</span><h2>FIND YOUR<br/><em>CITY FIGHT CLUB.</em></h2></div><div className="location-list">{Object.values(c.branches).map(b=><div key={b.id}><span>{b.number}</span><div><h3>{b.shortName.toUpperCase()}</h3><p>{b.address}</p></div><a href={b.mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight/></a></div>)}</div></section>
  </>;
}

function BranchPage() {
  const { id }=useParams(); const b=getBranch(id); const c=siteConfig;
  const programs=c.programs.filter(p=>b.programs.includes(p.id));
  return <main className="branch-page">
    <section className="branch-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.4)),url("${b.image}")`}}><div><span className="eyebrow">CITY FIGHT CLUB / BRANCH {b.number}</span><h1>{b.shortName.toUpperCase()}<br/><em>YOUR FIGHT STARTS HERE.</em></h1><p>{b.address}</p><div className="hero-actions"><JoinButton/><a className="outline-button" href={b.mapsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight/></a></div></div></section>
    <section className="section branch-detail"><SectionHeading eyebrow={`BRANCH ${b.number} / CITY FIGHT CLUB`} title={`TRAIN AT ${b.shortName.toUpperCase()}.`} text="This branch has its own program availability, membership structure and weekly schedule. Confirm details directly with the academy."/><div className="branch-facts"><div><MapPin/><span>LOCATION</span><b>{b.address}</b></div><div><Phone/><span>CONTACT</span><b>{b.phone}</b></div><div><CalendarDays/><span>OPENING HOURS</span><b>{b.hours}</b></div></div></section>
    <section className="section branch-programs"><SectionHeading eyebrow="AVAILABLE AT THIS LOCATION" title="YOUR TRAINING OPTIONS."/><div className="program-grid">{programs.map(p=><ProgramCard key={p.id} program={p}/>)}</div></section>
    <section className="section branch-pricing"><SectionHeading eyebrow={`${b.shortName.toUpperCase()} / MEMBERSHIPS`} title="CHOOSE YOUR COMMITMENT." text="Pricing below applies only to this branch. Replace every placeholder with the confirmed fee before publishing."/><Pricing branch={b}/><p className="fee-note">Registration fee: <b>{b.registrationFee}</b> · {b.offers}</p></section>
    <section className="section branch-timetable"><SectionHeading eyebrow="WEEKLY SCHEDULE" title="KNOW YOUR ROUNDS." text={`Independent timetable for City Fight Club ${b.shortName}.`} /><Timetable branch={b}/></section>
    <section className="section branch-contact"><SectionHeading eyebrow="VISIT OR ENQUIRE" title="WE'LL SEE YOU IN THE GYM."/><ContactBranch branch={b}/><div className="map-placeholder"><MapPin/><h3>FIND US IN {b.shortName.toUpperCase()}</h3><p>Map location is configured through the branch Maps link.</p><a className="join-button" href={b.mapsUrl} target="_blank" rel="noreferrer">OPEN GOOGLE MAPS <ArrowUpRight/></a></div><Link className="text-link" to="/">← BACK TO CITY FIGHT CLUB</Link></section>
  </main>;
}

function NotFound(){return <main className="not-found"><span className="eyebrow">404 / WRONG CORNER</span><h1>THIS PAGE<br/>ISN'T IN THE RING.</h1><Link className="join-button" to="/">BACK TO HOME <ArrowRight/></Link></main>}

export default function App(){
  return <><ScrollToHash/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/branches/:id" element={<BranchPage/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>;
}