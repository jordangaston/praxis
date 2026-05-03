const COLUMNS = [
  { h: 'Product', l: ['How it works', 'Interview types', 'Pricing', 'Demo'] },
  { h: 'Company', l: ['About', 'Team', 'Careers'] },
  { h: 'Legal',   l: ['Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <div style={{ padding: '8px 20px 28px' }}>
      <footer
        className="section-card"
        style={{ padding: '64px 72px 40px' }}
      >
        {/* Wordmark */}
        <div
          className="font-display font-medium grad-text"
          style={{ fontSize: 100, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 48 }}
        >
          Offered.★
        </div>

        {/* Grid */}
        <div
          className="grid gap-10 pt-10"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', borderTop: '1px solid #e6e2e3' }}
        >
          <p className="text-[14px] leading-[1.65] m-0" style={{ maxWidth: 340, color: '#615e6e' }}>
            Unlimited AI mock interviews built on real FAANG rubrics. From the team behind 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
          </p>
          {COLUMNS.map(c => (
            <div key={c.h}>
              <div className="font-mono font-semibold text-[10.5px] tracking-[1.4px] uppercase mb-4" style={{ color: '#7e43ff' }}>{c.h}</div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-[14px]" style={{ color: '#615e6e' }}>
                {c.l.map(x => (
                  <li key={x}>
                    <a href="#" className="hover:text-[#26114a] transition-colors duration-150">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between font-mono text-[11px] tracking-[0.5px] mt-10 pt-5"
          style={{ borderTop: '1px solid #e6e2e3', color: '#9491a1' }}
        >
          <span>© 2026 Offered, Inc.</span>
          <span>Built by people who've conducted the loop.</span>
        </div>
      </footer>
    </div>
  );
}
