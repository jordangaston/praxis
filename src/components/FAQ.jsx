const FAQS = [
  { q: 'Is the first mock really free?',         a: 'Yes. Full session, evaluation, feedback report. No credit card.' },
  { q: 'How realistic is the AI?',               a: "Voice-first. You speak, it responds in real time. Calibrated against transcripts and rubrics from interviewers at Amazon, Meta, Apple, Microsoft, Roblox. It pushes back, follows up, and grades like a panel." },
  { q: 'Which interview types?',                 a: 'Coding, System Design, Behavioral, Domain (ML, Infra, Mobile). L3/SDE I through L7/Principal.' },
  { q: 'How is this different from peer mocks?', a: "Peer mocks cost $200–400 and depend on the peer's calibration. We're unlimited, available at 2am the night before, graded against actual rubrics." },
];

export default function FAQ() {
  return (
    <section style={{ background: '#ffffff', padding: '136px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <h2
          style={{
            fontSize: 42,
            lineHeight: 1.06,
            fontWeight: 500,
            color: '#000000',
            margin: '0 0 56px',
            fontFamily: '"DM Sans", Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          You ask, we answer.
        </h2>

        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <details
              key={i}
              style={{ borderTop: '1px solid #eeeef2', padding: '22px 0' }}
            >
              <summary
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  listStyle: 'none',
                  fontSize: 19,
                  fontWeight: 500,
                  color: '#000000',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {f.q}
                <span
                  className="faq-plus"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 16,
                    fontWeight: 500,
                    flexShrink: 0,
                    marginLeft: 24,
                    background: '#f6f7f8',
                    border: '1px solid #eeeef2',
                    color: '#000000',
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  marginTop: 16,
                  marginBottom: 0,
                  color: '#6f7790',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
          <div style={{ borderTop: '1px solid #eeeef2' }} />
        </div>
      </div>
    </section>
  );
}
