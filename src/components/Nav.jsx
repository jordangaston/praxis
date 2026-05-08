export default function Nav() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #eeeef2',
          borderRadius: 999,
          padding: '8px 8px 8px 20px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#000000',
            letterSpacing: '-0.3px',
            fontFamily: '"DM Sans", Arial, sans-serif',
            textDecoration: 'none',
            marginRight: 8,
          }}
        >
          Offered.
        </a>

        {/* Links */}
        {[
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Pricing', href: '#pricing' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: 13,
              fontFamily: '"DM Sans", Arial, sans-serif',
              fontWeight: 400,
              color: 'rgba(0,0,0,0.60)',
              padding: '4px 12px',
              borderRadius: 999,
              transition: 'color 150ms ease',
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}

        {/* CTA */}
        <button className="btn-primary" style={{ marginLeft: 4, padding: '8px 18px', fontSize: 13, letterSpacing: '0.04em' }}>
          START THE CHALLENGE
        </button>
      </nav>
    </div>
  );
}
