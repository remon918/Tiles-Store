import Link from "next/link";

const particles = [
  { color: "bg-purple-600", left: "10%", delay: "0s" },
  { color: "bg-emerald-500", left: "25%", delay: "1.2s" },
  { color: "bg-purple-600", left: "40%", delay: "2.4s" },
  { color: "bg-emerald-500", left: "55%", delay: "0.6s" },
  { color: "bg-amber-400", left: "68%", delay: "1.8s" },
  { color: "bg-purple-600", left: "80%", delay: "3.0s" },
  { color: "bg-emerald-500", left: "90%", delay: "0.9s" },
  { color: "bg-amber-400", left: "5%", delay: "2.1s" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0a0a0f] overflow-hidden font-sans">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,37,210,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.01) 2px,rgba(255,255,255,0.01) 4px)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`absolute bottom-0 w-1 h-1 rounded-full ${p.color} opacity-0 animate-float`}
            style={{ left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-xl animate-fade-in">

        {/* 404 glitch */}
        <div className="relative inline-block mb-8 select-none">
          <span
            className="glitch block font-mono font-bold text-white tracking-tighter text-[clamp(7rem,18vw,10rem)] leading-none"
            data-text="404"
          >
            404
          </span>
        </div>

        {/* Divider */}
        <div className="w-14 h-0.5 mx-auto mb-8 rounded-full bg-linear-to-r from-purple-600 to-emerald-500" />

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#f1f1f5] tracking-tight mb-4">
          পেইজটি খুঁজে পাওয়া যায়নি
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base font-light text-[#8b8b99] leading-relaxed mb-10">
          আপনি যে পেইজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে,
          অথবা কখনই ছিল না।
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg text-sm text-white
              bg-linear-to-br from-purple-600 to-purple-800
              shadow-[0_0_20px_rgba(99,37,210,0.35)]
              hover:shadow-[0_0_30px_rgba(99,37,210,0.55)]
              hover:-translate-y-0.5 transition-all duration-200"
          >
            হোম পেইজে ফিরুন
          </Link>

          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg text-sm text-[#8b8b99]
              border border-white/10
              hover:border-white/25 hover:text-[#f1f1f5] hover:bg-white/5]
              transition-all duration-200"
          >
            আগের পেইজে যান
          </Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Sora:wght@300;400;600&display=swap');

        .glitch { position: relative; font-family: 'Space Mono', monospace; animation: glitch-main 4s infinite; }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; inset: 0; }
        .glitch::before { color: #6325d2; animation: glitch-b 4s infinite; clip-path: polygon(0 25%,100% 25%,100% 50%,0 50%); }
        .glitch::after  { color: #10b981; animation: glitch-a 4s infinite; clip-path: polygon(0 60%,100% 60%,100% 75%,0 75%); }

        @keyframes glitch-main {
          0%,90%,100% { transform: translate(0); }
          92% { transform: translate(-2px, 1px); }
          94% { transform: translate(2px, -1px); }
          96% { transform: translate(-1px, 2px); }
        }
        @keyframes glitch-b {
          0%,90%,100% { transform: translate(0); opacity: 0; }
          92% { transform: translate(3px, -2px); opacity: .8; }
          95% { transform: translate(-3px, 1px); opacity: .8; }
        }
        @keyframes glitch-a {
          0%,90%,100% { transform: translate(0); opacity: 0; }
          93% { transform: translate(-4px, 2px); opacity: .8; }
          96% { transform: translate(4px, -2px); opacity: .8; }
        }
        @keyframes float {
          0%   { opacity: 0; transform: translateY(0) scale(.5); }
          15%  { opacity: .7; }
          85%  { opacity: .4; }
          100% { opacity: 0; transform: translateY(-120px) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-float  { animation: float 8s infinite; }
        .animate-fade-in { animation: fade-in .7s ease-out forwards; }
      `}</style>
    </main>
  );
}