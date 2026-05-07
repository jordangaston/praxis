const FEATURES = ['Unlimited mock interviews', 'Real FAANG rubrics', 'All interview types', 'Structured feedback', 'Progress tracking'];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#ffffff', padding: '136px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>

        <h2
          style={{
            fontSize: 42,
            lineHeight: 1.06,
            fontWeight: 500,
            color: '#000000',
            margin: '0 0 56px',
            fontFamily: '"DM Sans", Arial, sans-serif',
          }}
        >
          One human session. Or unlimited AI ones.
        </h2>

        {/* Pricing card — centered, max-width 440px */}
        <div
          style={{
            maxWidth: 440,
            margin: '0 auto',
            background: '#f6f7f8',
            border: '1px solid #eeeef2',
            borderRadius: 4,
            padding: 40,
            position: 'relative',
            textAlign: 'left',
          }}
        >
          {/* FIRST MOCK FREE badge */}
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                display: 'inline-block',
                background: '#183fd9',
                color: '#ffffff',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: '"DM Sans", Arial, sans-serif',
                padding: '4px 12px',
                borderRadius: 4,
              }}
            >
              FIRST MOCK FREE
            </span>
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#6f7790',
              fontFamily: '"DM Sans", Arial, sans-serif',
              marginBottom: 12,
            }}
          >
            OFFERED UNLIMITED
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
            <span
              style={{
                fontSize: 72,
                lineHeight: 1,
                fontWeight: 500,
                color: '#000000',
                fontFamily: '"DM Sans", Arial, sans-serif',
              }}
            >
              $49
            </span>
            <span style={{ fontSize: 16, color: '#9ca3af', fontFamily: '"DM Sans", Arial, sans-serif' }}>/mo</span>
          </div>
          <div
            style={{
              fontSize: 13,
              marginBottom: 32,
              color: '#9ca3af',
              fontFamily: '"DM Sans", Arial, sans-serif',
            }}
          >
            vs. $200–400 per human peer mock
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map(f => (
              <li
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 15,
                  color: '#000000',
                  fontFamily: '"DM Sans", Arial, sans-serif',
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
                {f}
              </li>
            ))}
          </ul>

          <button
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            START THE CHALLENGE
          </button>
        </div>
      </div>
    </section>
  );
}
