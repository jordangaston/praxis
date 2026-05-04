const STATS = [
  { n: '—', t: "This is by design", d: "Interviewers apply pressure to evaluate your ability to perform under stress." },
  { n: '—', t: "Stress affects performance", d: "You second-guess yourself. You rush. You forget to clarify requirements. It happens to everyone who hasn't practiced." },
  { n: '—', t: "Performance requires practice", d: "Not more studying. Not more leetcode. You have to do the real thing, repeatedly, until it feels normal." },
];

export default function Problem() {
  return (
    <section style={{ background: '#ffffff', padding: '136px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>

        <div className="eyebrow" style={{ marginBottom: 20 }}>THE PROBLEM</div>

        <h2
          style={{
            fontSize: 42,
            lineHeight: 1.06,
            fontWeight: 500,
            color: '#000000',
            margin: '0 auto 80px',
            fontFamily: '"DM Sans", Arial, sans-serif',
            maxWidth: 720,
          }}
        >
          Real interviews are stressful
        </h2>

        {/* Stat grid — clean text on white, dividers between columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '0 40px',
                borderRight: i < 2 ? '1px solid #eeeef2' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 500,
                  lineHeight: 1,
                  color: '#183fd9',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                  marginBottom: 16,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#000000',
                  fontFamily: '"DM Sans", Arial, sans-serif',
                  marginBottom: 8,
                }}
              >
                {s.t}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: '#6f7790',
                  margin: 0,
                  fontFamily: '"DM Sans", Arial, sans-serif',
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <p
          style={{
            marginTop: 80,
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: 640,
            color: '#6f7790',
            fontFamily: '"DM Sans", Arial, sans-serif',
            fontStyle: 'italic',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Competent engineers deserve a fair shot. The gauntlet gives insiders one. We're giving it to everyone else.
        </p>
      </div>
    </section>
  );
}
