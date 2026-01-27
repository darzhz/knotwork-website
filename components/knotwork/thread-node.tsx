'use client'

export default function ThreadNode() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-24 h-24 md:w-32 md:h-32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting threads with animation */}
      <style>
        {`
          @keyframes flowThread {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: -8; }
          }
          .flow-thread {
            animation: flowThread 3s infinite;
            stroke-dasharray: 4, 4;
          }
        `}
      </style>

      {/* Top thread */}
      <line
        x1="100"
        y1="40"
        x2="100"
        y2="85"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
        className="flow-thread"
      />

      {/* Bottom thread */}
      <line
        x1="100"
        y1="115"
        x2="100"
        y2="160"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
        className="flow-thread"
      />

      {/* Left thread */}
      <line
        x1="40"
        y1="100"
        x2="85"
        y2="100"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
        className="flow-thread"
      />

      {/* Right thread */}
      <line
        x1="115"
        y1="100"
        x2="160"
        y2="100"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
        className="flow-thread"
      />

      {/* Top knot */}
      <circle cx="100" cy="40" r="6" fill="currentColor" opacity="0.7" />

      {/* Bottom knot */}
      <circle cx="100" cy="160" r="6" fill="currentColor" opacity="0.7" />

      {/* Left knot */}
      <circle cx="40" cy="100" r="6" fill="currentColor" opacity="0.7" />

      {/* Right knot */}
      <circle cx="160" cy="100" r="6" fill="currentColor" opacity="0.7" />

      {/* Center knot (larger, represents the main node) */}
      <circle cx="100" cy="100" r="8" fill="currentColor" className="text-accent" />

      {/* Center knot glow effect */}
      <circle
        cx="100"
        cy="100"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        className="text-accent"
      >
        <animate attributeName="r" from="8" to="14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
