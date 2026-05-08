const COLUMNS = [
  { heading: 'Product', links: ['How it works', 'Pricing', 'Demo'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Offered logo" role="img">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#234ee4"/>
                    <stop offset="100%" stopColor="#0f2cb9"/>
                  </linearGradient>
                </defs>
                <circle cx="14" cy="14" r="13.5" fill="url(#footer-logo-grad)" stroke="var(--color-brand-stroke)" strokeWidth="1"/>
                <polyline points="8,14.5 12,18.5 20,10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="footer-brand-name">Offered</span>
            </div>
            <p className="footer-desc">
              AI mock interviews built on real FAANG rubrics, by engineers who've run 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
            </p>
          </div>

          {COLUMNS.map(c => (
            <div key={c.heading}>
              <div className="footer-col-label">{c.heading}</div>
              <ul className="footer-links">
                {c.links.map(x => (
                  <li key={x}>
                    <a href="#" className="footer-link">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Offered, Inc.</span>
          <span>Built by people who've conducted the loop.</span>
        </div>
      </div>
    </footer>
  );
}
