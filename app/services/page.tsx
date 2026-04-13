import Image from "next/image";
import { imageLibrary, services } from "@/lib/site-content";

const process = [
  "Discovery call to understand the matter and business context.",
  "Scoping note with timelines, responsibilities, and priority risks.",
  "Execution support across drafting, filings, compliance, and coordination.",
  "Ongoing advisory for follow-through and next-stage planning.",
];

export default function ServicesPage() {
  return (
    <main className="subpage-main">
      <section className="shell subpage-split">
        <div className="subpage-hero">
          <span className="section-tag">Services</span>
          <h1>End-to-end legal and compliance services for businesses at every stage.</h1>
          <p>
            Our service model is designed to reduce friction, create clarity,
            and give founders and operators one place to move work forward.
          </p>
        </div>

        <div className="subpage-photo">
          <Image
            src={imageLibrary.boardroom}
            alt="Professional client advisory meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="services-section shell">
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <div className="service-visual service-visual-strong">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section shell">
        <div className="section-heading narrow">
          <h2>How we work</h2>
          <p>
            Every engagement is structured to give leadership teams visibility,
            momentum, and dependable follow-through.
          </p>
        </div>
        <div className="subpage-list">
          {process.map((step) => (
            <article key={step} className="pillar-card">
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell feature-strip feature-strip-single">
        <article className="feature-story feature-story-wide">
          <div className="feature-story-media">
            <Image
              src={imageLibrary.consulting}
              alt="Client consultation session"
              fill
              className="object-cover"
            />
          </div>
          <div className="feature-story-copy">
            <span className="section-tag">Service Model</span>
            <h3>One coordinated team across legal, tax, and compliance execution</h3>
            <p>
              Instead of disconnected service providers, clients work with one
              firm that aligns documentation, filings, advisory, and timelines.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
