function TargetVisual() {
  const rows = [{ l: 'Type', v: 'System Design' }, { l: 'Level', v: 'L5 / E5' }, { l: 'Company', v: 'Meta' }];
  return (
    <div
      className="rounded-[10px] p-4 font-mono"
      style={{ background: '#f9fafb', border: '1px solid #e5e7eb', height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 7 }}
    >
      {rows.map(r => (
        <div key={r.l} className="flex items-center gap-2 text-[12px]">
          <span style={{ color: '#9ca3af', width: 56 }}>{r.l}</span>
          <span className="px-2.5 py-1 rounded-[6px] font-medium" style={{ background: '#fff', border: '1px solid #e5e7eb', color: '#0a0a0a' }}>{r.v}</span>
          <span className="ml-auto font-bold" style={{ color: '#2d2de0' }}>✓</span>
        </div>
      ))}
    </div>
  );
}

function LoopVisual() {
  return (
    <div className="rounded-[10px] overflow-hidden font-mono" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', height: 120 }}>
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ borderBottom: '1px solid #e5e7eb' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#2d2de0' }} />
        <span className="text-[10.5px] font-semibold tracking-[0.5px]" style={{ color: '#0a0a0a' }}>SESSION 27</span>
        <span className="ml-auto text-[10.5px]" style={{ color: '#9ca3af' }}>32:14</span>
      </div>
      <div className="px-3 py-2.5 flex flex-col gap-1.5">
        <div className="text-[11px] px-2.5 py-1.5 rounded-[7px] self-start" style={{ background: '#fff', border: '1px solid #e5e7eb', color: '#0a0a0a', maxWidth: '85%' }}>10M followers — fanout strategy?</div>
        <div className="text-[11px] px-2.5 py-1.5 rounded-[7px] font-semibold self-end text-white" style={{ background: '#2d2de0', maxWidth: '85%' }}>Hybrid push/pull, celebrity threshold...</div>
      </div>
    </div>
  );
}

const BARS = [2, 3, 3, 4, 4, 5, 4, 5, 5, 5];

function ReadyVisual() {
  return (
    <div className="rounded-[10px] p-4 font-mono" style={{ background: '#f9fafb', border: '1px solid #e5e7eb', height: 120 }}>
      <div className="flex items-end gap-1" style={{ height: 64 }}>
        {BARS.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-[2px]"
            style={{ height: `${b * 20}%`, background: i === BARS.length - 1 ? '#2d2de0' : '#e5e7eb' }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-[10.5px]" style={{ color: '#9ca3af' }}>
        <span>Session 1</span>
        <span className="font-semibold">Session 28 · ready</span>
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
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ THE PLAN</div>
        <h2
          className="font-display font-bold m-0 mb-14"
          style={{
            fontSize: 'clamp(42px, 5.5vw, 80px)',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: '#0a0a0a',
            textWrap: 'balance',
          }}
        >
          Three steps. One offer.
        </h2>

        {/* Step grid — one white card, divided by column rules */}
        <div
          className="grid rounded-[20px] overflow-hidden"
          style={{ gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid #e5e7eb' }}
        >
          {STEPS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '40px 36px',
                borderRight: i < 2 ? '1px solid #e5e7eb' : 'none',
                background: '#ffffff',
              }}
            >
              <div
                className="font-display font-bold mb-5"
                style={{ fontSize: 52, lineHeight: 1, letterSpacing: '-0.04em', color: '#2d2de0' }}
              >
                {s.n}
              </div>
              <s.Visual />
              <h3
                className="font-display font-semibold"
                style={{ fontSize: 20, letterSpacing: '-0.02em', color: '#0a0a0a', margin: '20px 0 8px' }}
              >
                {s.t}
              </h3>
              <p className="text-[14px] leading-[1.6] m-0" style={{ color: '#4b5563' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
