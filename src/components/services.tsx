

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: '01 — Residential',
    title: 'Home Cleaning',
    description: 'Regular or one-time cleaning for apartments and houses — kitchens, bathrooms, living spaces, and bedrooms.',
  },
  {
    number: '02 — Commercial',
    title: 'Office Cleaning',
    description: 'Daily, weekly, or after-hours cleaning for offices and workspaces, keeping your team productive in a tidy environment.',
  },
  {
    number: '03 — Deep Clean',
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean covering grout, baseboards, appliances, and every overlooked corner.',
  },
  {
    number: '04 — Move-in/Out',
    title: 'Move-In / Move-Out',
    description: 'Get a new space move-in ready or leave your old one spotless for inspection and handover.',
  },
  {
    number: '05 — Post-Construction',
    title: 'Post-Construction Clean',
    description: 'Removal of dust, debris, and residue after renovation or building work, leaving the space ready to use.',
  },
  {
    number: '06 — Custom',
    title: 'Custom Packages',
    description: "Tell us what you need — we'll build a cleaning plan and schedule around your space and budget.",
  },
];

const Services = () => {
  return (
    <section id="services">
      
      <div className="wrap">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">What we offer</span>
          <h2 className="display">Cleaning services for every space</h2>
          <p>From a quick weekly refresh to a full post-construction deep clean, our teams come fully equipped and ready to work.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={service.title} data-aos="fade-up"
      data-aos-delay={i * 100}>
              <div className="service-num">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
  <a href="/Cleangreen-Signature-Scope-of-Services.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
    View our full scope of work
  </a>
</div>
      </div>
    </section>
  );
};

export default Services;