const FEATURES = ['Unlimited mock interviews', 'Real FAANG rubrics', 'All interview types', 'Structured feedback', 'Progress tracking'];

export default function Pricing() {
  return (
    <div style={{ padding: '8px 20px' }} id="pricing">
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ Pricing</div>
        <div className="grid items-center gap-16" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <h2
            className="font-display font-medium m-0"
            style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a', textWrap: 'balance' }}
          >
            One human session.<br />
            <span className="serif-it grad-text">Or unlimited AI ones.</span>
          </h2>

          {/* Pricing card */}
          <div
            className="card rounded-[20px] p-10 relative"
            style={{ boxShadow: '0 4px 32px rgba(126,67,255,0.12), 0 0 0 1px rgba(0,0,0,0.06)' }}
          >
            <div
              className="absolute rounded-full font-mono text-[11px] font-bold tracking-[0.6px] px-4 py-1.5 text-white"
              style={{ top: -14, right: 24, background: '#7e43ff', boxShadow: '0 2px 10px rgba(126,67,255,0.40)' }}
            >
              FIRST MOCK FREE
            </div>

            <div className="font-mono font-semibold text-[11px] tracking-[1.2px] mb-3 grad-text">OFFERED UNLIMITED</div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-medium" style={{ fontSize: 88, lineHeight: 1, letterSpacing: '-0.04em', color: '#26114a' }}>$49</span>
              <span className="text-[16px]" style={{ color: '#9491a1' }}>/mo</span>
            </div>
            <div className="text-[13px] mb-8" style={{ color: '#9491a1' }}>vs. $200–400 per human peer mock</div>

            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-3 text-[15px]">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3" style={{ color: '#26114a' }}>
                  <span className="w-5 h-5 rounded-full grid place-items-center text-[11px] font-bold flex-shrink-0 text-white" style={{ background: '#7e43ff' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="btn-primary w-full justify-center"
              style={{ width: '100%', fontSize: 15, padding: '14px 24px', borderRadius: 10 }}
            >
              Start free mock →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
