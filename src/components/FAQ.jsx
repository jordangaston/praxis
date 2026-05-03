const FAQS = [
  { q: 'Is the first mock really free?',          a: 'Yes. Full session, evaluation, feedback report. No credit card.' },
  { q: 'How realistic is the AI?',                a: "Voice-first. You speak, it responds in real time. Calibrated against transcripts and rubrics from interviewers at Amazon, Meta, Apple, Microsoft, Roblox. It pushes back, follows up, and grades like a panel." },
  { q: 'Which interview types?',                  a: 'Coding, System Design, Behavioral, Domain (ML, Infra, Mobile). L3/SDE I through L7/Principal.' },
  { q: 'How is this different from peer mocks?',  a: "Peer mocks cost $200–400 and depend on the peer's calibration. We're unlimited, available at 2am the night before, graded against actual rubrics." },
];

export default function FAQ() {
  return (
    <div style={{ padding: '8px 20px' }}>
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ Questions</div>
        <h2
          className="font-display font-medium m-0 mb-12"
          style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a' }}
        >
          You ask,{' '}
          <span className="serif-it grad-text">we answer.</span>
        </h2>

        <div style={{ maxWidth: 800 }}>
          {FAQS.map((f, i) => (
            <details key={i} className="group" style={{ borderTop: '1px solid #e6e2e3', padding: '24px 0' }}>
              <summary
                className="font-display font-medium flex justify-between items-center cursor-pointer list-none"
                style={{ fontSize: 20, letterSpacing: '-0.02em', color: '#26114a' }}
              >
                {f.q}
                <span
                  className="faq-plus w-9 h-9 rounded-full grid place-items-center text-[18px] font-bold flex-shrink-0 text-white ml-4"
                  style={{ background: '#7e43ff' }}
                >
                  +
                </span>
              </summary>
              <p className="text-[16px] leading-[1.65] mt-4 m-0" style={{ color: '#615e6e' }}>{f.a}</p>
            </details>
          ))}
          <div style={{ borderTop: '1px solid #e6e2e3' }} />
        </div>
      </section>
    </div>
  );
}
