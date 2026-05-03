export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10" style={{ padding: '20px 0' }}>
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-between"
        style={{ padding: '0 28px' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-[6px] relative flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7e43ff, #ff66c1)' }}
          >
            <div className="absolute rounded-[3px]" style={{ inset: 5, background: '#efefff' }} />
          </div>
          <span
            className="font-display font-semibold text-[17px] tracking-[-0.3px]"
            style={{ color: '#26114a' }}
          >
            Offered.
          </span>
        </div>

        {/* Links */}
        <div
          className="flex gap-8 text-[14px] font-medium"
          style={{ color: '#26114a', fontFamily: 'var(--font-display)' }}
        >
          <a href="#how-it-works" className="opacity-70 hover:opacity-100 transition-opacity">How it works</a>
          <a href="#interview-types" className="opacity-70 hover:opacity-100 transition-opacity">Interview types</a>
          <a href="#pricing" className="opacity-70 hover:opacity-100 transition-opacity">Pricing</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[14px] font-medium opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: '#26114a', fontFamily: 'var(--font-display)' }}
          >
            Sign in
          </a>
          <button className="btn-primary text-[14px]" style={{ padding: '10px 18px' }}>
            Free mock interview
          </button>
        </div>
      </div>
    </nav>
  );
}
