interface Testimonial {
  quote: string;
  initial: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '"The team was punctual, thorough, and my apartment smelled fresh for days. Booking was so easy too."',
    initial: 'A',
    name: 'Amaka O.',
    role: 'Lekki, Lagos',
  },
  {
    quote: '"We switched our office cleaning to Clean Green and the difference was immediate — consistent quality every visit."',
    initial: 'T',
    name: 'Tunde A.',
    role: 'Office Manager, Ikeja',
  },
  {
    quote: '"Post-construction dust everywhere — they handled it in one visit. Highly recommend for new builds."',
    initial: 'F',
    name: 'Fatima B.',
    role: 'Homeowner, Ajah',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Client feedback</span>
          <h2 className="display">What people are saying</h2>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="stars">★★★★★</div>
              <p className="quote">{t.quote}</p>
              <div className="testi-person">
                <div className="avatar">{t.initial}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;