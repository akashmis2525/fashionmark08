import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Instagram, MessageSquare, MapPin, Clock, ArrowRight, X, Play, BadgeCheck, ShoppingBag, ShieldCheck, ExternalLink, Share2, Navigation, Users2 } from 'lucide-react';

const collections = [
  { id: '01', title: "ELITE MEN'S WEAR", desc: "Premium Denim & Jacket", img: "/cat_1.png" },
  { id: '02', title: "VIBRANT SAREES", desc: "Ethnic Grace & Colors", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1974&auto=format&fit=crop" },
  { id: '03', title: "FORMAL SERIES", desc: "Tailored for the City", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1780&auto=format&fit=crop" },
  { id: '04', title: "LADIES WESTERNS", desc: "Contemporary Chic", img: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: '05', title: "ETHNIC MEN'S", desc: "Indore's Cultural Wear", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1780&auto=format&fit=crop" },
  { id: '06', title: "LUXURY KURTAS", desc: "Signature Fabric Selection", img: "/cat_6.png" },
  { id: '07', title: "KIDS' FASHION", desc: "Modern Playful Essentials", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1972&auto=format&fit=crop" },
  { id: '08', title: "DESIGNER SUITS", desc: "Majestic Pattern Mastery", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1770&auto=format&fit=crop" }
];

const reviews = [
  { name: "Shashank Dubey", text: "Nice clothes stock, staff behaviour is very good, service is also good.", rating: 5, date: "Google Review" },
  { name: "Arvind", text: "Fashion Mark-8 offers the perfect blend of price and quality.", rating: 5, date: "Google Review" },
  { name: "Punit Gupta", text: "Excellent variety of collection with Good quality material.", rating: 5, date: "Google Review" }
];

const App = () => {
  const [shutterOpen, setShutterOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeInteraction, setActiveInteraction] = useState({ state: 'none', category: null });

  useEffect(() => {
    const timer = setTimeout(() => setShutterOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCatalogueClick = (cat) => {
    setActiveInteraction({ state: 'spinner', category: cat });
    setTimeout(() => setActiveInteraction({ state: 'selection', category: cat }), 1800);
  };

  const gMapUrl = "https://www.google.com/maps/place/Fashion+Mark-8+Samraajya/@22.7533,75.8361,17z/";

  return (
    <div style={{ backgroundColor: '#080808', color: '#FCF9F5', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
      
      {/* 1. ROYAL REDIRECT INTERFACE */}
      <AnimatePresence>
        {activeInteraction.state === 'spinner' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.overlay}>
             <div style={styles.eliteSpinnerWrap}>
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} style={styles.outerRing} />
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }} style={styles.innerRing} />
               <motion.img src="/logo_main.png" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={styles.logoPulse} />
               <div style={styles.spinnerLabel}>PREPARING THE KINGDOM COLLECTION...</div>
             </div>
          </motion.div>
        )}
        {activeInteraction.state === 'selection' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.overlay}>
             <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} style={styles.selectionModal}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                   <div style={styles.modalTag}>SAAMRAJYA // INDORE</div>
                   <h2 style={{ fontSize: '1.8rem', color: '#D4AF37' }}>EXPLORE {activeInteraction.category.title}</h2>
                   <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.5rem' }}>Direct Redirect To Our Full Digital Catalogue</p>
                </div>
                <div style={styles.redirectGrid}>
                   <button onClick={() => window.open('https://www.instagram.com/fashion_mark_8/', '_blank')} className="btn-royal" style={styles.redirectBtn}>
                      <Instagram size={28} />
                      <span style={{ fontSize: '0.8rem', marginTop: '10px' }}>INSTAGRAM</span>
                   </button>
                   <button onClick={() => window.open(`https://wa.me/919669977999?text=Interested in ${activeInteraction.category.title}`, '_blank')} className="btn-royal" style={styles.redirectBtn}>
                      <MessageSquare size={28} />
                      <span style={{ fontSize: '0.8rem', marginTop: '10px' }}>WHATSAPP</span>
                   </button>
                </div>
                <button onClick={() => setActiveInteraction({ state: 'none', category: null })} style={styles.closeModal}>CLOSE <X size={10} style={{ marginLeft: '5px' }} /></button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`shutter-wrap ${shutterOpen ? 'open' : ''}`}>
         <motion.div animate={{ opacity: shutterOpen ? 0 : 1 }} style={{ textAlign: 'center' }}>
            <img src="/logo_main.png" style={{ width: '150px' }} />
            <h2 style={{ fontSize: '1.2rem', letterSpacing: '8px', color: '#D4AF37', marginTop: '2rem' }}>SAAMRAJYA</h2>
         </motion.div>
      </div>

      <header style={styles.header}>
         <div className="container flex-grid" style={{ height: '75px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <img src="/logo_main.png" style={{ height: '35px', marginRight: '15px' }} />
               <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#D4AF37', letterSpacing: '3px' }}>SAAMRAJYA</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div className="google-badge" style={styles.gBadge}>
                  <div style={{ display: 'flex', color: '#fcc419', gap: '2px' }}><Star size={10} fill="#fcc419" /><Star size={10} fill="#fcc419" /><Star size={10} fill="#fcc419" /><Star size={10} fill="#fcc419" /><Star size={10} fill="#fcc419" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900 }}>4.6 (43 REVIEWS)</span>
               </div>
               <a href="tel:09669977999" className="btn-royal" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}>
                  <Phone size={14} style={{ marginRight: '8px' }} /> 096699 77999
               </a>
            </div>
         </div>
      </header>

      <section style={styles.hero}>
         <div style={styles.heroBg}><img src="/exterior.png" style={styles.fullImg} /></div>
         <div style={styles.heroOverlay} />
         <div className="container" style={styles.heroContent}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={shutterOpen ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.2 }}>
               <div style={styles.heroTag}><BadgeCheck size={12} color="#D4AF37" style={{ marginRight: '8px' }}/> INDORE'S NO.1 CLOTHING KINGDOM</div>
               <h2 style={styles.heroTitle}>THE BEST MEN'S &<br/>LADIES <span style={{ color: '#D4AF37' }}>ELITE WEAR.</span></h2>
            </motion.div>
         </div>
      </section>

      {/* MAYOR'S VISIT: MAJESTIC FEATURE */}
      <section style={{ background: '#0D0D0D', padding: '10rem 0' }}>
         <div className="container">
            <div className="flex-grid" style={{ alignItems: 'center', gap: '5rem' }}>
               <div className="col-half">
                  <div style={styles.gTrustLine}><Users2 size={14} /> EXCLUSIVE ROYAL GUEST VISIT</div>
                  <h2 style={{ fontSize: '3.5rem', lineHeight: 1, marginTop: '2rem' }}>A ROYAL<br/><span style={{ color: '#D4AF37' }}>BENEDICTION.</span></h2>
                  <p style={{ color: '#888', marginTop: '2.5rem', fontSize: '1.2rem', lineHeight: 1.6 }}>
                     We were deeply honored by the visit of the **Mayor of Indore Municipal Corporation** at Saamrajya's grand opening. 
                     The Mayor, along with his family, visited our fashion showroom, experienced the curated collections, and extended his prestigious best wishes. 
                  </p>
                  <p style={{ color: '#666', marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                     "The attention to quality and the royal shopping experience is exactly what Indore's fashion elite deserves."
                  </p>
               </div>
               <div className="col-half media-frame" style={{ height: '700px' }}>
                  <img src="/team.jpg" style={styles.fullImg} alt="Mayor Visit" />
                  <div style={styles.imageOverlayText}>
                     GRAND OPENING // INDORE MAYOR VISIT
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* GOOGLE INTEGRATION SECTION (FIXED MAP) */}
      <section style={{ background: '#050505', padding: '8rem 0', borderBottom: '1px solid #111' }}>
         <div className="container flex-grid" style={{ gap: '4rem' }}>
            <div className="col-half media-frame" style={{ height: '550px', background: '#000' }}>
               {/* Fixed Stable Google Map Embed */}
               <iframe 
                  title="Fashion Mark-8 Indore Location"
                  src="https://maps.google.com/maps?q=Fashion%20Mark-8%20Samraajya%20Indore&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} allowFullScreen loading="lazy" 
               />
            </div>
            <div className="col-half">
               <div style={styles.gTrustLine}><ShieldCheck size={14} /> VERIFIED GOOGLE BUSINESS PROFILE</div>
               <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginTop: '1.5rem' }}>VISIT OUR <br/><span style={{ color: '#D4AF37' }}>INDORE KINGDOM.</span></h2>
               <div style={{ marginTop: '3rem' }}>
                  <div style={styles.locItem}><MapPin size={20} color="#D4AF37" /> <span>Power House, 65 b scheme no. 51 (commercial area), behind Sangam Nagar, Indore, 452006</span></div>
                  <div style={styles.locItem}><Clock size={20} color="#D4AF37" /> <span>Kingdom Hours: 11:00 AM — 9:00 PM</span></div>
               </div>
               <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                  <button onClick={() => window.open(gMapUrl, '_blank')} className="btn-royal" style={{ padding: '1.2rem 2.5rem' }}>GET DIRECTIONS <Navigation size={16} style={{ marginLeft: '12px' }} /></button>
                  <button onClick={() => window.open('tel:09669977999')} className="btn-royal-outline" style={{ padding: '1.2rem 2.5rem', border: '1px solid #D4AF37', color: '#D4AF37' }}>CALL NOW</button>
               </div>
            </div>
         </div>
      </section>

      {/* ROYAL TESTIMONY (REVIEWS) */}
      <section style={{ background: '#080808', padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem' }}>THE <span style={{ color: '#D4AF37' }}>ROYAL</span> TESTIMONY</h2>
            <div style={styles.reviewGrid}>
               {reviews.map((r, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} style={styles.reviewCard}>
                     <div style={{ display: 'flex', color: '#fcc419', marginBottom: '1.5rem' }}>{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} fill="#fcc419" />)}</div>
                     <p style={styles.reviewText}>"{r.text}"</p>
                     <div style={{ marginTop: '2.5rem', borderTop: '1px solid #111', paddingTop: '1.5rem' }}>
                        <h4 style={{ fontSize: '1rem', color: '#D4AF37' }}>{r.name.toUpperCase()}</h4>
                        <span style={{ fontSize: '0.65rem', opacity: 0.3, letterSpacing: '2px' }}>{r.date.toUpperCase()}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CATALOGUE */}
      <section style={{ background: '#050505', padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '6rem' }}>THE <span style={{ color: '#D4AF37' }}>KINGDOM</span> CATALOGUE</h2>
            <div style={styles.catGrid}>
               {collections.map((c, i) => (
                  <motion.div key={i} onClick={() => handleCatalogueClick(c)} style={styles.catCard} className="media-frame">
                     <div style={styles.catImgWrap}>
                        <img src={c.img} style={styles.fullImg} alt={c.title} />
                        <div style={styles.catWatermark}>
                           <img src="/logo_main.png" style={{ height: '35px', opacity: 0.4 }} />
                        </div>
                     </div>
                     <div style={{ padding: '1.8rem' }}>
                        <h4 style={{ color: '#D4AF37' }}>{c.title}</h4>
                        <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '0.5rem' }}>{c.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* BRAND PREMIERE */}
      <section style={{ background: '#080808', textAlign: 'center', padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '2.4rem', marginBottom: '6rem' }}>STORE <span style={{ color: '#D4AF37' }}>PREMIERE</span></h2>
            <div style={styles.videoReelFlow}>
               <div className="media-frame luxury-glow" style={styles.videoReelCore}>
                  <div style={styles.videoDoors}>
                     <motion.div animate={videoOpen ? { x: '-101%' } : {}} transition={{ duration: 1.5 }} style={styles.doorLeft}><img src="/logo_main.png" style={{ width: '60px', marginRight: '-30px' }} /></motion.div>
                     <motion.div animate={videoOpen ? { x: '101%' } : {}} transition={{ duration: 1.5 }} style={styles.doorRight}><img src="/logo_main.png" style={{ width: '60px', marginLeft: '-30px' }} /></motion.div>
                     {videoOpen && <iframe src="https://www.instagram.com/reel/DUzspxRjEIW/embed" style={styles.mainReel} frameBorder="0" scrolling="no" />}
                     {!videoOpen && <div style={styles.playOverlay}><button onClick={() => setVideoOpen(true)} className="btn-royal" style={{ padding: '1.4rem 4rem' }}>WATCH SHOWROOM <Play size={16} fill="white" style={{ marginLeft: '12px' }} /></button></div>}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer style={styles.footerRefined}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'left' }}>
            <div>
               <img src="/logo_main.png" style={{ height: '60px', filter: 'brightness(1.5)' }} />
               <p style={{ marginTop: '2rem', color: '#444', fontSize: '0.85rem' }}>Samraajya Clothing Shop: The elite fashion kingdom of Indore. Defining high-fidelity male and female retail standards.</p>
            </div>
            <div>
               <h4 style={{ color: '#D4AF37', marginBottom: '1.5rem' }}>LOCATION</h4>
               <p style={{ color: '#444', fontSize: '0.8rem', lineHeight: 1.6 }}>Power House, 65 b scheme no. 51,<br/> detrás de Sangam Nagar, Indore, 452006</p>
               <br/>
               <a href={gMapUrl} target="_blank" style={{ color: '#D4AF37', fontSize: '0.75rem', textDecoration: 'underline' }}>GOOGLE MAP DIRECTIONS</a>
            </div>
            <div>
               <h4 style={{ color: '#D4AF37', marginBottom: '1.5rem' }}>KINGDOM HOURS</h4>
               <p style={{ color: '#444', fontSize: '0.8rem' }}>Monday — Sunday: 11:00 AM — 9:00 PM</p>
               <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '10px' }}>Inquiry: 096699 77999</p>
            </div>
         </div>
         <div style={{ marginTop: '8rem', opacity: 0.1, fontSize: '0.65rem' }}>© 2026 SAAMRAJYA THE FASHION KINGDOM // EXCELLENCE IN INDORE.</div>
      </footer>

    </div>
  );
};

