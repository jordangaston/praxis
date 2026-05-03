const PEOPLE = [
  { n: 'Maya R.',  r: 'Staff · Meta',      c: 34 },
  { n: 'Dev S.',   r: 'Senior · Amazon',   c: 28 },
  { n: 'Priya K.', r: 'Staff · Apple',     c: 22 },
  { n: 'Jonas L.', r: 'Senior · MS',       c: 19 },
];

export default function Authority() {
  return (
    <div style={{ padding: '8px 20px' }}>
      <section className="section-card" style={{ padding: '80px 72px' }}>
        <div className="eyebrow mb-5">★ Built by the interviewers</div>
        <div className="grid items-start gap-16" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <h2
              className="font-display font-medium m-0 mb-8"
              style={{ fontSize: 'clamp(38px,4.5vw,64px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#26114a', textWrap: 'balance' }}
            >
              <span className="serif-it grad-text">100+ FAANG loops.</span>
              <br />On both sides of the table.
            </h2>
            <p className="text-[17px] leading-[1.65] m-0 mb-10" style={{ maxWidth: 500, color: '#615e6e' }}>
              Staff and Senior engineers from Amazon, Meta, Apple, Microsoft, and Roblox. We've graded the loops you're about to walk into. Now we're calibrating the AI that practices you for them.
            </p>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
              {PEOPLE.map((p, i) => (
                <div key={i} className="card p-5 rounded-[14px]">
                  <div className="w-9 h-9 rounded-full mb-3 grid place-items-center font-bold text-[14px] text-white" style={{ background: 'linear-gradient(135deg,#7e43ff,#ff66c1)' }}>{p.n[0]}</div>
                  <div className="font-display font-semibold text-[14px]" style={{ color: '#26114a' }}>{p.n}</div>
                  <div className="text-[12px] mt-0.5 mb-2" style={{ color: '#9491a1' }}>{p.r}</div>
                  <div className="font-semibold text-[12px] grad-text">{p.c} loops</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote */}
          <div className="card rounded-[20px] p-9" style={{ position: 'sticky', top: 100 }}>
            <div className="serif-it grad-text" style={{ fontSize: 72, lineHeight: 0.7, marginBottom: 8 }}>"</div>
            <p className="font-display font-medium m-0 mb-8" style={{ fontSize: 19, lineHeight: 1.5, color: '#26114a' }}>
              We've sat in that chair. Walked in feeling ready. Left second-guessing everything. Live pressure yields only to practice — not more studying.
            </p>
            <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid #e6e2e3' }}>
              <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c4aaff,#ffaad8)' }} />
              <div>
                <div className="font-display font-semibold text-[14px]" style={{ color: '#26114a' }}>The Offered team</div>
                <div className="text-[12.5px]" style={{ color: '#9491a1' }}>Staff & Senior eng · 100+ loops</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
