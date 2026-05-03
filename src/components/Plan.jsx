function TargetVisual() {
  const rows = [{ l: 'Type', v: 'System Design' }, { l: 'Level', v: 'L5 / E5' }, { l: 'Company', v: 'Meta' }];
  return (
    <div
      style={{
        background: '#f6f7f8',
        border: '1px solid #eeeef2',
        borderRadius: 4,
        height: 120,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 7,
        fontFamily: 'monospace',
      }}
    >
      {rows.map(r => (
        <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
          <span style={{ color: '#9ca3af', width: 56 }}>{r.l}</span>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 4,
              fontWeight: 500,
              background: '#ffffff',
              border: '1px solid #eeeef2',
              color: '#000000',
            }}
          >
            {r.v}
          </span>
          <span style={{ marginLeft: 'auto', color: '#183fd9', fontWeight: 500 }}>✓</span>
        </div>
      ))}
    </div>
  );
}

function LoopVisual() {
  return (
    <div
      style={{
        borderRadius: 4,
        overflow: 'hidden',
        fontFamily: 'monospace',
        background: '#f6f7f8',
        border: '1px solid #eeeef2',
        height: 120,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 12px',
          borderBottom: '1px solid #eeeef2',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#183fd9', display: 'inline-block' }} />
        <span style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: '0.5px', color: '#000000' }}>SESSION 27</span>
        <span style={{ marginLeft: 'auto', fontSize: 10.5, color: '#9ca3af' }}>32:14</span>
      </div>
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div
          style={{
            fontSize: 11,
            padding: '6px 10px',
            borderRadius: 4,
            alignSelf: 'flex-start',
            background: '#ffffff',
            border: '1px solid #eeeef2',
            color: '#000000',
            maxWidth: '85%',
          }}
        >
          10M followers — fanout strategy?
        </div>
        <div
          style={{
            fontSize: 11,
            padding: '6px 10px',
            borderRadius: 4,
            fontWeight: 500,
            alignSelf: 'flex-end',
            background: '#183fd9',
            color: '#ffffff',
            maxWidth: '85%',
          }}
        >
          Hybrid push/pull, celebrity threshold...
        </div>
      </div>
    </div>
  );
}

const BARS = [2, 3, 3, 4, 4, 5, 4, 5, 5, 5];

function ReadyVisual() {
  return (
    <div
      style={{
        borderRadius: 4,
        padding: 16,
        fontFamily: 'monospace',
        background: '#f6f7f8',
        border: '1px solid #eeeef2',
        height: 120,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 64 }}>
        {BARS.map((b, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              borderRadius: 2,
              height: `${b * 20}%`,
              background: i === BARS.length - 1 ? '#183fd9' : '#eeeef2',
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10.5, color: '#9ca3af' }}>
        <span>Session 1</span>
        <span style={{ fontWeight: 500 }}>Session 28 · ready</span>
      </div>
    </div>
  );
}

const STEPS = [
  { n: '01', t: 'Set your target', d: 'Interview type, level, company. We calibrate to the rubric the panel will actually use.', Visual: TargetVisual },
  { n: '02', t: 'Talk it through', d: "Live voice sessions with an AI interviewer. Structured feedback. The gaps you can't hear yourself.", Visual: LoopVisual },
  { n: '03', t: 'Walk in ready', d: 'Dozens of sessions and pattern recognition behind you. Loop day feels like Tuesday.', Visual: ReadyVisual },
];

export default function Plan() {
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
          Three steps. One offer.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {STEPS.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#f6f7f8',
                border: '1px solid #eeeef2',
                borderRadius: 4,
                padding: 32,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: '#183fd9',
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                {s.n}
              </div>
              <s.Visual />
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#000000',
                  margin: '20px 0 8px',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {s.t}
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
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
