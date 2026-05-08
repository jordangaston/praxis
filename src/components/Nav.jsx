export default function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <a href="#" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Offered logo" role="img">
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#234ee4"/>
                <stop offset="100%" stopColor="#0f2cb9"/>
              </linearGradient>
            </defs>
            <circle cx="14" cy="14" r="13.5" fill="url(#logo-grad)" stroke="var(--color-brand-stroke)" strokeWidth="1"/>
            <polyline points="8,14.5 12,18.5 20,10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Offered
        </a>

        {[
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Pricing', href: '#pricing' },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}

        <button className="btn btn-primary btn-nav">Start the challenge</button>
      </nav>
    </div>
  );
}
