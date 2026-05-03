const CARDS = [
  { n: '1yr',   t: "You're locked out for a year",   d: 'Every failed loop. One year. Your peers move on without you.',                          tone: 'plain' },
  { n: '$200k', t: 'is what that year costs',        d: 'In FAANG comp. Per failed loop. The math is brutal and unforgiving.',                   tone: 'accent' },
  { n: '∞',     t: "studying won't fix it",          d: 'Live performance is a different muscle. It only yields to live practice.',              tone: 'plain' },
];

export default function Problem() {
  return (
    <div style={{ padding: '16px 20px' }}>
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ The problem</div>
        <h2
          className="font-display font-medium m-0 mb-16"
          style={{ fontSize: 'clamp(42px,5.5vw,72px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a', maxWidth: 960, textWrap: 'balance' }}
        >
          Loop day tests{' '}
          <span className="serif-it grad-text">pressure tolerance</span>
          {' '}as much as it tests skill.
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-[16px] p-8 flex flex-col"
              style={{
                background: card.tone === 'accent'
                  ? 'linear-gradient(145deg, #7e43ff 0%, #c44aff 55%, #ff66c1 100%)'
                  : '#fff',
                border: card.tone === 'accent' ? 'none' : '1px solid #e6e2e3',
                boxShadow: card.tone === 'accent'
                  ? '0 8px 32px rgba(126,67,255,0.30)'
                  : '0 1px 4px rgba(0,0,0,0.05)',
                minHeight: 260,
              }}
            >
              <div
                className={`font-display font-medium ${card.tone !== 'accent' ? 'grad-text' : ''}`}
                style={{ fontSize: 72, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 'auto', color: card.tone === 'accent' ? 'rgba(255,255,255,0.88)' : undefined }}
              >
                {card.n}
              </div>
              <h3
                className="font-display font-semibold m-0 mt-5 mb-2"
                style={{ fontSize: 21, letterSpacing: '-0.02em', lineHeight: 1.2, color: card.tone === 'accent' ? '#fff' : '#26114a' }}
              >
                {card.t}
              </h3>
              <p
                className="text-[14px] leading-[1.6] m-0"
                style={{ color: card.tone === 'accent' ? 'rgba(255,255,255,0.72)' : '#615e6e' }}
              >
                {card.d}
              </p>
            </div>
          ))}
        </div>

        <p
          className="serif-it mt-14"
          style={{ fontSize: 28, lineHeight: 1.4, maxWidth: 820, color: '#9491a1' }}
        >
          Competent engineers deserve a fair shot. The gauntlet gives insiders one. We're giving it to everyone else.
        </p>
      </section>
    </div>
  );
}
