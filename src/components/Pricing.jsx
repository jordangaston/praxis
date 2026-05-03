const FEATURES = ['Unlimited mock interviews', 'Real FAANG rubrics', 'All interview types', 'Structured feedback', 'Progress tracking'];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ PRICING</div>
        <div className="grid items-center gap-16" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <h2
            className="font-display font-bold m-0"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#0a0a0a',
              textWrap: 'balance',
            }}
          >
            One human session. Or unlimited AI ones.
          </h2>

          {/* Pricing card */}
          <div
            className="rounded-[20px] p-10 relative"
            style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
          >
            <div
              className="absolute rounded-full font-mono text-[11px] font-bold tracking-[0.6px] px-4 py-1.5 text-white"
              style={{ top: -14, right: 24, background: '#2d2de0' }}
            >
              FIRST MOCK FREE
            </div>

            <div
              className="font-mono font-semibold text-[11px] tracking-[1.2px] mb-3"
              style={{ color: '#2d2de0', textTransform: 'uppercase' }}
            >
              OFFERED UNLIMITED
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span
                className="font-display font-bold"
                style={{ fontSize: 84, lineHeight: 1, letterSpacing: '-0.04em', color: '#0a0a0a' }}
              >
                $49
              </span>
              <span className="text-[16px]" style={{ color: '#9ca3af' }}>/mo</span>
            </div>
            <div className="text-[13px] mb-8" style={{ color: '#9ca3af' }}>vs. $200–400 per human peer mock</div>

            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-3 text-[15px]">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3" style={{ color: '#0a0a0a' }}>
                  <span
                    className="w-5 h-5 rounded-full grid place-items-center text-[11px] font-bold flex-shrink-0 text-white"
                    style={{ background: '#2d2de0' }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px 24px', borderRadius: 6 }}
            >
              Start free mock →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
