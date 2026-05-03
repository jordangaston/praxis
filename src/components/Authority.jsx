const PEOPLE = [
  { n: 'Maya R.', r: 'Staff · Meta', c: 34 },
  { n: 'Dev S.', r: 'Senior · Amazon', c: 28 },
  { n: 'Priya K.', r: 'Staff · Apple', c: 22 },
  { n: 'Jonas L.', r: 'Senior · MS', c: 19 },
];

export default function Authority() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(126,67,255,0.10)', padding: '140px 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-14">
        <div className="eyebrow mb-6">★ Built by the interviewers</div>
        <div className="grid items-center gap-[72px]" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <h2
              className="font-medium m-0 mb-8"
              style={{ fontSize: 72, lineHeight: 1, letterSpacing: -2, textWrap: 'balance', color: '#1C0F42' }}
            >
              <span className="serif-it grad-text">100+ FAANG loops.</span>
              <br />On both sides of the table.
            </h2>
            <p className="text-[18px] leading-[1.55] m-0 mb-8" style={{ maxWidth: 540, color: 'rgba(28,15,66,0.60)' }}>
              Staff and Senior engineers from Amazon, Meta, Apple, Microsoft, and Roblox. We've graded the loops you're about to walk into. Now we're calibrating the AI that practices you for them.
            </p>
            <div className="flex gap-3">
              {PEOPLE.map((p, i) => (
                <div
                  key={i}
                  className="flex-1 p-4 rounded-[14px]"
                  style={{
                    background: 'rgba(255,255,255,0.65)',
                    border: '1px solid rgba(126,67,255,0.14)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 2px 12px rgba(126,67,255,0.06)',
                  }}
                >
                  <div
                    className="w-[34px] h-[34px] rounded-full mb-2.5 grid place-items-center font-bold text-[14px] text-white"
                    style={{ background: 'linear-gradient(135deg,#7E43FF,#FF66C1)' }}
                  >
                    {p.n[0]}
                  </div>
                  <div className="text-[13.5px] font-semibold" style={{ color: '#1C0F42' }}>{p.n}</div>
                  <div className="text-[11.5px] mb-2" style={{ color: 'rgba(28,15,66,0.40)' }}>{p.r}</div>
                  <div className="text-[11.5px] font-semibold grad-text">{p.c} loops</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-9 rounded-[20px]"
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(126,67,255,0.18)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 40px rgba(126,67,255,0.10)',
            }}
          >
            <div
              className="serif-it grad-text leading-[0.6]"
              style={{ fontSize: 84 }}
            >
              "
            </div>
            <p className="font-medium m-0 mt-2 mb-6" style={{ fontSize: 21, lineHeight: 1.4, color: '#1C0F42' }}>
              We've sat in that chair. Walked in feeling ready. Left second-guessing everything. Live pressure yields only to practice — not more studying.
            </p>
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: '1px solid rgba(126,67,255,0.14)' }}
            >
              <div
                className="w-[38px] h-[38px] rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#B59BFF,#FFAAD8)' }}
              />
              <div>
                <div className="text-[14px] font-semibold" style={{ color: '#1C0F42' }}>The Offered team</div>
                <div className="text-[12.5px]" style={{ color: 'rgba(28,15,66,0.50)' }}>Staff & Senior eng · 100+ loops conducted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
