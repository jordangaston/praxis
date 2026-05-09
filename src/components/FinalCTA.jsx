import useInView from '../hooks/useInView';
import { trackCTAClick } from '../analytics';

export default function FinalCTA() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="section">
      <div className="container">
        <div
          ref={ref}
          className={`card card--lg anim-fade-up${visible ? ' is-visible' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-6)',
          }}
        >
          <div style={{ flex: '0 0 60%' }}>
            <h2 style={{
              fontSize: 'var(--text-2xl)',
              lineHeight: 1.1,
              fontWeight: 500,
              color: 'var(--color-ink)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Master system design in <span className="hl">30 days. </span>
            </h2>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <p style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
              maxWidth: 220,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
            }}>
            </p>
            <button className="btn btn-primary" onClick={trackCTAClick}>
              Start the challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
