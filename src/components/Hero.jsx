const LOGOS = ['AMAZON', 'META', 'APPLE', 'MICROSOFT', 'ROBLOX', 'STRIPE', 'AIRBNB', 'NETFLIX'];

export default function Hero() {
  return (
    <section style={{ background: '#ffffff' }}>
      {/* Hero content */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '140px 28px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Left: text content */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          {/* Eyebrow */}
          <span
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#183fd9',
              background: 'transparent',
              border: '1px solid #183fd9',
              borderRadius: 4,
              padding: '4px 10px',
              fontFamily: '"DM Sans", Arial, sans-serif',
              marginBottom: 20,
            }}
          >
            The 7 day system design challenge
          </span>

          {/* H1 */}
          <h1
            style={{
              fontSize: 64,
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              color: '#000000',
              margin: 0,
              fontFamily: '"DM Sans", Arial, sans-serif',
            }}
          >
            Master system design in <span style={{ color: '#183fd9', textDecoration: 'underline' }}>7 days</span> or get your money back
          </h1>

          {/* Subheader */}
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: '#6f7790',
              fontFamily: '"DM Sans", Arial, sans-serif',
              fontWeight: 400,
              maxWidth: 600,
              margin: '24px auto 0',
            }}
          >
            Unlimited mock interviews on 100+ real FAANG system design questions. Pass our practice test in 7 days, or get a full refund.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary">
              START THE CHALLENGE
            </button>
            <button className="btn-secondary">
              See a session
            </button>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 32 }}>
            <span style={{ fontSize: 14, color: '#6f7790', fontFamily: '"DM Sans", Arial, sans-serif' }}>
              Plans starting at $99/yr
            </span>
          </div>
        </div>

      </div>

      {/* Logo strip */}
      <div
        style={{
          borderTop: '1px solid #eeeef2',
          padding: '24px 28px',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {LOGOS.map(l => (
            <span
              key={l}
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: '#9ca3af',
                textTransform: 'uppercase',
                fontFamily: '"DM Sans", Arial, sans-serif',
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
