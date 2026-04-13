"use client";

import Link from "next/link";
import Image from "next/image";
import { faqs, imageLibrary, stats } from "@/lib/site-content";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const homepageServices = [
  {
    title: "Business Setup & Registrations",
    text: "Support for incorporation, LLPs, startup structuring, GST setup, and early-stage compliance planning.",
    image: imageLibrary.boardroom,
  },
  {
    title: "Contracts & Business Documentation",
    text: "Commercial agreements, founder documents, service contracts, employment paperwork, and internal legal documentation.",
    image: imageLibrary.documents,
  },
  {
    title: "Trademark, Copyright & IP",
    text: "Brand protection, filing strategy, ownership clarity, and practical guidance for protecting business assets.",
    image: imageLibrary.hero,
  },
  {
    title: "Notices, Disputes & Advisory",
    text: "Structured legal responses, recovery support, dispute guidance, and strategic consultation before matters escalate.",
    image: imageLibrary.finance,
  },
];

export const HeroSection = () => {
  const texts = [
    "Change Business Form Type",
    "Welcome to Ak Law Chamber",
    "Trademark & Copyrights",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white text-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/banner1.jpg"
          alt="Legal consultation meeting"
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      {/* Gradient Overlay 
       <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-[#0a1845]/90" />
      */}</div>

      
      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1580px] flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 gap-10 lg:gap-16 text-center lg:text-left">
        {/* LEFT SIDE - Animated Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-left max-w-[620px] space-y-6 lg:space-y-8 mt-20 lg:mt-0"
        >
          {/* Animated Text */}
          <div className="relative flex items-center justify-center lg:justify-start min-h-[5rem] sm:min-h-[6rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={texts[index]}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#d4a017]"
              >
                {texts[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Description + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-[520px] space-y-5 sm:space-y-6"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block whitespace-nowrap rounded-full bg-[#d4a017]/15 px-6 sm:px-8 py-2 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.15em] text-white font-semibold border border-[#d4a017]/30 shadow-sm"
          >
            Your Trusted Partner for Startup Legalities
          </motion.div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white max-w-[480px]">
            Ak Law Chamber, founded in 2014, has been serving clients
            across India with the vision of providing a complete business
            solution — from company incorporation and taxation to intellectual
            property and compliance management.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a017] px-7 sm:px-8 py-3 text-sm font-semibold text-black shadow-lg hover:bg-[#f1c94c] transition"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Overlay Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/overlay-pattern.svg')] opacity-15 mix-blend-overlay" />
    </section>
  );
};

export default function Home() {
  return (
    <main id="top">
      <HeroSection />

      <section className="shell homepage-overview">
        <div className="overview-grid">
          <article className="overview-card">
            <span className="section-tag">About Us</span>
            <h3>Professional legal help that is easier to access and easier to understand</h3>
            <p>
              We built this practice for people who need direct answers, reliable
              documentation support, and timely legal guidance without unnecessary complexity.
            </p>
            <Link href="/about" className="text-link">
              Learn more
            </Link>
          </article>

          <article className="overview-card overview-card-image">
            <div className="overview-image">
              <Image
                src={imageLibrary.team}
                alt="Professional advisory team in discussion"
                fill
                className="object-cover"
              />
            </div>
          </article>

          <article className="overview-card">
            <span className="section-tag">Why Clients Choose Us</span>
            <ul className="overview-list">
              <li>
                <strong>Consultation-first approach</strong>
                <span>We start by understanding the issue, urgency, and business impact before recommending action.</span>
              </li>
              <li>
                <strong>Strong documentation support</strong>
                <span>From company papers to contracts and notices, we help you move from confusion to execution.</span>
              </li>
              <li>
                <strong>Confidential and practical guidance</strong>
                <span>Advice is structured to be usable, business-aware, and handled with discretion.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="services-section shell" id="services">
        <div className="section-heading narrow">
          <span className="section-tag">Services</span>
          <h2>How we support clients across core legal and documentation needs</h2>
          <p>
            Our homepage focuses on the legal areas clients most often need help
            with first: consultation, company setup, contracts, notices, and intellectual property.
          </p>
        </div>

        <div className="services-grid">
          {homepageServices.map((service, index) => (
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

      <section className="metrics-section">
        <div className="shell">
          <div className="section-heading light">
            <h2>Built to make legal help feel more accessible, structured, and dependable</h2>
          </div>
          <div className="metrics-grid">
            {stats.map((item) => (
              <article key={item.value} className="metric-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-section shell" id="contact">
        <div className="section-heading narrow">
          <span className="section-tag">Request a Consultation</span>
          <h2>Tell us your concern and we will help you understand the right next step</h2>
          <p>
            Share the matter, document issue, contract concern, startup need, or
            compliance question. Our team will review the context and respond with
            a practical consultation path.
          </p>
        </div>

        <div className="consult-grid">
          <form className="consult-card form-card">
            <label>
              Name
              <input type="text" placeholder="Your full name" />
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
              How can we support you?
              <textarea
                rows={5}
                placeholder="Share details about your legal or financial requirements"
              />
            </label>
            <button type="submit" className="button-dark">
              Submit Request
            </button>
          </form>

          <aside className="consult-card office-card">
            <h3>Corporate Office</h3>
            <p>Reach out for confidential legal support, documentation guidance, and business advisory.</p>

            <div className="office-item">
              <strong>Our Location</strong>
              <span>A-5, Pamposh Enclave, GK-1, South Delhi, New Delhi 110048, IN</span>
            </div>
            <div className="office-item">
              <strong>Email Us</strong>
              <span>lawfirmedwincce@gmail.com</span>
            </div>
            <div className="office-item">
              <strong>Call Us</strong>
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

      <section className="testimonial-section shell" id="testimonials">
        <div className="testimonial-card">
          <div>
            <p className="stars">★★★★★</p>
            <p className="testimonial-text">
              We needed fast clarity on contracts, compliance, and brand
              protection. Their team explained the issue in simple terms and
              helped us move ahead without delays.
            </p>
            <p className="testimonial-name">Isha Malhotra</p>
            <p className="testimonial-role">Founder, Growth-stage Consumer Brand</p>
          </div>
          <div className="testimonial-avatar" aria-hidden="true">
            IM
          </div>
        </div>
      </section>

      <section className="faq-section shell" id="faq">
        <div className="section-heading narrow">
          <span className="section-tag">FAQs</span>
          <h2>Answers for decision-makers planning the next move</h2>
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

      <section className="cta-strip">
        <div className="shell cta-strip-inner">
          <h2>Secure your business foundations with a partner-first law firm</h2>
          <p>
            Schedule a discovery call to align legal, tax, and IP strategies
            with your next milestone.
          </p>
          <Link href="/contact-us" className="button-primary">
            Schedule Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
