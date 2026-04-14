"use client";

import Image from "next/image";
import { imageLibrary, pillars, stats } from "@/lib/site-content";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main id="top">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[40rem] opacity-40 bg-gradient-to-br from-[#1b3a70] to-slate-800 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[30rem] opacity-20 bg-gradient-to-tl from-amber-400 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:w-1/2"
          >
            <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200 mb-8">
              About Us
            </span>
          <h1 className="font-['Palatino_Linotype','Book_Antiqua',Georgia,serif] text-4xl leading-tight text-black sm:text-5xl lg:text-5xl xl:text-6xl mb-6">
              Building long-term business confidence through integrated legal advisory.
            </h1>
          <p className="text-lg leading-8 text-black">
              Edwin Corporate Law Firm supports founders, enterprises, and
              professional teams with a practical blend of corporate law,
              taxation, compliance, and intellectual property strategy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)]">
              <Image
                src={imageLibrary.team}
                alt="Advisory team meeting with clients"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach & Pillars Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="font-['Palatino_Linotype','Book_Antiqua',Georgia,serif] text-3xl tracking-tight text-slate-950 sm:text-4xl mb-6">
                Our approach
              </h2>
              <div className="space-y-6 text-base leading-8 text-slate-600">
                <p>
                  Since 2014, we have helped businesses move from setup to scale with
                  clearer structure, stronger compliance discipline, and faster access
                  to coordinated legal and financial support.
                </p>
                <p>
                  Our work is designed for decision-makers who want less fragmentation
                  and more accountability across registrations, contracts, filings,
                  governance, and risk management.
                </p>
              </div>
              <div className="mt-10 relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={imageLibrary.office}
                  alt="Modern law office interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 lg:mt-0 mt-8">
              {pillars.map((pillar, index) => (
                <motion.article 
                  key={pillar.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-300/50 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{pillar.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Palatino_Linotype','Book_Antiqua',Georgia,serif] text-3xl text-white sm:text-4xl">
              Why clients stay with us
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item, index) => (
              <motion.article 
                key={item.value} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
              >
                <h3 className="text-4xl font-bold text-white mb-4">{item.value}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
