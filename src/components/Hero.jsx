const LOGOS = ['AMAZON', 'META', 'APPLE', 'MICROSOFT', 'ROBLOX', 'STRIPE', 'AIRBNB', 'NETFLIX'];

function LogoStrip() {
  return (
    <div
      className="mt-28 overflow-hidden py-7"
      style={{
        borderTop: '1px solid rgba(126,67,255,0.10)',
        borderBottom: '1px solid rgba(126,67,255,0.10)',
        background: 'rgba(255,255,255,0.40)',
      }}
    >
      <div className="flex gap-14 justify-around font-sans text-[15px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap">
        {LOGOS.map((l, i) => (
          <span key={i} className="flex items-center gap-14">
            <span style={{ color: 'rgba(28,15,66,0.32)' }}>{l}</span>
            {i < LOGOS.length - 1 && (
              <span className="grad-text text-[10px]">★</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 180, paddingBottom: 0 }}>
      <div className="max-w-[1280px] mx-auto px-14 relative text-center flex flex-col items-center" style={{ paddingBottom: 120 }}>

        {/* NEW pill */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full text-[13px] font-medium mb-8"
          style={{
            padding: '5px 16px 5px 5px',
            background: 'rgba(255,255,255,0.70)',
            border: '1px solid rgba(126,67,255,0.20)',
            color: '#1C0F42',
            boxShadow: '0 2px 12px rgba(126,67,255,0.08)',
          }}
        >
          <span
            className="rounded-full text-[10.5px] font-bold tracking-[0.5px] px-2.5 py-[3px] text-white"
            style={{ background: 'linear-gradient(118deg,#7E43FF,#FF66C1)' }}
          >
            NEW
          </span>
          First mock interview free — no credit card.
        </div>

        {/* H1 */}
        <h1
          className="font-medium m-0"
          style={{
            fontSize: 108,
            lineHeight: 0.94,
            letterSpacing: -4,
            textWrap: 'balance',
            maxWidth: 960,
            color: '#1C0F42',
          }}
        >
          Nail the loop{' '}
          <span className="serif-it grad-text">before</span>
          <br />you live it.
        </h1>

        {/* Sub */}
        <p
          className="text-[20px] leading-relaxed mt-8 mx-auto"
          style={{ maxWidth: 580, color: 'rgba(28,15,66,0.62)' }}
        >
          You don't fail FAANG interviews because you can't do the job. You fail because you've never{' '}
          <em className="serif-it not-italic grad-text" style={{ fontSize: 21 }}>said it out loud</em>
          {' '}under pressure. Run the voice loop fifty times in here. Walk into the real one calm.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mt-10 justify-center">
          <button
            className="rounded-full px-[28px] py-[16px] text-[15px] font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(118deg, #6B2FEF 0%, #A93AFF 50%, #FF55B8 100%)',
              color: '#fff',
              border: 'none',
              boxShadow: '0 4px 24px rgba(126,67,255,0.40), 0 1px 4px rgba(126,67,255,0.20)',
            }}
          >
            Start free mock interview →
          </button>
          <button
            className="rounded-full px-[22px] py-[16px] text-[15px] font-medium transition-all duration-150"
            style={{
              background: 'rgba(255,255,255,0.65)',
              color: '#1C0F42',
              border: '1px solid rgba(126,67,255,0.20)',
              boxShadow: '0 2px 8px rgba(126,67,255,0.08)',
            }}
          >
            See a session ▸
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4 mt-8 justify-center">
          <div className="flex">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2"
                style={{
                  background: i % 2
                    ? 'linear-gradient(135deg, #7E43FF, #C44AFF)'
                    : 'linear-gradient(135deg, #C44AFF, #FF66C1)',
                  marginLeft: i === 1 ? 0 : -10,
                  borderColor: '#FAFAFF',
                }}
              />
            ))}
          </div>
          <span className="text-[14px]" style={{ color: 'rgba(28,15,66,0.58)' }}>
            <strong style={{ color: '#1C0F42' }}>2,400+ engineers</strong> running loops right now.
          </span>
        </div>
      </div>

      <LogoStrip />
    </section>
  );
}
