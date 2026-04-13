import Image from "next/image";
import { imageLibrary, services } from "@/lib/site-content";

const specializations = [
  {
    title: "Corporate Structuring",
    text: "Advisory for company formation, ownership structures, governance, and operational readiness.",
    image: imageLibrary.boardroom,
  },
  {
    title: "Trademark and IP Protection",
    text: "Protection strategy for names, marks, copyright assets, assignments, and portfolio hygiene.",
    image: imageLibrary.documents,
  },
  {
    title: "Tax and Regulatory Alignment",
    text: "Practical guidance for GST, ROC, audit coordination, and documentation discipline.",
    image: imageLibrary.finance,
  },
  {
    title: "Startup Legal Support",
    text: "Support for founders handling incorporation, contracts, investor readiness, and scale-stage compliance.",
    image: imageLibrary.consulting,
  },
];

export default function SpecializationPage() {
  return (
    <main className="subpage-main">
      <section className="shell subpage-split">
        <div className="subpage-hero">
          <span className="section-tag">Specialization</span>
          <h1>Focused expertise across legal, tax, compliance, and business advisory.</h1>
          <p>
            We combine specialist knowledge with cross-functional execution so
            your team can move from issue to action without juggling multiple
            advisors.
          </p>
        </div>

        <div className="subpage-photo">
          <Image
            src={imageLibrary.documents}
            alt="Legal documents and drafting materials"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="services-section shell">
        <div className="services-grid">
          {specializations.map((item, index) => (
            <article key={item.title} className="service-card">
              <div className="service-visual service-visual-strong">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section shell">
        <div className="section-heading narrow">
          <h2>Related practice support</h2>
          <p>
            Our specialization work is backed by broader execution services for
            growing companies and professional organizations.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={`${service.title}-support`} className="service-card">
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
    </main>
  );
}
