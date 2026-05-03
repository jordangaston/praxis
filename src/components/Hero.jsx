const LOGOS = ['AMAZON', 'META', 'APPLE', 'MICROSOFT', 'ROBLOX', 'STRIPE', 'AIRBNB', 'NETFLIX'];

export default function Hero() {
  return (
    <section style={{ background: '#ffffff', paddingTop: 0, paddingBottom: 0 }}>
      {/* Hero content */}
      <div
        className="max-w-[1200px] mx-auto text-center flex flex-col items-center"
        style={{ padding: '120px 28px 100px' }}
      >
        {/* H1 */}
        <h1
          className="font-display m-0"
          style={{
            fontSize: 'clamp(64px, 8vw, 108px)',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            fontWeight: 700,
            maxWidth: 900,
            color: '#0a0a0a',
            textWrap: 'balance',
          }}
        >
          Nail the loop before you live it.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 18,
            marginTop: 28,
            maxWidth: 500,
            lineHeight: 1.55,
            color: '#4b5563',
            fontFamily: 'var(--font-display)',
          }}
        >
          You fail FAANG interviews not because you can't do the job — but because you've never said it out loud under real pressure. Run the loop fifty times in here first.
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
                  background: '#2d2de0',
                  marginLeft: i === 1 ? 0 : -10,
                }}
              />
            ))}
          </div>
          <span
            style={{ fontSize: 14, color: '#4b5563', fontFamily: 'var(--font-display)' }}
          >
            <strong style={{ color: '#0a0a0a' }}>2,400+ engineers</strong> running loops right now.
          </span>
        </div>
      </div>

      {/* Logo strip */}
      <div
        style={{
          background: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          padding: '22px 28px',
        }}
      >
        <div
          className="max-w-[1200px] mx-auto flex items-center justify-between"
          style={{ gap: 16 }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
              color: '#9ca3af',
              fontFamily: 'var(--font-display)',
            }}
          >
            HIRED AT
          </span>
          <div className="flex items-center justify-around flex-1 gap-4 flex-wrap">
            {LOGOS.map(l => (
              <span
                key={l}
                className="font-display font-semibold"
                style={{ fontSize: 13, letterSpacing: '0.06em', color: '#9ca3af', textTransform: 'uppercase' }}
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
