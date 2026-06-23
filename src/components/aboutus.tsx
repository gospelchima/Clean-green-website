import React from 'react';

interface WhyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);



const whyItems: WhyItem[] = [
  {
    icon: <CheckIcon />,
    title: 'Vetted & trained staff',
    description: 'Every team member is background-checked, trained on technique, and briefed before every job.',
  },
  {
    icon: <LeafIcon />,
    title: 'Eco-friendly products',
    description: 'We use safe, low-toxicity cleaning products that are gentle on your family, pets, and the planet.',
  },
  {
    icon: <ClockIcon />,
    title: 'Flexible scheduling',
    description: 'Book a one-time clean or set up a recurring plan — daily, weekly, or monthly, on your terms.',
  },
  {
    icon: <span>₦</span>,
    title: 'Transparent pricing',
    description: 'No hidden charges. You get a clear quote upfront based on your space and the service you choose.',
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="alt">
      <div className="wrap">
        <div className="section-head" data-aos="fade-right">
          <span className="eyebrow">Why Clean Green</span>
          <h2 className="display">Built on trust, kept by results</h2>
          <p>We treat every space like it's our own — careful, consistent, and never rushed.</p>
        </div>

        <div className="why-grid">
          {whyItems.map((item, i) => (
            <div className="why-item" key={item.title} data-aos="fade-right" data-aos-delay={i * 120}>
              <div className="why-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;