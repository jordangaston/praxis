import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useInView from '../hooks/useInView';
import { BRAND_NAME } from '../config';

function TradeoffWidget({ visible }) {
  const [picked, setPicked] = useState(null);
  const listRef = useRef(null);
  const animated = useRef(false);
  const opts = [
    { id: 0, label: 'Sharded SQL', tag: 'Strong consistency' },
    { id: 1, label: 'NoSQL + cache', tag: 'High throughput' },
    { id: 2, label: 'Event-driven', tag: 'Eventual consistency' },
  ];

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;
    const btns = Array.from(listRef.current.children);
    gsap.from(btns, { y: 14, opacity: 0, duration: 0.4, stagger: 0.09, ease: 'power2.out', delay: 0.15 });
  }, [visible]);

  function select(id) {
    if (picked === id) return;
    setPicked(id);
    const btn = listRef.current.children[id];
    gsap.fromTo(btn, { scale: 0.96 }, { scale: 1, duration: 0.55, ease: 'elastic.out(1, 0.45)' });
  }

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--color-ink-faint)', marginBottom: 'var(--space-2)', textAlign: 'left' }}>
        "Design a feed for 10M users."
      </div>
      <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        {opts.map(o => (
          <button
            key={o.id}
            onClick={() => select(o.id)}
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
              transition: 'background 200ms, border-color 200ms',
            }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-ink)' }}>{o.label}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)' }}>{o.tag}</div>
            </div>
            {picked === o.id && <ValidBadge />}
          </button>
        ))}
      </div>
      {picked !== null && <AllValidNote />}
    </div>
  );
}

function ValidBadge() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current, { scale: 0.4, opacity: 0, duration: 0.4, ease: 'back.out(2)' });
  }, []);
  return (
    <span ref={ref} style={{ fontSize: 'var(--text-xs)', color: '#16a34a', fontWeight: 600, whiteSpace: 'nowrap' }}>
      ✓ Valid
    </span>
  );
}

function AllValidNote() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current, { y: 6, opacity: 0, duration: 0.35, ease: 'power2.out' });
  }, []);
  return (
    <div ref={ref} style={{ marginTop: 10, fontSize: 'var(--text-xs)', color: '#16a34a', textAlign: 'center' }}>
      All three are valid — interviewers want your reasoning, not a single answer.
    </div>
  );
}

