const FAQS = [
  { q: 'Is the first mock really free?',         a: 'Yes. Full session, evaluation, feedback report. No credit card.' },
  { q: 'How realistic is the AI?',               a: "Voice-first. You speak, it responds in real time. Calibrated against transcripts and rubrics from interviewers at Amazon, Meta, Apple, Microsoft, Roblox. It pushes back, follows up, and grades like a panel." },
  { q: 'Which interview types?',                 a: 'Coding, System Design, Behavioral, Domain (ML, Infra, Mobile). L3/SDE I through L7/Principal.' },
  { q: 'How is this different from peer mocks?', a: "Peer mocks cost $200–400 and depend on the peer's calibration. We're unlimited, available at 2am the night before, graded against actual rubrics." },
];

export default function FAQ() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ QUESTIONS</div>
        <h2
          className="font-display font-bold m-0 mb-12"
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0a0a0a',
          }}
        >
          You ask, we answer.
        </h2>

        <div style={{ maxWidth: 760 }}>
          {FAQS.map((f, i) => (
            <details key={i} className="group" style={{ borderTop: '1px solid #e5e7eb', padding: '22px 0' }}>
              <summary
                className="font-display font-medium flex justify-between items-center cursor-pointer list-none"
                style={{ fontSize: 19, letterSpacing: '-0.02em', color: '#0a0a0a' }}
              >
                {f.q}
                <span
                  className="faq-plus w-8 h-8 rounded-full grid place-items-center text-[16px] font-bold flex-shrink-0 ml-6"
                  style={{ background: '#0a0a0a', color: '#ffffff' }}
                >
                  +
                </span>
              </summary>
              <p className="text-[16px] leading-[1.65] mt-4 m-0" style={{ color: '#4b5563' }}>{f.a}</p>
            </details>
          ))}
          <div style={{ borderTop: '1px solid #e5e7eb' }} />
        </div>
      </div>
    </section>
  );
}
