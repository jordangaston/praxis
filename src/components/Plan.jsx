const CARD_BG = 'rgba(255,255,255,0.65)';
const CARD_BORDER = '1px solid rgba(126,67,255,0.14)';
const INNER_BG = 'rgba(126,67,255,0.05)';
const INNER_BORDER = '1px solid rgba(126,67,255,0.12)';

function TargetVisual() {
  const rows = [
    { l: 'Type', v: 'System Design' },
    { l: 'Level', v: 'L5 / E5' },
    { l: 'Company', v: 'Meta' },
  ];
  return (
    <div
      className="rounded-[12px] p-4 font-mono"
      style={{ background: INNER_BG, border: INNER_BORDER, height: 124, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}
    >
      {rows.map(r => (
        <div key={r.l} className="flex items-center gap-2.5 text-[12px]">
          <span style={{ color: 'rgba(28,15,66,0.40)', width: 60 }}>{r.l}</span>
          <span
            className="px-2.5 py-1 rounded-[6px] font-medium"
            style={{ background: 'rgba(255,255,255,0.80)', border: INNER_BORDER, color: '#1C0F42' }}
          >
            {r.v}
          </span>
          <span className="ml-auto grad-text">✓</span>
        </div>
      ))}
    </div>
  );
}

function LoopVisual() {
  return (
    <div
      className="rounded-[12px] overflow-hidden font-mono"
      style={{ background: INNER_BG, border: INNER_BORDER, height: 124 }}
    >
      <div
        className="flex items-center gap-2.5 px-3.5 py-2.5"
        style={{ borderBottom: INNER_BORDER }}
      >
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ background: 'linear-gradient(135deg,#7E43FF,#FF66C1)' }}
        />
        <span className="text-[10.5px] font-semibold tracking-[0.5px]" style={{ color: '#1C0F42' }}>SESSION 27</span>
        <span className="ml-auto text-[10.5px]" style={{ color: 'rgba(28,15,66,0.38)' }}>32:14</span>
      </div>
      <div className="px-3.5 py-2.5 flex flex-col gap-1.5">
        <div
          className="text-[11px] px-2.5 py-1.5 rounded-[8px] self-start"
          style={{ background: 'rgba(255,255,255,0.80)', border: INNER_BORDER, color: '#1C0F42', maxWidth: '85%' }}
        >
          10M followers — fanout strategy?
        </div>
        <div
          className="text-[11px] px-2.5 py-1.5 rounded-[8px] font-medium self-end text-white"
          style={{ background: 'linear-gradient(118deg,#7E43FF,#FF66C1)', maxWidth: '85%' }}
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
      className="rounded-[12px] p-4 font-mono"
      style={{ background: INNER_BG, border: INNER_BORDER, height: 124 }}
    >
      <div className="flex items-end gap-1" style={{ height: 64 }}>
        {BARS.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-[2px]"
            style={{
              height: `${b * 20}%`,
              background: i === BARS.length - 1
                ? 'linear-gradient(180deg,#7E43FF,#FF66C1)'
                : 'rgba(126,67,255,0.15)',
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2.5 text-[10.5px]" style={{ color: 'rgba(28,15,66,0.40)' }}>
        <span>Session 1</span>
        <span className="font-semibold grad-text">Session 28 · ready</span>
      </div>
    </div>
  );
}

const STEPS = [
  { n: '01', t: 'Set your target', d: 'Interview type, level, company. We calibrate to the rubric the panel will actually use.', visual: TargetVisual },
  { n: '02', t: 'Talk it through', d: "Live voice sessions with an AI interviewer. Structured feedback. The gaps you can't hear yourself.", visual: LoopVisual },
  { n: '03', t: 'Walk in ready', d: 'Dozens of sessions and pattern recognition behind you. Loop day feels like Tuesday.', visual: ReadyVisual },
];

export default function Plan() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(126,67,255,0.10)', padding: '140px 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-14">
        <div className="eyebrow mb-6">★ The plan</div>
        <h2
          className="font-medium m-0 mb-[72px]"
          style={{ fontSize: 96, lineHeight: 0.94, letterSpacing: -3, textWrap: 'balance', color: '#1C0F42' }}
        >
          Three steps.<br />
          <span className="serif-it grad-text">One offer.</span>
        </h2>

        <div
          className="grid rounded-[20px] overflow-hidden"
          style={{ gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid rgba(126,67,255,0.14)', boxShadow: '0 4px 40px rgba(126,67,255,0.08)' }}
        >
          {STEPS.map((s, i) => {
            const Visual = s.visual;
            return (
              <div
                key={i}
                className="p-9"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(126,67,255,0.14)' : 'none',
                  background: CARD_BG,
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div
                  className="font-medium grad-text"
                  style={{ fontSize: 80, lineHeight: 1, marginBottom: 22, letterSpacing: -2.5 }}
                >
                  {s.n}
                </div>
                <Visual />
                <h3
                  className="font-medium"
                  style={{ fontSize: 28, margin: '24px 0 12px', letterSpacing: -0.6, color: '#1C0F42' }}
                >
                  {s.t}
                </h3>
                <p className="text-[14.5px] leading-[1.55] m-0" style={{ color: 'rgba(28,15,66,0.58)' }}>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
