import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Instagram, MessageSquare, MapPin, Clock, ArrowRight, X, Play, BadgeCheck, ShoppingBag } from 'lucide-react';

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

const App = () => {
  const [shutterOpen, setShutterOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeInteraction, setActiveInteraction] = useState({ state: 'none', category: null });

  useEffect(() => {
    const timer = setTimeout(() => setShutterOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeInteraction.state === 'selection') {
      const resetTimer = setTimeout(() => setActiveInteraction({ state: 'none', category: null }), 20000);
      return () => clearTimeout(resetTimer);
    }
  }, [activeInteraction.state]);

  const handleCatalogueClick = (cat) => {
    setActiveInteraction({ state: 'spinner', category: cat });
    setTimeout(() => setActiveInteraction({ state: 'selection', category: cat }), 1800);
  };

  const handleRedirect = (platform) => {
    const { category } = activeInteraction;
    const url = platform === 'whatsapp' 
      ? `https://wa.me/919669977999?text=Hello Saamrajya, interested in ${category.title}.` 
      : `https://www.instagram.com/fashion_mark_8/`;
    window.open(url, '_blank');
    setActiveInteraction({ state: 'none', category: null });
  };

  return (
    <div style={{ backgroundColor: '#080808', color: '#FCF9F5', minHeight: '100vh' }}>
      
      {/* 1. ELITE ROYAL SPINNER & MODAL */}
      <AnimatePresence>
        {activeInteraction.state === 'spinner' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.overlay}>
             <div style={styles.eliteSpinnerWrap}>
               {/* Advanced Double Ring Pulse */}
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} style={styles.outerRing} />
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }} style={styles.innerRing} />
               <motion.img 
                  src="/logo_main.png" 
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }} 
                  style={styles.logoPulse} 
               />
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={styles.spinnerLabel}>
                  PREPARING THE KINGDOM COLLECTION...
               </motion.div>
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
                   <button onClick={() => handleRedirect('instagram')} className="btn-royal" style={styles.redirectBtn}>
                      <Instagram size={28} />
                      <span style={{ fontSize: '0.8rem', marginTop: '10px' }}>INSTAGRAM</span>
                      <div style={styles.redirectSub}>Visual Lookbook</div>
                   </button>
                   <button onClick={() => handleRedirect('whatsapp')} className="btn-royal" style={styles.redirectBtn}>
                      <MessageSquare size={28} />
                      <span style={{ fontSize: '0.8rem', marginTop: '10px' }}>WHATSAPP</span>
                      <div style={styles.redirectSub}>Instant Query</div>
                   </button>
                </div>
                {/* 20s Progress Bar */}
                <motion.div initial={{ width: '100%' }} animate={{ width: '0%' }} transition={{ duration: 20, ease: 'linear' }} style={styles.timerLine} />
                <button onClick={() => setActiveInteraction({ state: 'none', category: null })} style={styles.closeModal}>
                   CLOSE <X size={10} style={{ marginLeft: '5px' }} />
                </button>
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
            <a href="tel:+919669977999" className="btn-royal" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}>
               <Phone size={14} style={{ marginRight: '8px' }} /> 096699 77999
            </a>
         </div>
      </header>

      <section style={styles.hero}>
         <div style={styles.heroBg}><img src="/exterior.png" style={styles.fullImg} /></div>
         <div style={styles.heroOverlay} />
         <div className="container" style={styles.heroContent}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={shutterOpen ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.2 }}>
               <div style={styles.heroTag}>ROYAL ATTIRE FOR INDORE // SERIES 2026</div>
               <h2 style={styles.heroTitle}>ESTABLISHING THE<br/><span style={{ color: '#D4AF37' }}>NEW STANDARD.</span></h2>
            </motion.div>
         </div>
      </section>

      {/* INTERACTIVE CATALOGUE */}
      <section style={{ background: '#050505', padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>THE <span style={{ color: '#D4AF37' }}>KINGDOM</span> CATALOGUE</h2>
            <p style={{ textAlign: 'center', color: '#333', marginBottom: '6rem', fontSize: '0.85rem' }}>Indore's Elite Fashion Hub // Fixed Rate</p>
            <div style={styles.catGrid}>
               {collections.map((c, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} style={styles.catCard} className="media-frame" onClick={() => handleCatalogueClick(c)}>
                     <div style={styles.catImgWrap}>
                        <img src={c.img} style={styles.fullImg} alt={c.title} crossOrigin="anonymous" />
                        <div style={styles.catWatermark}>
                           <img src="/logo_main.png" style={{ height: '35px', opacity: 0.5 }} />
                           <span style={{ fontSize: '0.65rem', color: '#fff', opacity: 0.3, letterSpacing: '2px', fontWeight: 900 }}>SAAMRAJYA</span>
                        </div>
                     </div>
                     <div style={{ padding: '1.8rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem' }}>{c.title}</h4>
                        <p style={{ color: '#555', fontSize: '0.85rem', marginTop: '0.5rem' }}>{c.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* BRAND PREMIERE (TRIPLE MIRROR LIVE VIEW) */}
      <section style={{ background: '#080808', textAlign: 'center', padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '6rem' }}>BRAND <span style={{ color: '#D4AF37' }}>PREMIERE</span></h2>
            <div style={styles.videoReelFlow}>
               <motion.div initial={{ opacity: 0 }} animate={videoOpen ? { opacity: 0.05, scale: 1.1 } : { opacity: 0 }} style={styles.mirrorLeft}>
                  {videoOpen && <iframe src="https://www.instagram.com/reel/DUzspxRjEIW/embed" style={styles.fullImg} frameBorder="0" scrolling="no" />}
               </motion.div>
               <motion.div initial={{ opacity: 0 }} animate={videoOpen ? { opacity: 0.05, scale: 1.1 } : { opacity: 0 }} style={styles.mirrorRight}>
                  {videoOpen && <iframe src="https://www.instagram.com/reel/DUzspxRjEIW/embed" style={styles.fullImg} frameBorder="0" scrolling="no" />}
               </motion.div>
               <div className="media-frame luxury-glow" style={styles.videoReelCore}>
                  <div style={styles.videoDoors}>
                     <motion.div animate={videoOpen ? { x: '-101%' } : {}} transition={{ duration: 1.5 }} style={styles.doorLeft}><img src="/logo_main.png" style={{ width: '60px', marginRight: '-30px' }} /></motion.div>
                     <motion.div animate={videoOpen ? { x: '101%' } : {}} transition={{ duration: 1.5 }} style={styles.doorRight}><img src="/logo_main.png" style={{ width: '60px', marginLeft: '-30px' }} /></motion.div>
                     {videoOpen && <iframe src="https://www.instagram.com/reel/DUzspxRjEIW/embed" style={styles.mainReel} frameBorder="0" scrolling="no" allowFullScreen />}
                     {!videoOpen && <div style={styles.playOverlay}><button onClick={() => setVideoOpen(true)} className="btn-royal" style={{ padding: '1.4rem 4rem' }}>WATCH PREMIERE <Play size={16} style={{ marginLeft: '12px' }} /></button></div>}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer style={styles.footerRefined}>
         <span>© 2026 SAAMRAJYA THE FASHION KINGDOM // EXCELLENCE IN INDORE.</span>
      </footer>

    </div>
  );
};

const styles = {
  // ELITE SPINNER & MODAL
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.98)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)' },
  eliteSpinnerWrap: { position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  outerRing: { position: 'absolute', width: '180px', height: '180px', border: '2px solid rgba(212, 175, 55, 0.1)', borderTop: '2px solid #D4AF37', borderRadius: '50%' },
  innerRing: { position: 'absolute', width: '140px', height: '140px', border: '1px solid rgba(212, 175, 55, 0.05)', borderBottom: '1px solid #D4AF37', borderRadius: '50%' },
  logoPulse: { width: '70px', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
  spinnerLabel: { position: 'absolute', bottom: '-80px', color: '#D4AF37', letterSpacing: '4px', fontSize: '0.65rem', width: '300px', textAlign: 'center', opacity: 0.6 },

  selectionModal: { width: '90%', maxWidth: '500px', background: '#0D0D0D', border: '1px solid #D4AF37', borderRadius: '20px', padding: '4rem 2rem', position: 'relative', overflow: 'hidden', boxShadow: '0 0 80px rgba(212, 175, 55, 0.25)' },
  modalTag: { fontSize: '0.65rem', color: '#D4AF37', letterSpacing: '5px', marginBottom: '1.2rem' },
  redirectGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' },
  redirectBtn: { height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' },
  redirectSub: { fontSize: '0.6rem', opacity: 0.4, letterSpacing: '1.5px', marginTop: '5px' },
  timerLine: { position: 'absolute', bottom: 0, left: 0, height: '4px', background: '#D4AF37' },
  closeModal: { background: 'none', border: 'none', color: '#333', fontSize: '0.65rem', position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', display: 'flex', alignItems: 'center' },

  header: { position: 'fixed', top: 0, width: '100%', zIndex: 9000, background: 'rgba(5,5,5,0.98)', borderBottom: '1px solid #111' },
  hero: { height: '90vh', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 },
  fullImg: { width: '100%', height: '100%', objectFit: 'cover', border: 'none' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.3), #080808)' },
  heroContent: { height: '100%', display: 'flex', alignItems: 'center' },
  heroTag: { color: '#D4AF37', letterSpacing: '4px', fontSize: '0.65rem', fontWeight: 900, marginBottom: '2.5rem' },
  heroTitle: { fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 0.9 },

  // CATALOGUE GRID
  catGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' },
  catCard: { background: '#0a0a0a', cursor: 'pointer', border: '1px solid #111' },
  catImgWrap: { height: '450px', position: 'relative', background: '#000', overflow: 'hidden' },
  catWatermark: { position: 'absolute', bottom: '1.5rem', right: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' },

  // TRIPLE MIRROR REEL
  videoReelFlow: { position: 'relative', width: '100%', height: '750px', display: 'flex', justifyContent: 'center', overflow: 'hidden' },
  mirrorLeft: { position: 'absolute', left: '-5%', width: '35%', height: '100%', filter: 'blur(10px)', zIndex: 1 },
  mirrorRight: { position: 'absolute', right: '-5%', width: '35%', height: '100%', filter: 'blur(10px)', zIndex: 1 },
  videoReelCore: { width: '100%', maxWidth: '420px', height: '100%', background: '#000', zIndex: 10, borderRadius: '20px' },
  videoDoors: { position: 'relative', width: '100%', height: '100%', overflow: 'hidden' },
  doorLeft: { position: 'absolute', left: 0, top: 0, width: '51%', height: '100%', background: '#0a0a0a', borderRight: '1px solid #D4AF37', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' },
  doorRight: { position: 'absolute', right: 0, top: 0, width: '51%', height: '100%', background: '#0a0a0a', borderLeft: '1px solid #D4AF37', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' },
  mainReel: { width: '100%', height: '100%', border: 'none' },
  playOverlay: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 120 },

  footerRefined: { padding: '8rem 0', textAlign: 'center', borderTop: '1px solid #111', fontSize: '0.7rem', color: '#1a1a1a', letterSpacing: '1px' }
};

export default App;
