const TESTIMONIALS = [
  { q: 'Failed Meta twice. Ran 40 loops here. Walked in calm. Got the offer.',                        a: 'Aaron K.',  r: 'E5 · Meta'       },
  { q: 'The feedback actually changes you. After each session I knew what to drill.',                 a: 'Maya T.',   r: 'L5 · Google'     },
  { q: 'Two weeks of structured practice changed more than four months of leetcode grinding.',        a: 'Rohit S.',  r: 'SDE II · Amazon' },
];

export default function Testimonials() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ THEY MADE THE LEAP</div>
        <h2
          className="font-display font-bold m-0 mb-12"
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0a0a0a',
            textWrap: 'balance',
          }}
        >
          The number on the offer letter doesn't feel real.
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {TESTIMONIALS.map((x, i) => (
            <figure
              key={i}
              className="m-0 rounded-[16px] p-8 flex flex-col"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <div
                style={{
                  fontSize: 52,
                  lineHeight: 1,
                  marginBottom: 4,
                  color: '#2d2de0',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                }}
              >
                "
              </div>
              <blockquote
                className="font-display flex-1 m-0 mb-6"
                style={{ fontSize: 17, lineHeight: 1.6, color: '#0a0a0a' }}
              >
                {x.q}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #e5e7eb' }}>
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0"
                  style={{ background: '#2d2de0' }}
                />
                <div>
                  <div className="font-display font-semibold text-[13.5px]" style={{ color: '#0a0a0a' }}>{x.a}</div>
                  <div className="text-[12px]" style={{ color: '#9ca3af' }}>{x.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
