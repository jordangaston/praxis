const COLUMNS = [
  { h: 'Product', l: ['How it works', 'Interview types', 'Pricing', 'Demo'] },
  { h: 'Company', l: ['About', 'Team', 'Careers'] },
  { h: 'Legal',   l: ['Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '80px 0 40px' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="grid gap-10" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="20" height="4" rx="2" fill="#0a0a0a" opacity="0.25" />
                <rect x="1" y="12" width="20" height="4" rx="2" fill="#0a0a0a" opacity="0.55" />
                <rect x="1" y="17" width="20" height="4" rx="2" fill="#0a0a0a" />
              </svg>
              <span
                className="font-display font-semibold"
                style={{ fontSize: 14, color: '#0a0a0a', letterSpacing: '-0.3px' }}
              >
                Offered.
              </span>
            </div>
            <p className="text-[14px] leading-[1.65] m-0" style={{ maxWidth: 280, color: '#4b5563' }}>
              Unlimited AI mock interviews built on real FAANG rubrics. From the team behind 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
            </p>
          </div>

          {COLUMNS.map(c => (
            <div key={c.h}>
              <div
                className="font-mono font-semibold text-[10.5px] tracking-[1.4px] uppercase mb-4"
                style={{ color: '#2d2de0' }}
              >
                {c.h}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-[14px]" style={{ color: '#4b5563' }}>
                {c.l.map(x => (
                  <li key={x}>
                    <a href="#" className="transition-colors duration-150" style={{ color: '#4b5563' }}>{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between font-mono text-[11px] tracking-[0.5px] mt-10 pt-5"
          style={{ borderTop: '1px solid #e5e7eb', color: '#9ca3af' }}
        >
          <span>© 2026 Offered, Inc.</span>
          <span>Built by people who've conducted the loop.</span>
        </div>
      </div>
    </footer>
  );
}
