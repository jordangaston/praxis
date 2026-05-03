const COLUMNS = [
  { h: 'Product', l: ['How it works', 'Interview types', 'Pricing', 'Demo'] },
  { h: 'Company', l: ['About', 'Team', 'Careers'] },
  { h: 'Legal', l: ['Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(126,67,255,0.10)',
        background: 'rgba(255,255,255,0.50)',
        backdropFilter: 'blur(16px)',
        padding: '80px 0 40px',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-14">
        <div
          className="font-medium grad-text"
          style={{ fontSize: 140, lineHeight: 0.85, letterSpacing: -4.5, marginBottom: 56 }}
        >
          Offered.★
        </div>

        <div
          className="grid gap-11 pt-11"
          style={{
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            borderTop: '1px solid rgba(126,67,255,0.10)',
          }}
        >
          <p
            className="text-[14.5px] leading-[1.6] m-0"
            style={{ maxWidth: 360, color: 'rgba(28,15,66,0.58)' }}
          >
            Unlimited AI mock interviews built on real FAANG rubrics. From the team behind 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
          </p>

          {COLUMNS.map(c => (
            <div key={c.h}>
              <div className="font-mono text-[11px] tracking-[1.4px] mb-4 font-semibold uppercase eyebrow">
                {c.h}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-[14px]" style={{ color: 'rgba(28,15,66,0.55)' }}>
                {c.l.map(x => (
                  <li key={x}>
                    <a href="#" className="transition-colors duration-150 hover:text-[#1C0F42]">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between font-mono text-[11.5px] tracking-[0.5px] mt-11 pt-6"
          style={{ borderTop: '1px solid rgba(126,67,255,0.10)', color: 'rgba(28,15,66,0.35)' }}
        >
          <span>© 2026 Offered, Inc.</span>
          <span>Built by people who've conducted the loop.</span>
        </div>
      </div>
    </footer>
  );
}
