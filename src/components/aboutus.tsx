interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

const whyItems: WhyItem[] = [
  {
    icon: '✓',
    title: 'Vetted & trained staff',
    description: 'Every team member is background-checked, trained on technique, and briefed before every job.',
  },
  {
    icon: '🌿',
    title: 'Eco-friendly products',
    description: 'We use safe, low-toxicity cleaning products that are gentle on your family, pets, and the planet.',
  },
  {
    icon: '🕒',
    title: 'Flexible scheduling',
    description: 'Book a one-time clean or set up a recurring plan — daily, weekly, or monthly, on your terms.',
  },
  {
    icon: '₦',
    title: 'Transparent pricing',
    description: 'No hidden charges. You get a clear quote upfront based on your space and the service you choose.',
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why Clean Green</span>
          <h2 className="display">Built on trust, kept by results</h2>
          <p>We treat every space like it's our own — careful, consistent, and never rushed.</p>
        </div>

        <div className="why-grid">
          {whyItems.map((item) => (
            <div className="why-item" key={item.title}>
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