export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="card card--lg"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-6)',
          }}
        >
          <div style={{ flex: '0 0 60%' }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              lineHeight: 1.1,
              fontWeight: 500,
              color: 'var(--color-ink)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Nail the interview. Get the offer.
            </h2>
          </div>

          <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
            <p style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
              maxWidth: 220,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
            }}>
              First mock free — no credit card required. Cancel anytime.
            </p>
            <button className="btn btn-primary">
              Start the challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
