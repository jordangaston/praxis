export default function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <a href="#" className="nav-logo">Offered.</a>

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
