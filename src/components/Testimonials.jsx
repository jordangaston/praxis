const TESTIMONIALS = [
  { q: 'Failed Meta twice. Ran 40 loops here. Walked in calm. Got the offer.',                                a: 'Aaron K.',  r: 'E5 · Meta'       },
  { q: 'The feedback actually changes you. After each session I knew what to drill.',                         a: 'Maya T.',   r: 'L5 · Google'     },
  { q: 'Two weeks of structured practice changed more than four months of leetcode grinding.',                a: 'Rohit S.',  r: 'SDE II · Amazon' },
];

export default function Testimonials() {
  return (
    <div style={{ padding: '8px 20px' }}>
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ They made the leap</div>
        <h2
          className="font-display font-medium m-0 mb-14"
          style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a', textWrap: 'balance' }}
        >
          The number on the offer letter{' '}
          <span className="serif-it grad-text">doesn't feel real.</span>
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {TESTIMONIALS.map((x, i) => (
            <figure key={i} className="card m-0 rounded-[16px] p-8 flex flex-col">
              <div className="serif-it grad-text mb-1" style={{ fontSize: 52, lineHeight: 1 }}>"</div>
              <blockquote
                className="font-display flex-1 m-0 mb-6"
                style={{ fontSize: 18, lineHeight: 1.55, letterSpacing: '-0.01em', color: '#26114a' }}
              >
                {x.q}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #e6e2e3' }}>
                <div className="w-9 h-9 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#7e43ff,#ff66c1)' }} />
                <div>
                  <div className="font-display font-semibold text-[13.5px]" style={{ color: '#26114a' }}>{x.a}</div>
                  <div className="text-[12px]" style={{ color: '#9491a1' }}>{x.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
