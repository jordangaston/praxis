const FEATS = [
  { h: 'Real FAANG rubrics',      d: 'Each session graded against the same rubrics a panel uses. No vibes. No "you got this."' },
  { h: 'Whiteboard + voice',      d: 'System design with a real diagramming canvas. Behavioral with voice. Coding with a working IDE.' },
  { h: 'Structured feedback',     d: 'After every session: where you nailed it, where you tanked, the exact drill that fixes the gap.' },
  { h: 'Calibrated to the level', d: "L3 talks like L3 evidence. L7 demands strategy. We don't grade everyone like a senior." },
];

export default function Features() {
  return (
    <div style={{ padding: '8px 20px' }}>
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ What's inside</div>
        <h2
          className="font-display font-medium m-0 mb-14"
          style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a', textWrap: 'balance' }}
        >
          Built like the{' '}
          <span className="serif-it grad-text">real loop.</span>
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {FEATS.map((f, i) => (
            <div
              key={i}
              className="card rounded-[16px] p-9"
            >
              <div className="font-mono font-semibold text-[20px] mb-4 grad-text" style={{ letterSpacing: '0.02em' }}>0{i + 1}</div>
              <h3 className="font-display font-semibold m-0 mb-3" style={{ fontSize: 22, letterSpacing: '-0.02em', color: '#26114a' }}>{f.h}</h3>
              <p className="text-[15px] leading-[1.6] m-0" style={{ color: '#615e6e' }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
