export default function FinalCTA() {
  return (
    <section style={{ background: '#ffffff', padding: '100px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div
          className="rounded-2xl flex items-center justify-between gap-12"
          style={{
            background: '#f9fafb',
            border: '1px solid #e5e7eb',
            padding: '64px 72px',
          }}
        >
          {/* Left */}
          <div style={{ maxWidth: 540 }}>
            <h2
              className="font-display font-bold m-0"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: '#0a0a0a',
              }}
            >
              Secure your offer. Start practicing today.
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-5 flex-shrink-0">
            <p
              className="font-mono m-0"
              style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9ca3af',
                maxWidth: 220,
                lineHeight: 1.7,
              }}
            >
              First mock free — no credit card required. Cancel anytime.
            </p>
            <button
              className="btn-primary"
              style={{ fontSize: 13, padding: '12px 24px', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
