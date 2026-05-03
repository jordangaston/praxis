const FEATURES = [
  'Unlimited mock interviews',
  'Real FAANG rubrics',
  'All interview types',
  'Structured feedback',
  'Progress tracking',
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-[1280px] mx-auto px-14" style={{ padding: '140px 56px' }}>
      <div className="eyebrow mb-6">★ Pricing</div>
      <div className="grid items-center gap-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <h2
          className="font-medium m-0"
          style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: -2.4, textWrap: 'balance', color: '#1C0F42' }}
        >
          One human session.<br />
          <span className="serif-it grad-text">Or unlimited AI ones.</span>
        </h2>

        <div
          className="rounded-[20px] p-11 relative"
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(126,67,255,0.18)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 12px 60px rgba(126,67,255,0.18)',
          }}
        >
          <div
            className="absolute rounded-full font-mono text-[11.5px] font-bold tracking-[0.6px] px-4 py-[7px] text-white"
            style={{
              top: -14, right: 28,
              background: 'linear-gradient(118deg,#7E43FF,#FF66C1)',
              boxShadow: '0 2px 12px rgba(126,67,255,0.40)',
            }}
          >
            FIRST MOCK FREE
          </div>

          <div className="font-mono text-[11.5px] font-semibold tracking-[1.2px] mb-3.5 grad-text">
            OFFERED UNLIMITED
          </div>

          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="font-medium" style={{ fontSize: 100, lineHeight: 1, letterSpacing: -3.5, color: '#1C0F42' }}>$49</span>
            <span className="text-[17px]" style={{ color: 'rgba(28,15,66,0.50)' }}>/mo</span>
          </div>

          <div className="text-[13.5px] mb-7" style={{ color: 'rgba(28,15,66,0.40)' }}>vs. $200–400 per human peer mock</div>

          <ul className="list-none p-0 m-0 mb-7 flex flex-col gap-3 text-[15px]">
            {FEATURES.map(f => (
              <li key={f} className="flex items-center gap-3" style={{ color: '#1C0F42' }}>
                <span
                  className="w-[22px] h-[22px] rounded-full grid place-items-center text-[12px] font-bold flex-shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg,#7E43FF,#FF66C1)' }}
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          <button
            className="block w-full text-center rounded-full py-4 px-7 font-semibold text-[15px] text-white transition-all duration-150 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(118deg, #6B2FEF 0%, #A93AFF 50%, #FF55B8 100%)',
              border: 'none',
              boxShadow: '0 4px 24px rgba(126,67,255,0.40)',
            }}
          >
            Start free mock →
          </button>
        </div>
      </div>
    </section>
  );
}
