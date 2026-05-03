export default function Nav() {
  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: '#2d2de0',
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: 12,
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          FIRST MOCK FREE — NO CREDIT CARD REQUIRED
        </span>
        <a
          href="#"
          style={{
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.60)',
            borderRadius: 6,
            padding: '4px 12px',
            fontSize: 11,
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'border-color 150ms ease',
          }}
        >
          START NOW
        </a>
      </div>

      {/* Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="7" width="20" height="4" rx="2" fill="#0a0a0a" opacity="0.25" />
            <rect x="1" y="12" width="20" height="4" rx="2" fill="#0a0a0a" opacity="0.55" />
            <rect x="1" y="17" width="20" height="4" rx="2" fill="#0a0a0a" />
          </svg>
          <span
            className="font-display font-semibold"
            style={{ fontSize: 15, color: '#0a0a0a', letterSpacing: '-0.3px' }}
          >
            Offered.
          </span>
        </a>

        {/* Center links */}
        <div className="flex items-center gap-6">
          {[
            { label: 'HOW IT WORKS', href: '#how-it-works' },
            { label: 'INTERVIEW TYPES', href: '#interview-types' },
            { label: 'PRICING', href: '#pricing' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 13,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                color: 'rgba(10,10,10,0.70)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            style={{
              fontSize: 13,
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              color: '#0a0a0a',
              border: '1px solid #0a0a0a',
              borderRadius: 6,
              padding: '8px 16px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'background 150ms ease',
            }}
          >
            SIGN IN
          </a>
          <button
            className="font-display font-semibold"
            style={{
              background: '#0a0a0a',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '8px 16px',
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'opacity 150ms ease',
            }}
          >
            BOOK A DEMO
          </button>
        </div>
      </nav>
    </>
  );
}
