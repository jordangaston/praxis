const COLUMNS = [
  { h: 'Product', l: ['How it works', 'Interview types', 'Pricing', 'Demo'] },
  { h: 'Company', l: ['About', 'Team', 'Careers'] },
  { h: 'Legal',   l: ['Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #eeeef2', padding: '80px 0 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 40,
          }}
        >
          {/* Logo + description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="5" width="20" height="3" rx="1" fill="#000000" opacity="0.25" />
                <rect x="1" y="10" width="20" height="3" rx="1" fill="#000000" opacity="0.55" />
                <rect x="1" y="15" width="20" height="3" rx="1" fill="#000000" />
              </svg>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#000000',
                  letterSpacing: '-0.3px',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                Offered.
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 280,
                color: '#6f7790',
                fontFamily: '"DM Sans", Arial, sans-serif',
              }}
            >
              Unlimited AI mock interviews built on real FAANG rubrics. From the team behind 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
            </p>
          </div>

          {COLUMNS.map(c => (
            <div key={c.h}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#6f7790',
                  marginBottom: 16,
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {c.h}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {c.l.map(x => (
                  <li key={x}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#6f7790',
                        fontFamily: '"DM Sans", Arial, sans-serif',
                        transition: 'color 150ms ease',
                      }}
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 40,
            paddingTop: 20,
            borderTop: '1px solid #eeeef2',
            fontSize: 12,
            color: '#9ca3af',
            fontFamily: '"DM Sans", Arial, sans-serif',
          }}
        >
          <span>© 2026 Offered, Inc.</span>
          <span>Built by people who've conducted the loop.</span>
        </div>
      </div>
    </footer>
  );
}
