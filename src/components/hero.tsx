import { useState, useRef } from 'react';

const Hero = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const cardRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);

  const getPercent = (clientX: number): number => {
    if (!cardRef.current) return sliderPos;
    const rect = cardRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(0, Math.min(100, percent));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setSliderPos(getPercent(e.clientX));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setSliderPos(getPercent(e.touches[0].clientX));
  };

  const startDrag = () => { draggingRef.current = true; };
  const endDrag = () => { draggingRef.current = false; };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSliderPos(getPercent(e.clientX));
  };

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Lagos · Residential & Commercial</span>
          <h1 className="display">
            A cleaner space, a <span className="accent">greener</span> way of living.
          </h1>
          <p className="lead">
            Clean Green brings trained, vetted cleaning teams and eco-conscious products
            straight to your home or office — booked in minutes, done right every time.
          </p>
          <div className="hero-ctas">
            <a href="#quote" className="btn btn-primary">Get a Free Quote</a>
            <a href="tel:+2340000000000" className="btn btn-outline">Call Now</a>
          </div>
          <div className="trust-row">
            <span><span className="dot"></span> Vetted & trained staff</span>
            <span><span className="dot"></span> Eco-friendly products</span>
            <span><span className="dot"></span> Same-week booking</span>
          </div>
        </div>

        <div>
          <div
            className="reveal-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseUp={endDrag}
            onTouchEnd={endDrag}
            onMouseLeave={endDrag}
            onClick={handleClick}
          >
            <div className="reveal-layer before">
              <span className="reveal-tag">BEFORE</span>
              <div className="reveal-caption">The Monday mess</div>
              <div className="reveal-sub">Dust, clutter, a long week ahead</div>
            </div>

            <div
              className="reveal-layer after"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <span className="reveal-tag">AFTER CLEAN GREEN</span>
              <div className="reveal-caption">Spotless. Fresh. Done.</div>
              <div className="reveal-sub">In one visit, by one trusted team</div>
            </div>

            <div
              className="slider-handle"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            ></div>
          </div>
          <p className="reveal-hint">Drag the handle to see the difference →</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;