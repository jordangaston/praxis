import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useInView from '../hooks/useInView';
import { BRAND_NAME } from '../config';

/* ── Card 1: AI interview chat ── */
function ChatWidget({ visible }) {
  const dotRefs = useRef([]);
  const bubbleRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;

    gsap.from(bubbleRef.current, { y: 10, opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 });

    // Pulse the typing dots
    gsap.to(dotRefs.current, {
      y: -4,
      duration: 0.4,
      ease: 'power1.inOut',
      stagger: 0.12,
      repeat: -1,
      yoyo: true,
    });
  }, [visible]);

  return (
    <div style={{ marginTop: 'var(--space-4)', padding: '0 var(--space-1)' }}>
      {/* AI message */}
      <div ref={bubbleRef} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{
          width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(180deg, #234ee4 0%, #0f2cb9 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
            <polyline points="8,14.5 12,18.5 20,10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{
          background: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          borderRadius: '4px 14px 14px 14px',
          padding: '10px 14px',
          fontSize: 13,
          color: 'var(--color-ink)',
          lineHeight: 1.55,
          boxShadow: '0 1px 4px rgba(15,17,26,0.06)',
        }}>
          Design a URL shortener for 1B requests/day. Walk me through your approach — start with the data model.
        </div>
      </div>

      {/* User typing indicator */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          background: 'var(--color-surface-dim)',
          border: '1px solid var(--color-border)',
          borderRadius: '14px 4px 14px 14px',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}>
          {[0,1,2].map(i => (
            <span
              key={i}
              ref={el => { dotRefs.current[i] = el; }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-ink-faint)', display: 'block' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Card 2: Fanned question cards ── */
const QUESTIONS = [
  { q: 'Design a rate limiter', company: 'Google',  level: 'L5', color: '#4285f4' },
  { q: 'Design Twitter\'s feed', company: 'Meta',    level: 'E5', color: '#1877f2' },
  { q: 'Design a URL shortener', company: 'Amazon', level: 'SDE II', color: '#ff9900' },
];

function QuestionStackWidget({ visible }) {
  const cardRefs = useRef([]);
  const animated = useRef(false);

  // Final resting rotations/positions for each card (fanned)
  const fan = [
    { rotate: -6, x: -18, y: 8 },
    { rotate: 0,  x: 0,   y: 0 },
    { rotate: 6,  x: 18,  y: 8 },
  ];

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;

    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        rotate: 0, x: 0, y: 20, opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.4)',
        delay: 0.1 + i * 0.08,
      });
    });
  }, [visible]);

  return (
    <div style={{ marginTop: 'var(--space-4)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140, position: 'relative' }}>
      {QUESTIONS.map((q, i) => (
        <div
          key={i}
          ref={el => { cardRefs.current[i] = el; }}
          style={{
            position: 'absolute',
            width: 180,
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            padding: '14px 16px',
            boxShadow: '0 4px 16px rgba(15,17,26,0.1)',
            transform: `rotate(${fan[i].rotate}deg) translate(${fan[i].x}px, ${fan[i].y}px)`,
            zIndex: i === 1 ? 3 : i === 0 ? 2 : 1,
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 10, fontWeight: 600, color: q.color,
            background: q.color + '15',
            borderRadius: 20, padding: '2px 8px',
            marginBottom: 8,
          }}>
            <span>{q.company}</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>{q.level}</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.4 }}>
            {q.q}
          </div>
          {/* Skeleton lines */}
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[80, 60, 70].map((w, j) => (
              <div key={j} style={{ height: 5, width: `${w}%`, background: 'var(--color-border)', borderRadius: 99 }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Card 3: Goal/target selector ── */
const COMPANIES = ['Meta', 'Google', 'Amazon', 'Apple', 'Microsoft'];
const LEVELS    = ['L3', 'L4', 'L5', 'L6', 'L7'];

function GoalWidget({ visible }) {
  const [company, setCompany] = useState('Meta');
  const [level, setLevel]     = useState('L5');
  const rowRefs = useRef([]);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;
    gsap.from(rowRefs.current, { y: 10, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.1 });
  }, [visible]);

  const pill = (label, active, onClick) => (
    <button
      onClick={onClick}
      style={{
        padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: 'pointer',
        border: active ? '1px solid var(--color-brand)' : '1px solid var(--color-border)',
        background: active ? 'linear-gradient(180deg,#234ee4 0%,#0f2cb9 100%)' : 'var(--color-surface)',
        color: active ? 'white' : 'var(--color-ink-dim)',
        transition: 'all 150ms',
      }}
    >{label}</button>
  );

  return (
    <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div ref={el => { rowRefs.current[0] = el; }}>
        <div style={{ fontSize: 11, color: 'var(--color-ink-faint)', marginBottom: 8, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Target company</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {COMPANIES.map(c => pill(c, company === c, () => setCompany(c)))}
        </div>
      </div>
      <div ref={el => { rowRefs.current[1] = el; }}>
        <div style={{ fontSize: 11, color: 'var(--color-ink-faint)', marginBottom: 8, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Target level</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {LEVELS.map(l => pill(l, level === l, () => setLevel(l)))}
        </div>
      </div>
      <div ref={el => { rowRefs.current[2] = el; }}
        style={{ background: '#eef1ff', border: '1px solid #c7d2fe', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-brand)', flexShrink: 0 }} />
        <span style={{ fontSize: 13, color: 'var(--color-brand)', fontWeight: 500 }}>
          Calibrated for {company} {level} system design
        </span>
      </div>
    </div>
  );
}

/* ── Card 4: Rubric scorecard ── */
const RUBRIC = [
  { label: 'Architecture',   score: 87 },
  { label: 'Communication',  score: 91 },
  { label: 'Tradeoffs',      score: 84 },
  { label: 'Scalability',    score: 89 },
];

function ScorecardWidget({ visible }) {
  const barRefs = useRef([]);
  const animated = useRef(false);

  useEffect(() => {
    if (!visible || animated.current) return;
    animated.current = true;
    barRefs.current.forEach((bar, i) => {
      gsap.from(bar, { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease: 'power2.out', delay: 0.15 + i * 0.1 });
    });
  }, [visible]);

  return (
    <div style={{ marginTop: 'var(--space-4)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--color-ink-faint)', marginBottom: 2 }}>Session 8 feedback</div>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-ink)' }}>
            89<span style={{ fontSize: 12, color: 'var(--color-ink-faint)', fontWeight: 400 }}>/100</span>
          </div>
        </div>
        <div style={{ fontSize: 11, background: '#f0fdf4', color: '#16a34a', fontWeight: 600, border: '1px solid #bbf7d0', borderRadius: 20, padding: '3px 10px' }}>
          ↑ Pass
        </div>
      </div>

      {/* Score rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {RUBRIC.map((r, i) => (
          <div key={r.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
              <span style={{ color: 'var(--color-ink-dim)' }}>{r.label}</span>
              <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{r.score}</span>
            </div>
            <div style={{ height: 6, background: 'var(--color-border)', borderRadius: 99, overflow: 'hidden' }}>
              <div
                ref={el => { barRefs.current[i] = el; }}
                style={{
                  height: '100%',
                  width: `${r.score}%`,
                  background: 'linear-gradient(90deg, #234ee4 0%, #0f2cb9 100%)',
                  borderRadius: 99,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const CARDS = [
  {
    pre: `${BRAND_NAME}`,
    highlight: 'interviews',
    post: 'you',
    body: "Voice-first AI that asks follow-up questions, pushes back on weak answers, and grades like a real panel.",
    Widget: ({ visible }) => <ChatWidget visible={visible} />,
  },
  {
    pre: 'Get reps on',
    highlight: 'real',
    post: 'FAANG questions',
    body: 'Questions pulled from actual interview loops at Google, Meta, Amazon, Apple, and Microsoft.',
    Widget: ({ visible }) => <QuestionStackWidget visible={visible} />,
  },
  {
    pre: `${BRAND_NAME} knows your`,
    highlight: 'goals',
    post: '',
    body: 'Set your target company and level. Every session is calibrated to that bar — not a generic standard.',
    Widget: ({ visible }) => <GoalWidget visible={visible} />,
  },
  {
    pre: 'Walk in',
    highlight: 'confident',
    post: '',
    body: 'Every session ends with a rubric-based scorecard. You see exactly where you lost points.',
    Widget: ({ visible }) => <ScorecardWidget visible={visible} />,
  },
];

export default function Problem() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section">
      <div ref={ref} className="container">
        <h2 className={`section-heading anim-fade-up${visible ? ' is-visible' : ''}`}>
          Offered simulates <span className="hl">real interviews.</span>
        </h2>
        <p className={`section-subheading anim-fade-up${visible ? ' is-visible' : ''}`} style={{ transitionDelay: visible ? '80ms' : '0ms' }}>
          Offered uses our database of 100+ FAANG questions and advanced AI to simulate real system design interviews.
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
              <c.Widget visible={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
