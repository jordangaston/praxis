import useInView from '../hooks/useInView';
import { BRAND_NAME } from '../config';

const FEATURES = [
  'Unlimited mock interviews',
  'Real FAANG rubrics',
  'Every interview type',
  'Rubric-based feedback',
  'Progress tracking',
];

export default function Pricing() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="pricing" className="section">
      <div ref={ref} className="container" style={{ textAlign: 'center' }}>
        <h2 className={`section-heading anim-fade-up${visible ? ' is-visible' : ''}`}>
          <span className="hl">Unlimited</span> mock interviews.
        </h2>

        <div
          className={`card anim-fade-up${visible ? ' is-visible' : ''}`}
          style={{ maxWidth: 440, margin: '0 auto', textAlign: 'center', transitionDelay: visible ? '100ms' : '0ms' }}
        >
          <div style={{ marginBottom: 'var(--space-2)' }}>
            <span className="badge badge--filled">First mock free</span>
          </div>

          <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
            {BRAND_NAME} Unlimited
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-1)', marginBottom: 4, justifyContent: 'center' }}>
            <span className="pricing-price">$49</span>
            <span className="pricing-period">/mo</span>
          </div>
          <div style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)', color: 'var(--color-ink-faint)' }}>
            vs. $200–400 per human peer mock
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto var(--space-4)', display: 'inline-flex', flexDirection: 'column', gap: 'var(--space-2)', textAlign: 'left' }}>
            {FEATURES.map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-base)', color: 'var(--color-ink)' }}>
                <span className="pricing-check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            Start the challenge
          </button>
        </div>
      </div>
    </section>
  );
}
