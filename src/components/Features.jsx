const FEATS = [
  { h: 'Real FAANG rubrics', d: 'Each session graded against the same rubrics a panel uses. No vibes. No "you got this."' },
  { h: 'Whiteboard + voice', d: 'System design with a real diagramming canvas. Behavioral with voice. Coding with a working IDE.' },
  { h: 'Structured feedback', d: 'After every session: where you nailed it, where you tanked, the exact drill that fixes the gap.' },
  { h: 'Calibrated to the level', d: "L3 talks like L3 evidence. L7 demands strategy. We don't grade everyone like a senior." },
];

export default function Features() {
  return (
    <section className="max-w-[1280px] mx-auto px-14" style={{ padding: '140px 56px' }}>
      <div className="eyebrow mb-6">★ What's inside</div>
      <h2
        className="font-medium m-0 mb-16"
        style={{ fontSize: 76, lineHeight: 0.98, letterSpacing: -2.2, textWrap: 'balance', color: '#1C0F42' }}
      >
        Built like the{' '}
        <span className="serif-it grad-text">real loop.</span>
      </h2>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
        {FEATS.map((f, i) => (
          <div
            key={i}
            className="rounded-[20px] p-9"
            style={{
              background: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(126,67,255,0.14)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 2px 20px rgba(126,67,255,0.06)',
            }}
          >
            <div className="font-mono text-[22px] mb-4 tracking-[0.5px] grad-text font-semibold">0{i + 1}</div>
            <h3 className="font-medium m-0 mb-3" style={{ fontSize: 28, letterSpacing: -0.7, color: '#1C0F42' }}>{f.h}</h3>
            <p className="text-[16px] leading-[1.55] m-0" style={{ color: 'rgba(28,15,66,0.58)' }}>{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
