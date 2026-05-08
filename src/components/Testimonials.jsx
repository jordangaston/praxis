import { useState } from 'react';

const LOGOS = {
  Amazon: <svg viewBox="0 0 448 512" height="16" fill="currentColor"><path d="M257.7 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56s-32.3-25.3-32.3-52.8l0-147.1C341.5 89 317 32 229.2 32 141.2 32 94.5 87 94.5 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8l0 40.6zM393.7 413c-7.7 10-70 67-174.5 67S34.7 408.5 10.2 379c-6.8-7.7 1-11.3 5.5-8.3 73.3 44.5 187.8 117.8 372.5 30.3 7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" /></svg>,
  Google: <svg viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>,
  Microsoft: <svg viewBox="0 0 23 23" height="16" fill="currentColor"><path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" /></svg>,
  Meta: <svg viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  Stripe: <svg viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" /></svg>,
  Apple: <svg viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>,
  LinkedIn: <svg viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
};

const TESTIMONIALS = [
  { company: 'Meta',      level: 'E5',     q: 'Failed Meta twice. Ran 40 loops here. Walked in calm. Got the offer.' },
  { company: 'Google',    level: 'L5',     q: 'The feedback actually changes you. After each session I knew what to drill.' },
  { company: 'Amazon',    level: 'SDE II', q: 'Two weeks of structured practice changed more than four months of leetcode grinding.' },
  { company: 'Google',    level: 'L4',     q: 'I bombed my first mock badly. By session eight I was hitting every signal they look for.' },
  { company: 'Microsoft', level: 'SDE III',q: 'Finally felt like I was prepping for the actual interview, not some watered-down version of it.' },
  { company: 'Stripe',    level: 'E4',     q: 'The rubric breakdown after each session is unlike anything else I tried. You see exactly where you lost points.' },
  { company: 'LinkedIn',  level: 'Staff',  q: 'Did 20 system design sessions in 10 days. Went from dreading that round to crushing it.' },
  { company: 'Apple',     level: 'L5',     q: 'I was skeptical an AI could push me like a real interviewer. I was wrong.' },
  { company: 'Meta',      level: 'E6',     q: "Got to my loop already knowing the partner's follow-up patterns. It felt like a cheat code." },
  { company: 'Stripe',    level: 'SDE II', q: 'Spent three months on other prep platforms and stalled. Two weeks here and I had three offers.' },
  { company: 'Amazon',    level: 'L4',     q: 'The behavioral round used to tank me every time. Structured feedback fixed it in a week.' },
  { company: 'Google',    level: 'E5',     q: 'Voice sessions with real-time pushback forced me to articulate trade-offs I had been hand-waving.' },
];

const PAGE = 6;

export default function Testimonials() {
  const [visible, setVisible] = useState(PAGE);
  const hasMore = visible < TESTIMONIALS.length;

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-heading">See how others passed their interviews</h2>

        <div style={{ position: 'relative' }}>
          <div
            className="testimonials-grid"
            style={{ paddingBottom: hasMore ? 80 : 0 }}
          >
            {TESTIMONIALS.slice(0, visible).map((x, i) => (
              <figure key={i} className="testimonial-card">
                <div className="testimonial-label">
                  Passed {x.company} {x.level} Interview
                </div>
                <blockquote className="testimonial-quote">
                  "{x.q}"
                </blockquote>
                <figcaption className="testimonial-footer">
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {LOGOS[x.company]}
                  </span>
                  <span className="testimonial-company">{x.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {hasMore && (
            <>
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: 220,
                background: 'linear-gradient(to bottom, transparent, var(--color-surface))',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 8,
              }}>
                <button
                  onClick={() => setVisible(v => v + PAGE)}
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  Show more stories
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2v8M2 8l4 4 4-4" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
