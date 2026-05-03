const CARDS = [
  {
    n: '1yr',
    t: "You're locked out for a year",
    d: 'Every failed loop. One year. Your peers move on without you.',
    tone: 'dark',
  },
  {
    n: '$200k',
    t: 'is what that year costs',
    d: 'In FAANG comp. Per failed loop. The math is brutal and unforgiving.',
    tone: 'accent',
  },
  {
    n: '∞',
    t: "studying won't fix it",
    d: 'Live performance is a different muscle. It only yields to live practice.',
    tone: 'soft',
  },
];

export default function Problem() {
  return (
    <section
      className="max-w-[1280px] mx-auto px-14"
      style={{ padding: '140px 56px', borderTop: '1px solid rgba(126,67,255,0.10)' }}
    >
      <div className="eyebrow mb-6">★ The problem</div>
      <h2
        className="font-medium m-0 mb-[72px]"
        style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: -2.4, textWrap: 'balance', maxWidth: 1100, color: '#1C0F42' }}
      >
        Loop day tests{' '}
        <span className="serif-it grad-text">pressure tolerance</span>
        {' '}as much as it tests skill.
      </h2>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        {CARDS.map((card, i) => {
          const isAccent = card.tone === 'accent';
          return (
            <div
              key={i}
              className="rounded-[20px] p-8 flex flex-col"
              style={{
                background: isAccent
                  ? 'linear-gradient(135deg, #7E43FF 0%, #C44AFF 50%, #FF66C1 100%)'
                  : 'rgba(255,255,255,0.65)',
                border: isAccent ? 'none' : '1px solid rgba(126,67,255,0.14)',
                backdropFilter: 'blur(16px)',
                minHeight: 280,
                boxShadow: isAccent
                  ? '0 8px 40px rgba(126,67,255,0.35)'
                  : '0 2px 16px rgba(126,67,255,0.06)',
              }}
            >
              <div
                className={`font-medium ${isAccent ? '' : 'grad-text'}`}
                style={{
                  fontSize: 84, lineHeight: 1, letterSpacing: -3, marginBottom: 'auto',
                  ...(isAccent ? { color: 'rgba(255,255,255,0.90)' } : {}),
                }}
              >
                {card.n}
              </div>
              <h3
                className="font-semibold m-0 mt-6 mb-2.5"
                style={{
                  fontSize: 24, letterSpacing: -0.4, lineHeight: 1.15,
                  color: isAccent ? '#fff' : '#1C0F42',
                }}
              >
                {card.t}
              </h3>
              <p
                className="text-[14.5px] leading-[1.55] m-0"
                style={{ color: isAccent ? 'rgba(255,255,255,0.75)' : 'rgba(28,15,66,0.58)' }}
              >
                {card.d}
              </p>
            </div>
          );
        })}
      </div>

      <p
        className="serif-it"
        style={{ marginTop: 72, fontSize: 34, lineHeight: 1.3, maxWidth: 900, color: 'rgba(28,15,66,0.55)' }}
      >
        Competent engineers deserve a fair shot. The gauntlet gives insiders one. We're giving it to everyone else.
      </p>
    </section>
  );
}
