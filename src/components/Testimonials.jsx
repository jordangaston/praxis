const TESTIMONIALS = [
  { q: 'Failed Meta twice. Ran 40 loops here. Walked in calm. Got the offer.',                        a: 'Aaron K.',  r: 'E5 · Meta'       },
  { q: 'The feedback actually changes you. After each session I knew what to drill.',                 a: 'Maya T.',   r: 'L5 · Google'     },
  { q: 'Two weeks of structured practice changed more than four months of leetcode grinding.',        a: 'Rohit S.',  r: 'SDE II · Amazon' },
];

export default function Testimonials() {
  return (
    <section style={{ background: '#ffffff', padding: '136px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>

        <h2
          style={{
            fontSize: 42,
            lineHeight: 1.06,
            fontWeight: 500,
            color: '#000000',
            margin: '0 0 56px',
            fontFamily: '"DM Sans", Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          The number on the offer letter doesn't feel real.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {TESTIMONIALS.map((x, i) => (
            <figure
              key={i}
              style={{
                margin: 0,
                background: '#f6f7f8',
                border: '1px solid #eeeef2',
                borderRadius: 4,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  lineHeight: 1,
                  marginBottom: 12,
                  color: '#183fd9',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                  fontWeight: 500,
                }}
              >
                "
              </div>
              <blockquote
                style={{
                  flex: 1,
                  margin: '0 0 24px',
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: '#000000',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                {x.q}
              </blockquote>
              <figcaption
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingTop: 20,
                  borderTop: '1px solid #eeeef2',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#183fd9',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: '#000000',
                      fontFamily: '"DM Sans", Arial, sans-serif',
                    }}
                  >
                    {x.a}
                  </div>
                  <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: '"DM Sans", Arial, sans-serif' }}>
                    {x.r}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