function RepsWidget({ visible }) {
  const [hovered, setHovered] = useState(null);
  const sessions = [38, 44, 51, 49, 60, 68, 76, 89];
  const barsRef = useRef([]);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;
    const bars = barsRef.current.filter(Boolean);
    gsap.from(bars, {
      scaleY: 0,
      transformOrigin: 'bottom center',
      duration: 0.65,
      stagger: 0.07,
      ease: 'power3.out',
      delay: 0.15,
    });
  }, [visible]);

  function onEnter(i) {
    setHovered(i);
    const bar = barsRef.current[i];
    if (bar) gsap.to(bar, { scaleX: 1.08, duration: 0.2, ease: 'power1.out' });
  }

  function onLeave(i) {
    setHovered(null);
    const bar = barsRef.current[i];
    if (bar) gsap.to(bar, { scaleX: 1, duration: 0.2, ease: 'power1.out' });
  }

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
        {sessions.map((score, i) => (
          <div
            key={i}
            style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', cursor: 'default' }}
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={() => onLeave(i)}
          >
            {hovered === i && (
              <div style={{ position: 'absolute', top: -24, fontSize: 10, fontFamily: 'var(--font-sans)', background: 'var(--color-ink)', color: 'var(--color-white)', borderRadius: 'var(--radius-xs)', padding: '2px 6px', whiteSpace: 'nowrap', zIndex: 1 }}>
                {score}/100
              </div>
            )}
            <div
              ref={el => { barsRef.current[i] = el; }}
              style={{
                width: '100%',
                height: `${score}%`,
                background: i === sessions.length - 1
                  ? 'linear-gradient(180deg, #234ee4 0%, #0f2cb9 100%)'
                  : hovered === i
                    ? 'linear-gradient(180deg, #234ee4 0%, #0f2cb9 100%)'
                    : 'var(--color-surface-dim)',
                borderRadius: '3px 3px 0 0',
                transition: 'background 150ms',
                transformOrigin: 'bottom center',
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
  const costRef = useRef(null);
  const prevVal = useRef(sessions * 150);

  useEffect(() => {
    const to = sessions * 150;
    const obj = { val: prevVal.current };
    gsap.to(obj, {
      val: to,
      duration: 0.45,
      ease: 'power2.out',
      onUpdate() {
        if (costRef.current) costRef.current.textContent = '$' + Math.round(obj.val).toLocaleString();
      },
    });
    prevVal.current = to;
  }, [sessions]);

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 14 }}>
        <button
          onClick={() => setSessions(s => Math.max(1, s - 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >−</button>
        <span style={{ fontSize: 14, fontWeight: 500, minWidth: 80, textAlign: 'center', color: 'var(--color-ink)' }}>
          {sessions} sessions
        </span>
        <button
          onClick={() => setSessions(s => Math.min(20, s + 1))}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >+</button>
      </div>
      <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 'var(--radius-sm)', padding: '14px 16px', textAlign: 'center' }}>
        <div ref={costRef} style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#dc2626', lineHeight: 1 }}>
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
  const costRef = useRef(null);
  const savingsRef = useRef(null);
  const prevSessions = useRef(sessions);

  useEffect(() => {
    const obj = {
      cost: prevSessions.current * 0.28,
      savings: (prevSessions.current * 150) - (prevSessions.current * 0.28),
    };
    gsap.to(obj, {
      cost: sessions * 0.28,
      savings: (sessions * 150) - (sessions * 0.28),
      duration: 0.45,
      ease: 'power2.out',
      onUpdate() {
        if (costRef.current) costRef.current.textContent = '$' + obj.cost.toFixed(2);
        if (savingsRef.current) savingsRef.current.textContent = 'You save $' + obj.savings.toFixed(2);
      },
    });
    prevSessions.current = sessions;
  }, [sessions]);

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)' }}>Same {sessions} sessions ↓</span>
      </div>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-sm)', padding: '14px 16px', textAlign: 'center' }}>
        <div ref={costRef} style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#16a34a', lineHeight: 1 }}>
          ${(sessions * 0.28).toFixed(2)}
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-ink-faint)', marginTop: 4 }}>
          {sessions} × $0.28/hr with {BRAND_NAME}
        </div>
      </div>
      <div ref={savingsRef} style={{ marginTop: 10, fontSize: 'var(--text-xs)', color: '#16a34a', textAlign: 'center', fontWeight: 500 }}>
        You save ${((sessions * 150) - (sessions * 0.28)).toFixed(2)}
      </div>
    </div>
  );
}

const CARDS = [
  {
    pre: `${BRAND_NAME}`,
    highlight: 'interviews',
    post: 'you',
    body: "Only better and worse tradeoffs. You can't cram it. You have to rep it.",
    Widget: ({ visible }) => <TradeoffWidget visible={visible} />,
  },
  {
    pre: 'Get reps on',
    highlight: 'real',
    post: 'FAANG questions',
    body: 'Nothing gets you comfortable with the format faster than arguing tradeoffs under pressure.',
    Widget: ({ visible }) => <RepsWidget visible={visible} />,
  },
  {
    pre: `${BRAND_NAME} knows your`,
    highlight: 'goals',
    post: '',
    body: 'They take days to schedule. Most engineers walk in with 1–2 reps.',
    Widget: ({ sessions, setSessions }) => <HumanCostWidget sessions={sessions} setSessions={setSessions} />,
  },
  {
    pre: 'Walk in',
    highlight: 'confident',
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
          Offered simulates <span className="hl">real interviews.</span>
        </h2>
        <p className={`section-subheading anim-fade-up${visible ? ' is-visible' : ''}`} style={{ transitionDelay: visible ? '80ms' : '0ms' }}>
          Offered uses our database of 100+ FAANG questions and advnaced AI to simulate real system design interviews.
        </p>

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
              <c.Widget visible={visible} sessions={sessions} setSessions={setSessions} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
