import React from "react";

export const NewBackground = ({ children }) => {
  return (
    <div
      style={{
        // Classy multicolor gradient with soft blue, muted purple, and warm cream
        background: "linear-gradient(135deg, #E6F0FA, #D1C4E9, #FFF8E1)",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle SVG Wave with smooth animation */}
      <svg
        viewBox="0 0 1440 200"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "150%",
          height: "auto",
          animation: "waveAnimation 30s linear infinite",
          opacity: 0.2, // Lower opacity for minimalism
        }}
      >
        <path
          // Complementary gradient for the wave
          fill="url(#waveGradient)"
          d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,122.7C840,139,960,149,1080,138.7C1200,128,1320,107,1380,96L1440,85L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#D1C4E9", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#B3CDE0", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Keyframes for smooth, subtle wave animation */}
      <style>{`
        @keyframes waveAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};