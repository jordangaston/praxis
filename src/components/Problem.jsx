import { useState } from 'react';
import useInView from '../hooks/useInView';

function TradeoffWidget() {
  const [picked, setPicked] = useState(null);
  const opts = [
    { id: 0, label: 'Sharded SQL', tag: 'Strong consistency' },
    { id: 1, label: 'NoSQL + cache', tag: 'High throughput' },
    { id: 2, label: 'Event-driven', tag: 'Eventual consistency' },
  ];

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--color-ink-faint)', marginBottom: 'var(--space-2)', textAlign: 'left' }}>
        "Design a feed for 10M users."
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        {opts.map(o => (
          <button
            key={o.id}
            onClick={() => setPicked(o.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: picked === o.id ? '#f0f4ff' : 'var(--color-surface-alt)',
              border: picked === o.id ? '1px solid var(--color-brand)' : '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 150ms',
            }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-ink)' }}>
                {o.label}
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)' }}>
                {o.tag}
              </div>
            </div>
            {picked === o.id && (
              <span style={{ fontSize: 'var(--text-xs)', color: '#16a34a', fontWeight: 600, whiteSpace: 'nowrap' }}>
                ✓ Valid
              </span>
            )}
          </button>
        ))}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 10, fontSize: 'var(--text-xs)', color: '#16a34a', textAlign: 'center' }}>
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
    <div style={{ marginTop: 'var(--space-4)' }}>
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
                fontFamily: 'var(--font-sans)',
                background: 'var(--color-ink)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-xs)',
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
                background: i === sessions.length - 1 ? 'var(--color-brand)' : hovered === i ? 'var(--color-brand)' : 'var(--color-surface-dim)',
                borderRadius: '3px 3px 0 0',
                transition: 'background 150ms',
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)' }}>
        <span>Session 1</span>
        <span style={{ color: 'var(--color-brand)', fontWeight: 500 }}>Session 8 · 89/100</span>
      </div>
    </div>
  );
}

function HumanCostWidget({ sessions, setSessions }) {
  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 14 }}>
        <button
          onClick={() => setSessions(s => Math.max(1, s - 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >−</button>
        <span style={{ fontSize: 14, fontWeight: 500, minWidth: 80, textAlign: 'center', color: 'var(--color-ink)' }}>
          {sessions} sessions
        </span>
        <button
          onClick={() => setSessions(s => Math.min(20, s + 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 18, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >+</button>
      </div>
      <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 'var(--radius-sm)', padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#dc2626', lineHeight: 1 }}>
          ${(sessions * 150).toLocaleString()}
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)', marginTop: 4 }}>
          {sessions} × $150/hr with a human
        </div>
      </div>
    </div>
  );
}

function AICostWidget({ sessions }) {
  const savings = ((sessions * 150) - (sessions * 0.28)).toFixed(2);

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)' }}>
          Same {sessions} sessions ↓
        </span>
      </div>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-sm)', padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#16a34a', lineHeight: 1 }}>
          ${(sessions * 0.28).toFixed(2)}
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)', marginTop: 4 }}>
          {sessions} × $0.28/hr with Offered
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 'var(--text-xs)', color: '#16a34a', textAlign: 'center', fontWeight: 500 }}>
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
    Widget: () => <TradeoffWidget />,
  },
  {
    pre: 'Reps are the',
    highlight: 'only way',
    post: 'to improve',
    body: 'Nothing gets you comfortable with the format faster than arguing tradeoffs under pressure.',
    Widget: () => <RepsWidget />,
  },
  {
    pre: 'Human mocks cost',
    highlight: '$100–200/hr',
    post: '',
    body: 'They take days to schedule. Most engineers walk in with 1–2 reps.',
    Widget: ({ sessions, setSessions }) => <HumanCostWidget sessions={sessions} setSessions={setSessions} />,
  },
  {
    pre: 'AI mocks cost',
    highlight: '$0.28/hr',
    post: '',
    body: '100x cheaper. Unlimited reps. The same pressure.',
    Widget: ({ sessions }) => <AICostWidget sessions={sessions} />,
  },
];

export default function Problem() {
  const [sessions, setSessions] = useState(5);
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section">
      <div ref={ref} className="container">
        <h2 className={`section-heading anim-fade-up${visible ? ' is-visible' : ''}`}>
          Practice <span className="hl">system design</span> the way you're <span className="hl">interviewed</span>.
        </h2>

        <div className="problem-grid">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`problem-card anim-fade-up${visible ? ' is-visible' : ''}`}
              style={{ transitionDelay: visible ? `${80 + i * 80}ms` : '0ms' }}
            >
              <h3 className="problem-card-heading">
                {c.pre && <>{c.pre} </>}
                <span className="hl">{c.highlight}</span>
                {c.post && <> {c.post}</>}
              </h3>
              <p className="problem-card-body">{c.body}</p>
              <c.Widget sessions={sessions} setSessions={setSessions} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
