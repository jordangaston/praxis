import useInView from '../hooks/useInView';

const FAQS = [
  {
    q: 'Is the first mock really free?',
    a: 'Yes. You get the full session, a scored rubric, and a feedback report. No credit card required.',
  },
  {
    q: 'How does the AI compare to a real interviewer?',
    a: "You speak out loud and it responds in real time — just like a real interview. It's calibrated against actual rubrics and transcripts from interviewers at Amazon, Meta, Apple, Microsoft, and Roblox. It pushes back on weak answers, asks follow-up questions, and scores you like a panel would.",
  },
  {
    q: 'What interview types does Offered cover?',
    a: 'System Design, Coding, Behavioral, and Domain-specific tracks (ML, Infra, Mobile). All levels from L3/SDE I through L7/Principal.',
  },
  {
    q: 'How is this different from peer mocks?',
    a: "Peer mocks cost $200–400, require scheduling, and are only as good as the peer running them. Offered is available any time, unlimited, and graded against the same rubrics real interviewers use.",
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
