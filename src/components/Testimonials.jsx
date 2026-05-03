const TESTIMONIALS = [
  { q: 'Failed Meta twice. Ran 40 loops here. Walked in calm. Got the offer.', a: 'Aaron K.', r: 'E5 · Meta' },
  { q: 'The feedback actually changes you. After each session I knew what to drill.', a: 'Maya T.', r: 'L5 · Google' },
  { q: 'Two weeks of structured practice changed more than four months of leetcode grinding.', a: 'Rohit S.', r: 'SDE II · Amazon' },
];

export default function Testimonials() {
  return (
    <section
      style={{ borderTop: '1px solid rgba(126,67,255,0.10)', padding: '140px 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-14">
        <div className="eyebrow mb-6">★ They made the leap</div>
        <h2
          className="font-medium m-0 mb-16"
          style={{ fontSize: 80, lineHeight: 0.98, letterSpacing: -2.4, textWrap: 'balance', color: '#1C0F42' }}
        >
          The number on the offer letter{' '}
          <span className="serif-it grad-text">doesn't feel real.</span>
        </h2>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {TESTIMONIALS.map((x, i) => (
            <figure
              key={i}
              className="m-0 rounded-[20px] p-8 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(126,67,255,0.14)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 2px 20px rgba(126,67,255,0.06)',
              }}
            >
              <div className="serif-it grad-text leading-none mb-[-10px]" style={{ fontSize: 60 }}>"</div>
              <blockquote
                className="flex-1 m-0 mb-7 font-medium"
                style={{ fontSize: 20, lineHeight: 1.4, letterSpacing: -0.3, color: '#1C0F42' }}
              >
                {x.q}
              </blockquote>
              <figcaption
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(126,67,255,0.12)' }}
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7E43FF, #FF66C1)' }}
                />
                <div>
                  <div className="text-[14px] font-semibold" style={{ color: '#1C0F42' }}>{x.a}</div>
                  <div className="text-[12.5px]" style={{ color: 'rgba(28,15,66,0.45)' }}>{x.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
