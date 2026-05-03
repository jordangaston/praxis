const WAVEFORM = [12, 22, 8, 32, 18, 28, 14, 36, 24, 10, 30, 20, 14, 26, 10, 34, 22, 14, 28, 8, 24, 18, 12, 30, 16, 22, 10];

const METERS = [
  { l: 'CLARITY', v: 4, c: '#3DDC84' },
  { l: 'DEPTH', v: 5, c: '#3DDC84' },
  { l: 'PACING', v: 2, c: '#FF6A1A' },
  { l: 'FILLER', v: 4, c: '#3DDC84' },
];

const BG = '#0a0a0a';
const CARD = 'rgba(255,255,255,0.05)';
const RULE = 'rgba(255,255,255,0.07)';

export default function VoiceMock() {
  return (
    <div className="relative">
      <div
        className="relative rounded-[28px] p-px"
        style={{
          background: 'linear-gradient(180deg, rgba(255,106,26,0.45), rgba(255,106,26,0.05) 60%, rgba(255,255,255,0.04))',
          boxShadow: '0 60px 120px -40px rgba(255,106,26,0.5), 0 30px 60px -30px rgba(0,0,0,0.6)',
        }}
      >
        <div
          className="rounded-[27px] p-7 font-mono text-[12px]"
          style={{ background: CARD, backdropFilter: 'blur(24px)' }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: '#FF6A1A', boxShadow: '0 0 8px #FF6A1A' }}
              />
              <span className="text-ink tracking-[0.5px]">LIVE · System Design · L5 · Meta</span>
            </div>
            <span className="text-ink-faint">32:14 / 45:00</span>
          </div>

          {/* Voice halo */}
          <div
            className="rounded-[20px] px-6 pt-8 pb-7 text-center relative overflow-hidden"
            style={{ background: BG }}
          >
            <div
              className="absolute rounded-full border"
              style={{
                left: '50%', top: '36%', transform: 'translate(-50%,-50%)',
                width: 280, height: 280,
                borderColor: 'rgba(255,106,26,0.15)',
              }}
            />
            <div
              className="absolute rounded-full border"
              style={{
                left: '50%', top: '36%', transform: 'translate(-50%,-50%)',
                width: 200, height: 200,
                borderColor: 'rgba(255,106,26,0.25)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: '50%', top: '36%', transform: 'translate(-50%,-50%)',
                width: 130, height: 130,
                background: 'radial-gradient(circle, rgba(255,106,26,0.35), transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            <div
              className="relative w-[76px] h-[76px] rounded-full mx-auto flex items-center justify-center serif-it text-[32px]"
              style={{
                background: '#FF6A1A',
                boxShadow: '0 0 40px #FF6A1A',
                color: '#0a0a0a',
              }}
            >
              M
            </div>
            <div className="relative mt-3.5 text-[12px] font-semibold font-sans text-ink">Maya — AI Interviewer</div>
            <div className="relative text-[10.5px] text-ink-faint mt-0.5 font-sans">Calibrated to Meta E5 sysdesign</div>
            <div className="relative mt-4 text-[10.5px] tracking-[1.4px]" style={{ color: '#FF6A1A' }}>● MAYA SPEAKING</div>

            <div className="relative flex items-center justify-center gap-[3px] mt-4 h-9">
              {WAVEFORM.map((h, i) => (
                <div
                  key={i}
                  className="rounded-[2px]"
                  style={{
                    width: 3,
                    height: h,
                    background: i % 5 === 0 ? '#FF6A1A' : '#FFB27A',
                    opacity: 0.4 + h / 50,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Transcript */}
          <div
            className="mt-4 p-4 rounded-[12px] border"
            style={{ background: BG, borderColor: RULE }}
          >
            <div className="flex justify-between text-ink-faint mb-2">
              <span style={{ color: '#FF6A1A' }}>● Maya · 31:08</span>
            </div>
            <div className="text-ink text-[13px] leading-[1.55] font-sans">
              "How would you handle a user with 10M followers posting?"
            </div>
            <div className="flex justify-between text-ink-faint mt-3.5 mb-2">
              <span style={{ color: '#3DDC84' }}>● You · 32:14 · live</span>
            </div>
            <div className="text-ink text-[13px] leading-[1.55] font-sans">
              "Hybrid fanout — push for normal users, pull for celebrities. Threshold around 10k
              <span style={{ color: '#FF6A1A' }}>▌</span>"
            </div>
          </div>

          {/* Signal meters */}
          <div className="mt-4 grid grid-cols-4 gap-2.5">
            {METERS.map(s => (
              <div key={s.l}>
                <div className="text-[9.5px] text-ink-dim tracking-[0.6px] mb-1.5">{s.l}</div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(n => (
                    <div
                      key={n}
                      className="flex-1 h-1 rounded-[2px]"
                      style={{ background: n <= s.v ? s.c : RULE }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
