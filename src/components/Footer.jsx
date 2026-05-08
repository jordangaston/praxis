const COLUMNS = [
  { heading: 'Product', links: ['How it works', 'Interview types', 'Pricing', 'Demo'] },
  { heading: 'Company', links: ['About', 'Team', 'Careers'] },
  { heading: 'Legal',   links: ['Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="5"  width="20" height="3" rx="1" fill="#0f111a" opacity="0.25" />
                <rect x="1" y="10" width="20" height="3" rx="1" fill="#0f111a" opacity="0.55" />
                <rect x="1" y="15" width="20" height="3" rx="1" fill="#0f111a" />
              </svg>
              <span className="footer-brand-name">Offered.</span>
            </div>
            <p className="footer-desc">
              Unlimited AI mock interviews built on real FAANG rubrics. From the team behind 100+ loops at Amazon, Meta, Apple, Microsoft, and Roblox.
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
