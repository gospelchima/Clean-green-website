import { useEffect, useRef, useState } from 'react';

import hero1 from '../assets/photo-04-1.jpg';
import hero2 from '../assets/photo-10a-1.jpg';
import hero3 from '../assets/gabarit-photo-2.jpg';


const slides = [
  { id: 1, img: hero1, label: 'Home Cleaning' },
  { id: 2, img: hero2, label: 'Office Cleaning' },
  { id: 3, img: hero3, label: 'Deep Cleaning' },
];

const SLIDE_INTERVAL = 4000;
const DESKTOP_REVEAL_SCROLL_DISTANCE = 600; // px of scroll before SVG fully exits
const MOBILE_REVEAL_SCROLL_DISTANCE = 340;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [svgOffset, setSvgOffset] = useState(0); // 0 = fully visible, 100 = fully off screen
  const heroRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  // ─── Carousel auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // ─── Scroll-driven SVG reveal
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const revealDistance =
          window.matchMedia('(max-width: 768px)').matches
            ? MOBILE_REVEAL_SCROLL_DISTANCE
            : DESKTOP_REVEAL_SCROLL_DISTANCE;
        const progress = Math.min(scrollY / revealDistance, 1);
        setSvgOffset(progress * 110); // 110 so it fully exits
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        /* ── Carousel ── */
        .hero-carousel {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-slide.active {
          opacity: 1;
        }

        /* ── SVG shape layer ── */
        .hero-shape {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          will-change: transform;
          transition: transform 0.05s linear;
        }
        .hero-shape svg {
          width: 100%;
          height: 100%;
        }

        /* ── Blend-mode heading ── */
        .hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 clamp(24px, 5vw, 80px) clamp(40px, 8vh, 100px);
          pointer-events: none;
          mix-blend-mode: difference;
          color: #C8CD95;
        }
        .hero-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.7rem, 1.2vw, 0.85rem);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.9;
        }
        .hero-heading {
          font-family: 'Fraunces', serif;
          font-weight: 900;
          font-optical-sizing: auto;
          font-size: clamp(3rem, 8vw, 7.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 0;
          max-width: 14ch;
        }
        .hero-heading .break {
          display: block;
        }
        .hero-heading .accent-word {
          font-style: italic;
          font-weight: 300;
        }

        /* ── Slide counter ── */
        .hero-counter {
          position: absolute;
          bottom: clamp(40px, 8vh, 100px);
          right: clamp(24px, 5vw, 80px);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          mix-blend-mode: difference;
          color: #C8CD95;
        }
        .hero-counter-track {
          width: 1px;
          height: 80px;
          background: rgba(200, 205, 149, 0.3);
          position: relative;
          overflow: hidden;
        }
        .hero-counter-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          background: #C8CD95;
          transition: height 0.4s ease;
        }
        .hero-counter-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          opacity: 0.8;
          color: #C8CD95;
        }

        /* ── Scroll hint ── */
        .hero-scroll-hint {
          position: absolute;
          bottom: clamp(40px, 8vh, 100px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          mix-blend-mode: difference;
          color: #C8CD95;
          opacity: 0.7;
          animation: hintBounce 2s ease-in-out infinite;
        }
        .hero-scroll-hint span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-scroll-arrow {
          width: 1px;
          height: 40px;
          background: #C8CD95;
          transform-origin: top;
        }
        @keyframes hintBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Sticky scroll spacer ── */
        .hero-spacer {
          height: 600px;
        }

        /* ── Sticky wrapper ── */
        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-slide { transition: none; }
          .hero-shape { transition: none; }
          .hero-scroll-hint { animation: none; }
        }

        @media (max-width: 768px) {
  .hero-root,
  .hero-sticky {
    height: 100svh;
    min-height: 620px;
  }
  .hero-shape svg {
    display: none;
  }
  .hero-shape::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--cream, #F7F4EC);
    -webkit-mask-image: radial-gradient(
      circle 220px at 100% 50%,
      transparent 100%,
      black 100%
    );
    mask-image: radial-gradient(
      circle 220px at 100% 50%,
      transparent 100%,
      black 100%
    );
  }
  .hero-content {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 88px 24px 72px;
    mix-blend-mode: normal;
    color: var(--green-deep, #37326A);
  }
  .hero-eyebrow {
    font-size: 0.82rem;
    line-height: 1.35;
    max-width: 24ch;
    margin-bottom: 18px;
  }
  .hero-heading {
    font-size: clamp(3.35rem, 16vw, 5rem);
    line-height: 0.9;
    max-width: 9ch;
  }
  .hero-counter {
    display: none;
  }
  .hero-scroll-hint {
    display: none;
  }
  .hero-spacer {
    height: ${MOBILE_REVEAL_SCROLL_DISTANCE}px;
  }
}
      `}</style>

      {/* Sticky scroll wrapper — spacer creates scroll room for the reveal */}
      <div ref={heroRef} style={{ position: 'relative' }}>
        <div className="hero-sticky">
          <div className="hero-root">

            {/* ── Layer 1: Image carousel ── */}
            <div className="hero-carousel">
  {slides.map((slide, i) => (
    <div
      key={slide.id}
      className={`hero-slide${i === activeSlide ? ' active' : ''}`}
      style={{
        backgroundImage: `url(${slide.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ))}
</div>

            {/* ── Layer 2: SVG shape with hole (slides up on scroll) ── */}
             <div
              className="hero-shape"
              style={{ transform: `translateY(-${svgOffset}%)` }}
            >
              {/* Your hole SVG — circle punched out of full rectangle via compound path */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <g clipPath="url(#clip0_662_4755)">
                  <mask
                    id="mask0_662_4755"
                    style={{ maskType: 'alpha' } as React.CSSProperties}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1440"
                    height="900"
                  >
                    <path d="M1440 0H0V900H1440V0Z" fill="var(--cream, #FFF)" />
                  </mask>
                  <g mask="url(#mask0_662_4755)">
                    {/*
                      Compound path: full rectangle MINUS circle = hole effect.
                      The circle at center 970,324 radius ~203px is the transparent window.
                      Fill matches --cream so it blends with your page background.
                    */}
                    <path
  d="M1440 900H0V0H1440V900ZM1030 247C917.886 247 827 337.886 827 450C827 562.114 917.886 653 1030 653C1142.11 653 1233 562.114 1233 450C1233 337.886 1142.11 247 1030 247Z"
  fill="var(--cream, #FFF)"
/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_662_4755">
                    <rect width="1440" height="900" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
 
            {/* ── Layer 3: Blend-mode heading ── */}
            <div className="hero-content">
              <p className="hero-eyebrow">Professional Cleaning Service in Lagos</p>
              <h1 className="hero-heading">
                <span className="break">A Clean Space,</span>
                <span className="break accent-word">A Better Life.</span>
                
                
              </h1>
            </div>

            {/* ── Slide counter ── */}
            <div className="hero-counter">
              <span className="hero-counter-label">
                {slides[activeSlide].label}
              </span>
              <div className="hero-counter-track">
                <div
                  className="hero-counter-fill"
                  style={{ height: `${((activeSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                mixBlendMode: 'difference',
                color: 'white'
              }}>
                {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* ── Scroll hint ── */}
            <div className="hero-scroll-hint">
              <span>Scroll</span>
              <div className="hero-scroll-arrow" />
            </div>

          </div>
        </div>

        {/* Spacer creates scroll distance for the SVG reveal */}
        <div className="hero-spacer" />
      </div>
    </>
  );
};

export default Hero;
