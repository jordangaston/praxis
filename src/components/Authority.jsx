const PEOPLE = [
  { n: 'Maya R.',  r: 'Staff · Meta',    c: 34 },
  { n: 'Dev S.',   r: 'Senior · Amazon', c: 28 },
  { n: 'Priya K.', r: 'Staff · Apple',  c: 22 },
  { n: 'Jonas L.', r: 'Senior · MS',    c: 19 },
];

export default function Authority() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 28px' }}>
        <div className="eyebrow mb-5">★ BUILT BY THE INTERVIEWERS</div>
        <div className="grid items-start gap-16" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <h2
              className="font-display font-bold m-0 mb-7"
              style={{
                fontSize: 'clamp(38px, 4.5vw, 60px)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: '#0a0a0a',
                textWrap: 'balance',
              }}
            >
              100+ FAANG loops. On both sides of the table.
            </h2>
            <p className="text-[17px] leading-[1.65] m-0 mb-10" style={{ maxWidth: 480, color: '#4b5563' }}>
              Staff and Senior engineers from Amazon, Meta, Apple, Microsoft, and Roblox. We've graded the loops you're about to walk into. Now we're calibrating the AI that practices you for them.
            </p>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
              {PEOPLE.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-[12px]"
                  style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 grid place-items-center font-bold text-[14px] text-white"
                    style={{ background: '#2d2de0' }}
                  >
                    {p.n[0]}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[13.5px]" style={{ color: '#0a0a0a' }}>{p.n}</div>
                    <div className="text-[12px]" style={{ color: '#9ca3af' }}>{p.r} · {p.c} loops</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote */}
          <div
            className="rounded-[20px] p-9"
            style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
          >
            <div
              style={{ fontSize: 72, lineHeight: 0.7, marginBottom: 8, color: '#2d2de0', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            >
              "
            </div>
            <p className="font-display font-medium m-0 mb-8" style={{ fontSize: 19, lineHeight: 1.5, color: '#0a0a0a' }}>
              We've sat in that chair. Walked in feeling ready. Left second-guessing everything. Live pressure yields only to practice — not more studying.
            </p>
            <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid #e5e7eb' }}>
              <div
                className="w-10 h-10 rounded-full flex-shrink-0"
                style={{ background: '#2d2de0' }}
              />
              <div>
                <div className="font-display font-semibold text-[14px]" style={{ color: '#0a0a0a' }}>The Offered team</div>
                <div className="text-[12.5px]" style={{ color: '#9ca3af' }}>Staff & Senior eng · 100+ loops</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
