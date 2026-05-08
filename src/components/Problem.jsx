import { useState } from 'react';

const HL = ({ children }) => (
  <span style={{ background: '#183fd9', color: '#ffffff', borderRadius: 6, padding: '1px 8px' }}>
    {children}
  </span>
);

function TradeoffWidget() {
  const [picked, setPicked] = useState(null);
  const opts = [
    { id: 0, label: 'Sharded SQL', tag: 'Strong consistency' },
    { id: 1, label: 'NoSQL + cache', tag: 'High throughput' },
    { id: 2, label: 'Event-driven', tag: 'Eventual consistency' },
  ];
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#9ca3af', marginBottom: 12, textAlign: 'left' }}>
        "Design a feed for 10M users."
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {opts.map(o => (
          <button
            key={o.id}
            onClick={() => setPicked(o.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: picked === o.id ? '#f0f4ff' : '#f6f7f8',
              border: picked === o.id ? '1px solid #183fd9' : '1px solid #eeeef2',
              borderRadius: 8,
              padding: '10px 14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 150ms',
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, fontFamily: '"DM Sans", Arial, sans-serif', color: '#000' }}>
                {o.label}
              </div>
              <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: '"DM Sans", Arial, sans-serif' }}>
                {o.tag}
              </div>
            </div>
            {picked === o.id && (
              <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600, fontFamily: '"DM Sans"', whiteSpace: 'nowrap' }}>
                ✓ Valid
              </span>
            )}
          </button>
        ))}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 10, fontSize: 12, color: '#16a34a', fontFamily: '"DM Sans", Arial, sans-serif', textAlign: 'center' }}>
          All three are valid — interviewers want your reasoning, not a single answer.
        </div>
      )}
    </div>
  );
}

function RepsWidget() {
  const [hovered, setHovered] = useState(null);
  const sessions = [38, 44, 51, 49, 60, 68, 76, 89];
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
        {sessions.map((score, i) => (
          <div
            key={i}
            style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', cursor: 'default' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === i && (
              <div style={{
                position: 'absolute',
                top: -24,
                fontSize: 10,
                fontFamily: '"DM Sans"',
                background: '#000',
                color: '#fff',
                borderRadius: 4,
                padding: '2px 6px',
                whiteSpace: 'nowrap',
                zIndex: 1,
              }}>
                {score}/100
              </div>
            )}
            <div
              style={{
                width: '100%',
                height: `${score}%`,
                background: i === sessions.length - 1 ? '#183fd9' : hovered === i ? '#183fd9' : '#e5e7eb',
                borderRadius: '3px 3px 0 0',
                transition: 'background 150ms',
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: '#9ca3af', fontFamily: '"DM Sans"' }}>
        <span>Session 1</span>
        <span style={{ color: '#183fd9', fontWeight: 500 }}>Session 8 · 89/100</span>
      </div>
    </div>
  );
}

function HumanCostWidget({ sessions, setSessions }) {
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 14 }}>
        <button
          onClick={() => setSessions(s => Math.max(1, s - 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #eeeef2', background: '#fff', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"DM Sans"' }}
        >−</button>
        <span style={{ fontSize: 14, fontWeight: 500, fontFamily: '"DM Sans"', minWidth: 80, textAlign: 'center', color: '#000' }}>
          {sessions} sessions
        </span>
        <button
          onClick={() => setSessions(s => Math.min(20, s + 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #eeeef2', background: '#fff', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"DM Sans"' }}
        >+</button>
      </div>
      <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, fontWeight: 600, color: '#dc2626', fontFamily: '"DM Sans"', lineHeight: 1 }}>
          ${(sessions * 150).toLocaleString()}
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: '"DM Sans"', marginTop: 4 }}>
          {sessions} × $150/hr with a human
        </div>
      </div>
    </div>
  );
}

function AICostWidget({ sessions }) {
  const savings = ((sessions * 150) - (sessions * 0.28)).toFixed(2);
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: '#9ca3af', fontFamily: '"DM Sans"' }}>
          Same {sessions} sessions ↓
        </span>
      </div>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, fontWeight: 600, color: '#16a34a', fontFamily: '"DM Sans"', lineHeight: 1 }}>
          ${(sessions * 0.28).toFixed(2)}
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: '"DM Sans"', marginTop: 4 }}>
          {sessions} × $0.28/hr with Offered
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 12, color: '#16a34a', fontFamily: '"DM Sans"', textAlign: 'center', fontWeight: 500 }}>
        You save ${savings}
      </div>
    </div>
  );
}

const CARDS = [
  {
    pre: 'System design has',
    highlight: 'no right answer',
    post: '',
    body: "Only better and worse tradeoffs. You can't cram it. You have to rep it.",
    Widget: ({ sessions, setSessions }) => <TradeoffWidget />,
  },
  {
    pre: 'Reps are the',
    highlight: 'only way',
    post: 'to improve',
    body: 'Nothing gets you comfortable with the format faster than arguing tradeoffs under pressure.',
    Widget: ({ sessions, setSessions }) => <RepsWidget />,
  },
  {
    pre: 'Human mocks cost',
    highlight: '$100–200/hr',
    post: '',
    body: 'And take days to schedule. Most engineers walk in with 1–2 reps.',
    Widget: ({ sessions, setSessions }) => <HumanCostWidget sessions={sessions} setSessions={setSessions} />,
  },
  {
    pre: 'AI mocks cost',
    highlight: '$0.28/hr',
    post: '',
    body: '100x cheaper. Unlimited reps. The same pressure.',
    Widget: ({ sessions, setSessions }) => <AICostWidget sessions={sessions} />,
  },
];

export default function Problem() {
  const [sessions, setSessions] = useState(5);

  return (
    <section style={{ background: '#f0ede8', padding: '120px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 48,
              lineHeight: 1.2,
              fontWeight: 400,
              color: '#000000',
              margin: 0,
              fontFamily: '"DM Sans", Arial, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Practice <HL>system design</HL> the way you're interviewed <HL>for real.</HL>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {CARDS.map((c, i) => (
            <div
              key={i}
              style={{ background: '#faf9f7', borderRadius: 16, padding: '40px 40px 36px', textAlign: 'center' }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: '#000000',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                  lineHeight: 1.3,
                  margin: '0 0 8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {c.pre && <>{c.pre} </>}
                <HL>{c.highlight}</HL>
                {c.post && <> {c.post}</>}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: '#6f7790',
                  margin: 0,
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {c.body}
              </p>
              <c.Widget sessions={sessions} setSessions={setSessions} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
