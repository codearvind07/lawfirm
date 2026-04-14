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
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
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
        {/* Dark overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
      </div>

      
      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1580px] flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-20 gap-10 lg:gap-16 text-center lg:text-left pt-32 pb-16 lg:py-0">
        {/* LEFT SIDE - Animated Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[620px] space-y-6 lg:space-y-8"
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
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#d4a017] drop-shadow-lg"
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
            className="inline-block rounded-full bg-[#d4a017]/20 px-5 sm:px-8 py-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] text-white font-semibold border border-[#d4a017]/30 backdrop-blur-sm shadow-sm"
          >
            Your Trusted Partner for Startup Legalities
          </motion.div>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-white max-w-[480px] drop-shadow-md">
            Ak Law Chamber, founded in 2014, has been serving clients
            across India with the vision of providing a complete business
            solution from company incorporation and taxation to intellectual
            property and compliance management.
          </p>

          {/* CTA Button */}
          <div className="pt-6 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#d4a017] px-8 py-3.5 text-sm font-bold text-black shadow-lg hover:bg-[#f1c94c] transition-all"
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

      <section className="shell homepage-overview px-5 sm:px-10 lg:px-20 py-16 md:py-24">
        <div className="overview-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overview-card"
          >
            <span className="section-tag">About Us</span>
            <h3>Professional legal help that is easier to access and easier to understand</h3>
            <p>
              We built this practice for people who need direct answers, reliable
              documentation support, and timely legal guidance without unnecessary complexity.
            </p>
            <Link href="/about" className="text-link">
              Learn more
            </Link>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overview-card overview-card-image"
          >
            <div className="overview-image">
              <Image
                src={imageLibrary.team}
                alt="Professional advisory team in discussion"
                fill
                className="object-cover"
              />
            </div>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overview-card"
          >
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
          </motion.article>
        </div>
      </section>

      <section className="services-section shell px-5 sm:px-10 lg:px-20 py-16 md:py-24" id="services">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading narrow"
        >
          <span className="section-tag">Services</span>
          <h2>How we support clients across core legal and documentation needs</h2>
          <p>
            Our homepage focuses on the legal areas clients most often need help
            with first: consultation, company setup, contracts, notices, and intellectual property.
          </p>
        </motion.div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {homepageServices.map((service, index) => (
            <motion.article 
              key={service.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-visual service-visual-strong">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="metrics-section py-16 md:py-24 bg-gray-50/50">
        <div className="shell px-5 sm:px-10 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading light"
          >
            <h2>Built to make legal help feel more accessible, structured, and dependable</h2>
          </motion.div>
          <div className="metrics-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10">
            {stats.map((item, index) => (
              <motion.article 
                key={item.value} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metric-card"
              >
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-section shell px-5 sm:px-10 lg:px-20 py-16 md:py-24" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading narrow"
        >
          <span className="section-tag">Request a Consultation</span>
          <h2>Tell us your concern and we will help you understand the right next step</h2>
          <p>
            Share the matter, document issue, contract concern, startup need, or
            compliance question. Our team will review the context and respond with
            a practical consultation path.
          </p>
        </motion.div>

        <div className="consult-grid grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <motion.form 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="consult-card form-card"
          >
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
          </motion.form>

          <motion.aside 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="consult-card office-card"
          >
            <h3>Corporate Office</h3>
            <p>Reach out for confidential legal support, documentation guidance, and business advisory.</p>

            <div className="office-item">
              <strong>Our Location</strong>
              <span>123 Example Street, City, Country 00000</span>
            </div>
            <div className="office-item">
              <strong>Email Us</strong>
              <span>example@example.com</span>
            </div>
            <div className="office-item">
              <strong>Call Us</strong>
              <span>+1 234 567 8900</span>
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
          </motion.aside>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="testimonial-section shell px-5 sm:px-10 lg:px-20 py-16 md:py-24" 
        id="testimonials"
      >
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
      </motion.section>

      <section className="faq-section shell px-5 sm:px-10 lg:px-20 py-16 md:py-24" id="faq">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading narrow"
        >
          <span className="section-tag">FAQs</span>
          <h2>Answers for decision-makers planning the next move</h2>
        </motion.div>

        <div className="faq-list flex flex-col gap-4 mt-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <details open={index === 0} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-strip px-5 sm:px-10 lg:px-20 py-16 md:py-24"
      >
        <div className="shell cta-strip-inner flex flex-col items-center text-center gap-6">
          <h2>Secure your business foundations with a partner-first law firm</h2>
          <p>
            Schedule a discovery call to align legal, tax, and IP strategies
            with your next milestone.
          </p>
          <Link href="/contact-us" className="button-primary">
            Schedule Discovery Call
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
