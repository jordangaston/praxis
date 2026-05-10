import useInView from '../hooks/useInView';
import { trackCTAClick } from '../analytics';

export default function FinalCTA() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="section">
      <div className="container">
        <div
          ref={ref}
          className={`card card--lg anim-fade-up final-cta-inner${visible ? ' is-visible' : ''}`}
        >
          <h2 className="final-cta-heading">
            Master system design in <span className="hl">30 days.</span>
          </h2>
          <div className="final-cta-action">
            <button className="btn btn-primary" onClick={trackCTAClick}>
              Start the challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
