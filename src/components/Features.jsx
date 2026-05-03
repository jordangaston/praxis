const FEATS = [
  { h: 'Real FAANG rubrics',      d: 'Each session graded against the same rubrics a panel uses. No vibes. No "you got this."' },
  { h: 'Whiteboard + voice',      d: 'System design with a real diagramming canvas. Behavioral with voice. Coding with a working IDE.' },
  { h: 'Structured feedback',     d: 'After every session: where you nailed it, where you tanked, the exact drill that fixes the gap.' },
  { h: 'Calibrated to the level', d: "L3 talks like L3 evidence. L7 demands strategy. We don't grade everyone like a senior." },
];

export default function Features() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ WHAT'S INSIDE</div>
        <h2
          className="font-display font-bold m-0 mb-12"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0a0a0a',
            textWrap: 'balance',
          }}
        >
          Built like the real loop.
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {FEATS.map((f, i) => (
            <div
              key={i}
              className="rounded-[16px] p-9"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <div
                className="font-mono font-semibold text-[20px] mb-4"
                style={{ color: '#2d2de0' }}
              >
                0{i + 1}
              </div>
              <h3
                className="font-display font-semibold m-0 mb-3"
                style={{ fontSize: 22, letterSpacing: '-0.02em', color: '#0a0a0a' }}
              >
                {f.h}
              </h3>
              <p className="text-[15px] leading-[1.6] m-0" style={{ color: '#4b5563' }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
