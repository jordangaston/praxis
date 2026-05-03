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
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* H1 */}
        <h1
          style={{
            fontSize: 64,
            lineHeight: 1.03,
            letterSpacing: '-0.02em',
            fontWeight: 500,
            maxWidth: 800,
            color: '#000000',
            margin: 0,
            fontFamily: '"DM Sans", Arial, sans-serif',
          }}
        >
          Nail the loop before you live it.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 18,
            marginTop: 24,
            marginBottom: 0,
            maxWidth: 480,
            lineHeight: 1.6,
            color: '#6f7790',
            fontFamily: '"DM Sans", Arial, sans-serif',
            fontWeight: 400,
          }}
        >
          You fail FAANG interviews not because you can't do the job — but because you've never said it out loud under real pressure. Run the loop fifty times in here first.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary">
            Start free mock interview →
          </button>
          <button className="btn-secondary">
            See a session
          </button>
        </div>

        {/* Social proof */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <span style={{ fontSize: 14, color: '#6f7790', fontFamily: '"DM Sans", Arial, sans-serif' }}>
            2,400+ engineers running loops right now.
          </span>
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
