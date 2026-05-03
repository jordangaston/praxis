export default function Nav() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-10 py-5"
      style={{ borderBottom: '1px solid rgba(126,67,255,0.10)' }}
    >
      <div className="max-w-[1280px] mx-auto px-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-[22px] h-[22px] rounded-[6px] relative"
            style={{ background: 'linear-gradient(135deg, #7E43FF, #FF66C1)' }}
          >
            <div
              className="absolute rounded-[3px]"
              style={{ inset: 5, background: '#FAFAFF' }}
            />
          </div>
          <span className="font-semibold text-[17px] tracking-[-0.3px]" style={{ color: '#1C0F42' }}>Offered.</span>
        </div>

        <div className="flex gap-9 text-[14px]" style={{ color: 'rgba(28,15,66,0.58)' }}>
          <a href="#how-it-works" className="hover:text-[#1C0F42] transition-colors duration-150">How it works</a>
          <a href="#interview-types" className="hover:text-[#1C0F42] transition-colors duration-150">Interview types</a>
          <a href="#pricing" className="hover:text-[#1C0F42] transition-colors duration-150">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[14px] transition-colors duration-150 hover:text-[#1C0F42]"
            style={{ color: 'rgba(28,15,66,0.58)' }}
          >
            Sign in
          </a>
          <button
            className="rounded-full px-[18px] py-[10px] text-[13px] font-semibold tracking-[0.1px] transition-all duration-150 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(118deg, #6B2FEF 0%, #A93AFF 50%, #FF55B8 100%)',
              color: '#fff',
              border: 'none',
              boxShadow: '0 2px 16px rgba(126,67,255,0.35)',
            }}
          >
            Free mock interview
          </button>
        </div>
      </div>
    </nav>
  );
}
