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
        <div className="quote-wrap">
          <div className="quote-info">
            <h2 className="display">Get a free quote</h2>
            <p>Tell us a bit about your space and we'll get back to you with a quote and available time slots.</p>
            <div className="contact-line"><span className="contact-icon">📞</span> +234 000 000 0000</div>
            <div className="contact-line"><span className="contact-icon">✉️</span> hello@cleangreen.ng</div>
            <div className="contact-line"><span className="contact-icon">📍</span> Lagos, Nigeria</div>
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