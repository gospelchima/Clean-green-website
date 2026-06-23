import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const QuoteForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  // Replace these with your EmailJS values (https://www.emailjs.com)
  const SERVICE_ID = 'service_yqxnfls';
  const TEMPLATE_ID = 'template_dk0jg2b';
  const PUBLIC_KEY = 'jhjnBBYjl_RiZkjeS';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formRef.current) return;

  setStatus('sending');

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    .then(() => {
      setStatus('success');
      formRef.current?.reset();
    })
    .catch(() => {
      setStatus('error');
    });
};

  return (
    <section id="quote" className="quote-section">
      <div className="wrap">
        <div className="quote-wrap" data-aos="fade-up">
          <div className="quote-info">
            <h2 className="display">Get a free quote</h2>
            <p>Tell us a bit about your space and we'll get back to you with a quote and available time slots.</p>
            <div className="contact-line"><span className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92Z"/>
</svg></span> +234 808 688 3879</div>
            <div className="contact-line"><span className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect width="20" height="16" x="2" y="4" rx="2"/>
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
</svg></span> cleangreensignature@gmail.com</div>
            <div className="contact-line"><span className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
  <circle cx="12" cy="10" r="3"/>
</svg></span> Lagos, Nigeria</div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" required placeholder="08012345678" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label htmlFor="service">Service type</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In / Move-Out</option>
                    <option>Post-Construction</option>
                    <option>Custom Package</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Tell us about your space</label>
                  <textarea id="message" name="message" placeholder="Location, size of space, preferred date..." />
                </div>
                <div className="field full">
                  <button type="submit" className="btn btn-clay" style={{ width: '100%' }} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Request My Quote'}
                  </button>

                  {status === 'success' && (
                    <div id="form-status" className="show ok">
                      Thanks! Your request has been sent — we'll be in touch soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div id="form-status" className="show err">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <p className="form-note">We typically respond within a few hours. No spam, ever.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;