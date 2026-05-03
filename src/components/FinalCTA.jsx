export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{ padding: '160px 0', borderTop: '1px solid rgba(126,67,255,0.10)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: 1000, height: 600,
          background: 'radial-gradient(ellipse, rgba(126,67,255,0.18) 0%, rgba(255,102,193,0.10) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="max-w-[1280px] mx-auto px-14 relative">
        <h2
          className="font-medium m-0 mb-8"
          style={{ fontSize: 152, lineHeight: 0.9, letterSpacing: -5, textWrap: 'balance', color: '#1C0F42' }}
        >
          Nail the loop.<br />
          <span className="serif-it grad-text">Open the offer.</span>
        </h2>
        <p
          className="text-[21px] mx-auto mb-10"
          style={{ maxWidth: 600, lineHeight: 1.45, color: 'rgba(28,15,66,0.60)' }}
        >
          Run the hardest hiring gauntlet in the industry. Pass it. Your first mock is free.
        </p>
        <a
          href="#"
          className="inline-block rounded-full font-semibold text-[17px] text-white transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(118deg, #6B2FEF 0%, #A93AFF 50%, #FF55B8 100%)',
            padding: '20px 36px',
            boxShadow: '0 6px 32px rgba(126,67,255,0.40)',
          }}
        >
          Start free mock interview →
        </a>
      </div>
    </section>
  );
}