const styles = {
  // GOOGLE BADGE
  gBadge: { padding: '0.4rem 1.2rem', background: '#111', borderRadius: '50px', border: '1px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' },
  gTrustLine: { fontSize: '0.65rem', color: '#D4AF37', letterSpacing: '4px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900 },
  locItem: { display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem', fontSize: '0.95rem', color: '#888', lineHeight: 1.5 },
  imageOverlayText: { position: 'absolute', bottom: '2rem', left: '2rem', background: 'rgba(212, 175, 55, 0.9)', color: '#000', padding: '0.8rem 2rem', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '2px' },

  reviewGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' },
  reviewCard: { background: '#0A0A0A', padding: '3.5rem 2.5rem', border: '1px solid #111', borderRadius: '15px' },
  reviewText: { fontSize: '1.1rem', fontStyle: 'italic', color: '#BBB', lineHeight: 1.6 },

  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.98)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(30px)' },
  eliteSpinnerWrap: { position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  outerRing: { position: 'absolute', width: '180px', height: '180px', border: '2px solid rgba(212, 175, 55, 0.1)', borderTop: '2px solid #D4AF37', borderRadius: '50%' },
  innerRing: { position: 'absolute', width: '140px', height: '140px', border: '1px solid rgba(212, 175, 55, 0.05)', borderBottom: '1px solid #D4AF37', borderRadius: '50%' },
  logoPulse: { width: '70px' },
  spinnerLabel: { position: 'absolute', bottom: '-80px', color: '#D4AF37', letterSpacing: '4px', fontSize: '0.65rem', width: '300px', textAlign: 'center', opacity: 0.6 },

  selectionModal: { width: '90%', maxWidth: '500px', background: '#0D0D0D', border: '1px solid #D4AF37', borderRadius: '20px', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' },
  modalTag: { fontSize: '0.65rem', color: '#D4AF37', letterSpacing: '5px', marginBottom: '1.2rem' },
  redirectGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  redirectBtn: { height: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' },
  closeModal: { background: 'none', border: 'none', color: '#333', fontSize: '0.65rem', marginTop: '2.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' },

  header: { position: 'fixed', top: 0, width: '100%', zIndex: 9000, background: 'rgba(5,5,5,0.98)', borderBottom: '1px solid #111' },
  hero: { height: '80vh', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 },
  fullImg: { width: '100%', height: '100%', objectFit: 'cover', border: 'none' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5), #080808)' },
  heroContent: { height: '100%', display: 'flex', alignItems: 'center' },
  heroTag: { color: '#D4AF37', letterSpacing: '4px', fontSize: '0.75rem', fontWeight: 900, marginBottom: '2.5rem', display: 'flex', alignItems: 'center' },
  heroTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 0.85, fontWeight: 900 },

  catGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  catCard: { background: '#0a0a0a', cursor: 'pointer' },
  catImgWrap: { height: '480px', position: 'relative', overflow: 'hidden' },
  catWatermark: { position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none' },

  videoReelFlow: { position: 'relative', width: '100%', height: '750px', display: 'flex', justifyContent: 'center', overflow: 'hidden' },
  videoReelCore: { width: '100%', maxWidth: '420px', height: '100%', background: '#000', zIndex: 10, borderRadius: '20px' },
  videoDoors: { position: 'relative', width: '100%', height: '100%', overflow: 'hidden' },
  doorLeft: { position: 'absolute', left: 0, top: 0, width: '51%', height: '100%', background: '#0a0a0a', borderRight: '1px solid #D4AF37', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' },
  doorRight: { position: 'absolute', right: 0, top: 0, width: '51%', height: '100%', background: '#0a0a0a', borderLeft: '1px solid #D4AF37', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' },
  mainReel: { width: '100%', height: '100%', border: 'none' },
  playOverlay: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 120 },

  footerRefined: { padding: '10rem 0 5rem', borderTop: '1px solid #111', background: '#050505', textAlign: 'center' }
};

export default App;
