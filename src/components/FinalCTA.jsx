export default function FinalCTA() {
  return (
    <section style={{ background: '#ffffff', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            background: '#f6f7f8',
            border: '1px solid #eeeef2',
            borderRadius: 4,
            padding: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
          }}
        >
          {/* Left — 60% */}
          <div style={{ flex: '0 0 60%' }}>
            <h2
              style={{
                fontSize: 42,
                lineHeight: 1.06,
                fontWeight: 500,
                color: '#000000',
                margin: 0,
                fontFamily: '"DM Sans", Arial, sans-serif',
              }}
            >
              Nail the loop. Open the offer.
            </h2>
          </div>

          {/* Right — 40% */}
          <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#9ca3af',
                maxWidth: 220,
                lineHeight: 1.7,
                margin: 0,
                fontFamily: 'monospace',
                fontWeight: 500,
              }}
            >
              First mock free — no credit card required. Cancel anytime.
            </p>
            <button className="btn-primary">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
