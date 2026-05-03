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
            fontSize: 11,
            fontFamily: '"DM Sans", Arial, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.06em',
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
            borderRadius: 4,
            padding: '4px 12px',
            fontSize: 11,
            fontFamily: '"DM Sans", Arial, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.06em',
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
          borderBottom: '1px solid #eeeef2',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="5" width="20" height="3" rx="1" fill="#000000" opacity="0.25" />
            <rect x="1" y="10" width="20" height="3" rx="1" fill="#000000" opacity="0.55" />
            <rect x="1" y="15" width="20" height="3" rx="1" fill="#000000" />
          </svg>
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: '#000000',
              letterSpacing: '-0.3px',
              fontFamily: '"DM Sans", Arial, sans-serif',
            }}
          >
            Offered.
          </span>
        </a>

        {/* Center links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[
            { label: 'HOW IT WORKS', href: '#how-it-works' },
            { label: 'INTERVIEW TYPES', href: '#interview-types' },
            { label: 'PRICING', href: '#pricing' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 11,
                fontFamily: '"DM Sans", Arial, sans-serif',
                fontWeight: 500,
                color: 'rgba(0,0,0,0.70)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a
            href="#"
            style={{
              fontSize: 11,
              fontFamily: '"DM Sans", Arial, sans-serif',
              fontWeight: 500,
              color: '#000000',
              background: '#eeeeef',
              border: '1px solid #e2e3e9',
              borderRadius: 4,
              padding: '8px 16px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'background 150ms ease',
            }}
          >
            SIGN IN
          </a>
          <button
            style={{
              background: '#000000',
              color: '#ffffff',
              border: '1px solid #000000',
              borderRadius: 4,
              padding: '8px 16px',
              fontSize: 11,
              fontFamily: '"DM Sans", Arial, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.06em',
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
