import Image from "next/image";
import { faqs, imageLibrary } from "@/lib/site-content";

export default function ContactUsPage() {
  return (
    <main className="subpage-main">
      <section className="shell subpage-split">
        <div className="subpage-hero">
          <span className="section-tag">Contact Us</span>
          <h1>Start the conversation with a team built for practical business support.</h1>
          <p>
            Tell us what you are building, fixing, or preparing for. We will
            help you identify the right legal and financial next steps.
          </p>
        </div>

        <div className="subpage-photo">
          <Image
            src={imageLibrary.office}
            alt="Modern professional office lounge"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="consult-section shell">
        <div className="consult-grid">
          <form className="consult-card form-card">
            <label>
              Name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Company
              <input type="text" placeholder="Company or organization name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="name@company.com" />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="Include country code" />
            </label>
            <label>
              Your requirement
              <textarea
                rows={5}
                placeholder="Share the matter, deadline, and support you need"
              />
            </label>
            <button type="submit" className="button-dark">
              Request Consultation
            </button>
          </form>

          <aside className="consult-card office-card">
            <h3>Reach our office</h3>
            <p>We typically respond within one business day for new inquiries.</p>

            <div className="office-item">
              <strong>Address</strong>
              <span>A-5, Pamposh Enclave, GK-1, South Delhi, New Delhi 110048, IN</span>
            </div>
            <div className="office-item">
              <strong>Email</strong>
              <span>lawfirmedwincce@gmail.com</span>
            </div>
            <div className="office-item">
              <strong>Call</strong>
              <span>+91 99111 69979</span>
            </div>

            <div className="office-hours">
              <strong>Office Hours</strong>
              <div>
                <span>Monday - Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div>
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell feature-strip feature-strip-single">
        <article className="feature-story feature-story-wide">
          <div className="feature-story-media">
            <Image
              src={imageLibrary.city}
              alt="Commercial district skyline"
              fill
              className="object-cover"
            />
          </div>
          <div className="feature-story-copy">
            <span className="section-tag">Visit Us</span>
            <h3>Conveniently positioned for founders, business owners, and professional teams</h3>
            <p>
              We work with clients in Delhi and across India through a mix of
              office meetings, remote consultations, and coordinated document support.
            </p>
          </div>
        </article>
      </section>

      <section className="faq-section shell">
        <div className="section-heading narrow">
          <h2>Questions we often receive before engagement</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
