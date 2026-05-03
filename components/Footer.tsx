const LINKS = {
  PRODUCTS: [
    { label: "Empuls",        href: "#" },
    { label: "Plum",          href: "#" },
    { label: "Loyalife",      href: "#" },
    { label: "Pricing",       href: "#" },
    { label: "Integrations",  href: "#" },
  ],
  SOLUTIONS: [
    { label: "Employee Recognition",   href: "#" },
    { label: "Rewards & Incentives",   href: "#" },
    { label: "Customer Loyalty",       href: "#" },
    { label: "Sales Incentives",       href: "#" },
    { label: "Corporate Gifting",      href: "#" },
  ],
  RESOURCES: [
    { label: "Blog",          href: "#" },
    { label: "Case Studies",  href: "#" },
    { label: "Help Center",   href: "#" },
    { label: "API Docs",      href: "#" },
    { label: "System Status", href: "#" },
  ],
  COMPANY: [
    { label: "About Us",   href: "#" },
    { label: "Careers",    href: "#" },
    { label: "Partners",   href: "#" },
    { label: "Newsroom",   href: "#" },
    { label: "Contact",    href: "#" },
  ],
};

const COMPLIANCE_TAGS = ["SOC 2", "GDPR", "ISO 27001"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light-200">
      <div className="max-w-[1280px] mx-auto px-6 py-14">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* Xoxoday wordmark */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/xoxoday-dark.svg"
              alt="Xoxoday"
              className="h-7 mb-4"
            />
            <p className="text-sm text-dark-100 leading-relaxed mb-5 max-w-[220px]">
              Rewards, recognition, and loyalty solutions for enterprises that put people first.
            </p>

            {/* Compliance tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {COMPLIANCE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold text-dark-200 border border-light-300 rounded-md px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg border border-light-300 flex items-center justify-center text-dark-100 hover:border-blue-100 hover:text-blue-200 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 4.5H4V12H2V4.5ZM3 3.5C3.55 3.5 4 3.05 4 2.5S3.55 1.5 3 1.5 2 1.95 2 2.5 2.45 3.5 3 3.5ZM5.5 4.5H7.4V5.4H7.43C7.7 4.92 8.36 4.4 9.35 4.4 11.36 4.4 11.75 5.74 11.75 7.47V12H9.75V7.9C9.75 7.16 9.74 6.22 8.73 6.22 7.71 6.22 7.55 7.01 7.55 7.84V12H5.55V4.5H5.5Z" fill="currentColor"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="w-8 h-8 rounded-lg border border-light-300 flex items-center justify-center text-dark-100 hover:border-blue-100 hover:text-blue-200 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1L5.5 7.3L1 12H2.2L6.06 8.01L9.2 12H13L8.24 5.37L12.4 1H11.2L7.7 4.66L4.8 1H1ZM2.7 1.9H4.3L11.3 11.1H9.7L2.7 1.9Z" fill="currentColor"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg border border-light-300 flex items-center justify-center text-dark-100 hover:border-blue-100 hover:text-blue-200 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12.4 3.6C12.25 3.05 11.81 2.62 11.26 2.47 10.26 2.2 7 2.2 7 2.2S3.74 2.2 2.74 2.47C2.19 2.62 1.75 3.05 1.6 3.6 1.33 4.61 1.33 7 1.33 7S1.33 9.39 1.6 10.4C1.75 10.95 2.19 11.38 2.74 11.53 3.74 11.8 7 11.8 7 11.8S10.26 11.8 11.26 11.53C11.81 11.38 12.25 10.95 12.4 10.4 12.67 9.39 12.67 7 12.67 7S12.67 4.61 12.4 3.6ZM5.8 8.97V5.03L8.93 7 5.8 8.97Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(LINKS) as [string, { label: string; href: string }[]][]).map(([col, items]) => (
            <div key={col}>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-100 mb-4">
                {col}
              </p>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-200 hover:text-blue-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-light-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-dark-100">
            © {new Date().getFullYear()} Xoxoday. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((l) => (
              <a key={l} href="#" className="text-xs text-dark-100 hover:text-blue-200 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
