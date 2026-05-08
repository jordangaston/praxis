const logos = [
  {
    name: 'Roblox',
    svg: (
      <svg viewBox="0 0 24 24" height="24" fill="currentColor">
        <path d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z" />
      </svg>
    ),
  },
  {
    name: 'PayPal',
    svg: (
      <svg viewBox="0 0 24 24" height="24" fill="currentColor">
        <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
      </svg>
    ),
  },
  {
    name: 'Amazon',
    svg: (
      <svg viewBox="0 0 448 512" height="24" fill="currentColor">
        <path d="M257.7 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56s-32.3-25.3-32.3-52.8l0-147.1C341.5 89 317 32 229.2 32 141.2 32 94.5 87 94.5 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8l0 40.6zM393.7 413c-7.7 10-70 67-174.5 67S34.7 408.5 10.2 379c-6.8-7.7 1-11.3 5.5-8.3 73.3 44.5 187.8 117.8 372.5 30.3 7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    svg: (
      <svg viewBox="0 0 23 23" height="22" fill="currentColor">
        <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-body">
        <div className="container hero-content">
          <span className="badge badge--outline hero-animate hero-animate-1" style={{ marginBottom: 'var(--space-4)' }}>
            The 30 day system design challenge
          </span>

          <h1 className="hero-heading hero-animate hero-animate-2">
            Master system design in{' '}
            <span className="hl">30 days</span>{' '}
            or get your money back
          </h1>

          <p className="hero-subheadline hero-animate hero-animate-3">
            Unlimited sessions on 100+ real FAANG questions. Pass our challenge in 30 days or get a full refund.
          </p>

          <div className="hero-cta hero-animate hero-animate-4">
            <button className="btn btn-primary btn-hero">
              Start the challenge
            </button>
          </div>

          <div className="hero-logos hero-animate hero-animate-5">
            <span className="hero-logos-label">Built by engineers from</span>
            {logos.map(({ name, svg }) => (
              <div key={name} title={name} style={{ display: 'flex', alignItems: 'center' }}>
                {svg}
              </div>
            ))}
            <svg viewBox="0 0 474.8 110.5" height="22" fill="currentColor">
              <path d="M56 69.8V.2h22.7v66.7c0 4.7 1 5.8 5.8 5.8h1.9l2.7 18.4c-1.7.2-8.7.7-13 .7-12.4.1-20.1-4.3-20.1-22zm173.8-42.5l17.6-1.4 1.7 5.3c3.5-3.3 9.7-6.6 23-6.6 22.9 0 28.2 16.1 28.2 34.1 0 18.1-5.8 34-29.6 34-10.5 0-15.5-2.4-18.3-5v22.9h-22.7l.1-83.3zm47.5 32.3c0-7.7-1.4-14.4-11.2-14.4-10.5 0-13.6 5.4-13.6 14.4s2.3 14 13.6 14c9.6-.1 11.2-6.4 11.2-14zm103.9-32.3l17.6-1.4 2.3 6.9c2.9-3.9 10.8-7.2 20.2-7.6V47c-15.1.1-17.4 4.6-17.4 13.6v31h-22.7V27.3zm46.4-2.1h11.7l3.7-13.3 17.5-3.8v17.1h14.3V47h-14.3v19c0 4.5.7 6.8 7.8 6.8h6.5v18.9c-3.4.2-7.2.3-11.5.3-19.1 0-25.4-6.1-25.4-22.6V47.1h-10.3V25.2zM0 26h12.4v-1.3C12.4 8.2 18.6 0 39.9 0c5.6 0 6.6.1 9.4.3v18.4H43c-6.5 0-7.9 1.6-7.9 5.8V26h14.2v19.2H35v46.4H12.4V45.2H0V26zm138.5 46c-3.8 2.2-5.7 2.7-13.2 2.7-8.9 0-12.3-3.2-13.4-8.5h43.6c.8-23.1-1.1-41.8-30.2-41.8S90 40.5 90 58.3c0 18.3 6.1 34.5 35.3 34.5 11.5 0 18.7-2.1 26.4-7.1L138.5 72zm-13.8-28.9c9.3 0 10 4.4 10.4 9.8h-23.3c.8-6.3 3.8-9.8 12.9-9.8zM200.5 91.7l-11.1-15.9-11.1 15.9h-25.4l23.8-33.9-21.6-30.5h25.6l8.8 12.4 8.8-12.4h25.9l-22 30.4 23.8 34zM305 58.6c0-21.8 10-34.1 35.6-34.1 25.7 0 35.5 12.4 35.5 34.1 0 21.8-9.9 34.2-35.5 34.2-25.6.1-35.6-12.4-35.6-34.2zm48.3.7c0-8.2-2.1-14.2-12.7-14.2-10.7 0-12.7 6-12.7 14.2 0 8.1 2.1 14.2 12.7 14.2 10.7 0 12.7-6 12.7-14.2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
