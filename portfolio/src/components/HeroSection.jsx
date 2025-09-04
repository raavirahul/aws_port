import { ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile.jpg"; // adjust path if different

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-transparent"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-8 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-gray-300/20 to-transparent rounded-xl overflow-hidden border border-gray-300/30 shadow-sm opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
              <img
                src={profilePic}
                alt="Rahul Raavi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title & Name */}
          <div className="text-center lg:text-left space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-sans" style={{ fontFamily: "'Inter', sans-serif", color: "#2d3748" }}>
              <span className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
                Hello, I'm
              </span>
              <span className="ml-2 opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]" style={{ color: "#4a5568" }}>
                Rahul
              </span>
              <span className="ml-2 opacity-0 animate-[fadeIn_0.5s_ease-out_0.6s_forwards]" style={{ color: "#1a202c" }}>
                RAAVI
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]" style={{ fontFamily: "'Inter', sans-serif", color: "#4a5568" }}>
              AWS - Data Engineer & Cloud Solutions Specialist
            </p>

            {/* Button */}
            <div className="pt-4 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
              <a
                href="#projects"
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-[bounce_2s_infinite]">
        <span className="text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "#4a5568" }}>Scroll</span>
        <ArrowDown className="h-5 w-5" style={{ color: "#4a5568" }} />
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};