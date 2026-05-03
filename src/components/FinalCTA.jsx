export default function FinalCTA() {
  return (
    <div style={{ padding: '8px 20px' }}>
      {/* Dark/purple CTA section — like Wiza's deep CTA block */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          borderRadius: '3.5rem',
          padding: '100px 72px',
          background: 'linear-gradient(145deg, #2a0365 0%, #3e0079 40%, #26114a 100%)',
          boxShadow: '0 8px 48px rgba(42,3,101,0.30)',
        }}
      >
        {/* Ambient glow inside */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: 800, height: 500,
            background: 'radial-gradient(ellipse, rgba(126,67,255,0.40) 0%, rgba(255,102,193,0.15) 45%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative" style={{ zIndex: 1 }}>
          <h2
            className="font-display font-medium m-0 mb-6 text-white"
            style={{ fontSize: 'clamp(52px,7vw,120px)', lineHeight: 0.95, letterSpacing: '-0.04em', textWrap: 'balance' }}
          >
            Nail the loop.<br />
            <span className="serif-it" style={{ color: '#c4aaff' }}>Open the offer.</span>
          </h2>
          <p className="text-[18px] mx-auto mb-10" style={{ maxWidth: 520, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)' }}>
            Run the hardest hiring gauntlet in the industry. Pass it. Your first mock is free.
          </p>
          <button
            className="rounded-[8px] font-display font-semibold text-[15px] transition-all duration-150 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: '#fff',
              color: '#26114a',
              border: 'none',
              padding: '14px 28px',
              boxShadow: '0 2px 16px rgba(255,255,255,0.20)',
            }}
          >
            Start free mock interview →
          </button>
        </div>
      </section>
    </div>
  );
}
