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
          Nail your next system design interview.
        </h1>

        {/* Bullet points */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '24px 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            textAlign: 'left',
          }}
        >
          {[
            'Unlimited mock interviews for $49/month.',
            'Customized for your target companies.',
            'Your first mock is free.',
          ].map(item => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 16,
                color: '#6f7790',
                fontFamily: '"DM Sans", Arial, sans-serif',
                fontWeight: 400,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#183fd9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 500,
                  color: '#ffffff',
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

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
