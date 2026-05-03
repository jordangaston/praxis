const LOGOS = ['AMAZON', 'META', 'APPLE', 'MICROSOFT', 'ROBLOX', 'STRIPE', 'AIRBNB', 'NETFLIX'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 160, paddingBottom: 0 }}>
      {/* Animated orbs — Wiza's signature effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} className="hero-orb" />
        ))}
      </div>

      {/* Hero content */}
      <div
        className="max-w-[1200px] mx-auto text-center flex flex-col items-center relative"
        style={{ padding: '0 28px 120px', zIndex: 1 }}
      >
        {/* NEW pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full text-[13px] font-medium mb-8"
          style={{
            padding: '5px 14px 5px 5px',
            background: 'rgba(255,255,255,0.80)',
            border: '1px solid #e6e2e3',
            color: '#26114a',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            fontFamily: 'var(--font-display)',
          }}
        >
          <span
            className="rounded-full text-[10.5px] font-bold tracking-[0.5px] px-2.5 py-[3px] text-white"
            style={{ background: '#7e43ff' }}
          >
            NEW
          </span>
          First mock interview free — no credit card.
        </div>

        {/* H1 */}
        <h1
          className="font-display m-0"
          style={{
            fontSize: 'clamp(52px, 7vw, 80px)',
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            fontWeight: 500,
            color: '#26114a',
            maxWidth: 840,
            textWrap: 'balance',
          }}
        >
          Nail the loop{' '}
          <span className="serif-it grad-text">before</span>
          <br />you live it.
        </h1>

        {/* Sub */}
        <p
          className="text-[18px] mt-6 mx-auto"
          style={{
            maxWidth: 520,
            lineHeight: 1.55,
            color: '#615e6e',
            fontFamily: 'var(--font-display)',
          }}
        >
          You fail FAANG interviews not because you can't do the job — but because you've never{' '}
          <em className="serif-it not-italic grad-text" style={{ fontSize: 19 }}>said it out loud</em>
          {' '}under real pressure. Run the loop fifty times in here first.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mt-8 justify-center flex-wrap">
          <button className="btn-primary" style={{ fontSize: 15, padding: '13px 22px' }}>
            Start free mock interview →
          </button>
          <button className="btn-secondary" style={{ fontSize: 15, padding: '13px 22px' }}>
            See a session ▸
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4 mt-7 justify-center">
          <div className="flex">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{
                  background: i % 2
                    ? 'linear-gradient(135deg, #7e43ff, #c44aff)'
                    : 'linear-gradient(135deg, #c44aff, #ff66c1)',
                  marginLeft: i === 1 ? 0 : -10,
                }}
              />
            ))}
          </div>
          <span
            className="text-[14px]"
            style={{ color: '#615e6e', fontFamily: 'var(--font-display)' }}
          >
            <strong style={{ color: '#26114a' }}>2,400+ engineers</strong> running loops right now.
          </span>
        </div>
      </div>

      {/* Logo strip */}
      <div
        style={{
          background: 'rgba(255,255,255,0.55)',
          borderTop: '1px solid #e6e2e3',
          borderBottom: '1px solid #e6e2e3',
          padding: '22px 28px',
        }}
      >
        <div
          className="max-w-[1200px] mx-auto flex items-center justify-between"
          style={{ gap: 16 }}
        >
          <span
            className="text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{ color: '#9491a1', fontFamily: 'var(--font-display)' }}
          >
            Hired at
          </span>
          <div className="flex items-center justify-around flex-1 gap-4 flex-wrap">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="font-display font-semibold text-[13px] tracking-[0.04em]"
                style={{ color: 'rgba(38,17,74,0.30)' }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
