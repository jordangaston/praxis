const PEOPLE = [
  { n: 'Maya R.',  r: 'Staff · Meta',    c: 34 },
  { n: 'Dev S.',   r: 'Senior · Amazon', c: 28 },
  { n: 'Priya K.', r: 'Staff · Apple',  c: 22 },
  { n: 'Jonas L.', r: 'Senior · MS',    c: 19 },
];

export default function Authority() {
  return (
    <section style={{ background: '#ffffff', padding: '136px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>

        <h2
          style={{
            fontSize: 42,
            lineHeight: 1.06,
            fontWeight: 500,
            color: '#000000',
            margin: '0 auto 20px',
            fontFamily: '"DM Sans", Arial, sans-serif',
          }}
        >
          FAANG loops. On both sides of the table.
        </h2>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: '#6f7790',
            maxWidth: 640,
            margin: '0 auto 56px',
            fontFamily: '"DM Sans", Arial, sans-serif',
            fontWeight: 400,
          }}
        >
          Staff and Senior engineers from Amazon, Meta, Apple, Microsoft, and Roblox. We've graded the loops you're about to walk into. Now we're calibrating the AI that practices you for them.
        </p>

        {/* People grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginBottom: 16,
          }}
        >
          {PEOPLE.map((p, i) => (
            <div
              key={i}
              style={{
                background: '#f6f7f8',
                border: '1px solid #eeeef2',
                borderRadius: 4,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#183fd9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {p.n[0]}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#000000',
                    fontFamily: '"DM Sans", Arial, sans-serif',
                    marginBottom: 4,
                  }}
                >
                  {p.n}
                </div>
                <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: '"DM Sans", Arial, sans-serif' }}>
                  {p.r} · {p.c} loops
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote card */}
        <div
          style={{
            background: '#f6f7f8',
            border: '1px solid #eeeef2',
            borderRadius: 4,
            padding: 48,
            textAlign: 'left',
          }}
        >
          <div
            style={{
              fontSize: 36,
              lineHeight: 1,
              color: '#183fd9',
              marginBottom: 16,
              fontFamily: '"DM Sans", Arial, sans-serif',
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.5,
              color: '#000000',
              margin: '0 0 32px',
              fontFamily: '"DM Sans", Arial, sans-serif',
              maxWidth: 800,
            }}
          >
            We've sat in that chair. Walked in feeling ready. Left second-guessing everything. Live pressure yields only to practice — not more studying.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24, borderTop: '1px solid #eeeef2' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#183fd9',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#000000', fontFamily: '"DM Sans", Arial, sans-serif' }}>
                The Offered team
              </div>
              <div style={{ fontSize: 12.5, color: '#9ca3af', fontFamily: '"DM Sans", Arial, sans-serif' }}>
                Staff & Senior eng · FAANG loops
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
