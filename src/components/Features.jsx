const FEATS = [
  { h: 'Real FAANG rubrics', d: 'Each session is graded against the same rubrics a panel uses.' },
  { h: 'Whiteboard + Voice', d: 'Design systems on a whiteboard and explain your thinking out loud.' },
  { h: 'Structured feedback', d: 'After every session: where you nailed it, where you tanked, the exact drill that fixes the gap.' },
  { h: 'Calibrated to the level', d: "L3 talks like L3 evidence. L7 demands strategy. We don't grade everyone like a senior." },
];

export default function Features() {
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
          Designed to be realistic
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid #eeeef2',
            borderLeft: '1px solid #eeeef2',
          }}
        >
          {FEATS.map((f, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRight: '1px solid #eeeef2',
                borderBottom: '1px solid #eeeef2',
                padding: '40px 32px',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: '#183fd9',
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  marginBottom: 0,
                }}
              >
                0{i + 1}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#000000',
                  margin: '16px 0 12px',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {f.h}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: '#6f7790',
                  margin: 0,
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {f.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
