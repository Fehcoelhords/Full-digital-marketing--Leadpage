import React from 'react';

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950/30"></div>
      
      {/* Animated mesh gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Geometric grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Diagonal lines pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonals" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="80" stroke="rgb(59, 130, 246)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
      
      {/* Hexagon pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="100" height="86.6" patternUnits="userSpaceOnUse">
            <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="rgb(96, 165, 250)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
      
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_30px_10px_rgba(59,130,246,0.3)] animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_30px_10px_rgba(59,130,246,0.2)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_30px_10px_rgba(147,51,234,0.2)] animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}
