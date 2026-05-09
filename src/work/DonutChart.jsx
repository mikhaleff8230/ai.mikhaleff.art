import { useEffect, useMemo, useState } from "react";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function DonutChart({
  value,
  size = 120,
  strokeWidth = 8,
  color = "#c9ff38",
  trackColor = "rgba(255,255,255,0.14)",
  durationMs = 950
}) {
  const safeValue = clamp(Number(value) || 0, 0, 100);
  const safeStrokeWidth = Math.max(1, strokeWidth);
  const radius = useMemo(() => (size - safeStrokeWidth) / 2, [size, safeStrokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const fromValue = animatedValue;
    const delta = safeValue - fromValue;
    let frameId = 0;

    const tick = (time) => {
      const rawProgress = clamp((time - start) / durationMs, 0, 1);
      // Ease-out cubic for smooth end of motion.
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setAnimatedValue(fromValue + delta * eased);
      if (rawProgress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [safeValue, durationMs]);

  const offset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="group relative inline-grid place-items-center transition duration-300 hover:scale-[1.03]">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={trackColor}
          strokeWidth={safeStrokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={safeStrokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
        <p className="text-2xl font-semibold text-white">{Math.round(animatedValue)}%</p>
      </div>
    </div>
  );
}
