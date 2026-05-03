const CARDS = [
  { n: '1yr',   t: "You're locked out for a year",   d: 'Every failed loop. One year. Your peers move on without you.',               tone: 'plain'  },
  { n: '$200k', t: 'is what that year costs',        d: 'In FAANG comp. Per failed loop. The math is brutal and unforgiving.',        tone: 'accent' },
  { n: '∞',     t: "studying won't fix it",          d: 'Live performance is a different muscle. It only yields to live practice.',   tone: 'plain'  },
];

export default function Problem() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ THE PROBLEM</div>
        <h2
          className="font-display font-bold m-0 mb-14"
          style={{
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0a0a0a',
            maxWidth: 900,
            textWrap: 'balance',
          }}
        >
          Loop day tests pressure tolerance as much as it tests skill.
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-[16px] p-8 flex flex-col"
              style={{
                background: card.tone === 'accent' ? '#2d2de0' : '#ffffff',
                border: card.tone === 'accent' ? 'none' : '1px solid #e5e7eb',
                minHeight: 260,
              }}
            >
              <div
                className="font-display font-bold"
                style={{
                  fontSize: 72,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'auto',
                  color: card.tone === 'accent' ? 'rgba(255,255,255,0.88)' : '#2d2de0',
                }}
              >
                {card.n}
              </div>
              <h3
                className="font-display font-semibold m-0 mt-5 mb-2"
                style={{
                  fontSize: 21,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: card.tone === 'accent' ? '#fff' : '#0a0a0a',
                }}
              >
                {card.t}
              </h3>
              <p
                className="text-[14px] leading-[1.6] m-0"
                style={{ color: card.tone === 'accent' ? 'rgba(255,255,255,0.72)' : '#4b5563' }}
              >
                {card.d}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-14"
          style={{ fontSize: 26, lineHeight: 1.4, maxWidth: 820, color: '#9ca3af', fontFamily: 'var(--font-display)' }}
        >
          Competent engineers deserve a fair shot. The gauntlet gives insiders one. We're giving it to everyone else.
        </p>
      </div>
    </section>
  );
}
