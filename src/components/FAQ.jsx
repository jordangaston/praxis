const FAQS = [
  { q: 'Is the first mock really free?', a: 'Yes. Full session, evaluation, feedback report. No credit card.' },
  { q: 'How realistic is the AI?', a: "Voice-first. You speak, it responds in real time. Calibrated against transcripts and rubrics from interviewers at Amazon, Meta, Apple, Microsoft, Roblox. It pushes back, follows up, and grades like a panel." },
  { q: 'Which interview types?', a: 'Coding, System Design, Behavioral, Domain (ML, Infra, Mobile). L3/SDE I through L7/Principal.' },
  { q: 'How is this different from peer mocks?', a: "Peer mocks cost $200–400 and depend on the peer's calibration. We're unlimited, available at 2am the night before, graded against actual rubrics." },
];

export default function FAQ() {
  return (
    <section className="max-w-[1280px] mx-auto px-14" style={{ padding: '140px 56px' }}>
      <div className="eyebrow mb-6">★ Questions</div>
      <h2
        className="font-medium m-0 mb-14"
        style={{ fontSize: 76, lineHeight: 0.98, letterSpacing: -2.2, color: '#1C0F42' }}
      >
        You ask,{' '}
        <span className="serif-it grad-text">we answer.</span>
      </h2>

      <div>
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="group"
            style={{ borderTop: '1px solid rgba(126,67,255,0.14)', padding: '28px 0' }}
          >
            <summary
              className="flex justify-between items-center cursor-pointer list-none font-medium"
              style={{ fontSize: 28, letterSpacing: -0.7, color: '#1C0F42' }}
            >
              {f.q}
              <span
                className="faq-plus w-[42px] h-[42px] rounded-full grid place-items-center text-[22px] font-bold flex-shrink-0 text-white"
                style={{ background: 'linear-gradient(135deg,#7E43FF,#FF66C1)' }}
              >
                +
              </span>
            </summary>
            <p
              className="text-[17px] leading-[1.55] mt-4 m-0"
              style={{ maxWidth: 760, color: 'rgba(28,15,66,0.60)' }}
            >
              {f.a}
            </p>
          </details>
        ))}
        <div style={{ borderTop: '1px solid rgba(126,67,255,0.14)' }} />
      </div>
    </section>
  );
}
