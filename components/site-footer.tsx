import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/specialization", label: "Specialization" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
];

const practiceAreas = [
  "Corporate Structuring",
  "Trademark & IP Protection",
  "GST and Tax Advisory",
  "Compliance Management",
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="mx-auto w-[min(1180px,calc(100vw-2rem))] px-0 py-16 sm:py-20">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[#12264b] to-slate-950 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200">
              Ak Law Chamber
            </div>

            <div className="space-y-4">
              <h2 className="max-w-xl font-['Palatino_Linotype','Book_Antiqua',Georgia,serif] text-3xl leading-tight text-white sm:text-4xl">
                Delivering strategic legal and financial clarity to future-ready businesses.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                We support founders, enterprises, and professional teams with
                integrated corporate law, taxation, compliance, and intellectual
                property advisory across India.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Response Time
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Within 1 Business Day</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Coverage
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Corporate, Tax, IP, Compliance</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Quick Links
            </h3>
            <nav className="grid gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-amber-300/25 hover:bg-white/10 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-500 transition group-hover:text-amber-200">→</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Corporate Office
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  123 Example Street, City, Country 00000
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:example@example.com"
                  className="mt-2 block text-sm text-slate-200 transition hover:text-amber-200"
                >
                  example@example.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Call
                </p>
                <a
                  href="tel:+12345678900"
                  className="mt-2 block text-sm text-slate-200 transition hover:text-amber-200"
                >
                  +1 234 567 8900
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ak Law Chamber. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {practiceAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
