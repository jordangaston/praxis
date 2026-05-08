import useInView from '../hooks/useInView';

const FAQS = [
  {
    q: 'Is the first mock really free?',
    a: 'Yes. Full session, evaluation, feedback report. No credit card.',
  },
  {
    q: 'How realistic is the AI?',
    a: 'Voice-first. You speak, it responds in real time. Calibrated against transcripts and rubrics from interviewers at Amazon, Meta, Apple, Microsoft, Roblox. It pushes back, follows up, and grades like a panel.',
  },
  {
    q: 'Which interview types?',
    a: 'Coding, System Design, Behavioral, Domain (ML, Infra, Mobile). L3/SDE I through L7/Principal.',
  },
  {
    q: 'How is this different from peer mocks?',
    a: "Peer mocks cost $200–400 and rely on the peer's calibration. Offered is available on demand, unlimited, and graded against actual rubrics.",
  },
];

export default function FAQ() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section">
      <div ref={ref} className="container">
        <h2 className={`section-heading anim-fade-up${visible ? ' is-visible' : ''}`}>
          <span className="hl">FAQ</span>
        </h2>

        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {FAQS.map((f, i) => (
            <details
              key={i}
              className={`faq-item anim-fade-up${visible ? ' is-visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 70}ms` : '0ms' }}
            >
              <summary className="faq-summary">
                {f.q}
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
