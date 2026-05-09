import { useRef, useState } from "react";

export default function PortraitCard({
  image,
  video = "/real.mp4",
  alt = "Alex portrait"
}) {
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const onEnter = () => {
    setHovering(true);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const onLeave = () => {
    setHovering(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      onTouchEnd={onLeave}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-[0_24px_60px_rgba(0,0,0,.45)]"
    >
      <img
        src={image}
        alt={alt}
        className={`block h-[420px] w-full object-cover object-center transition-opacity duration-300 ${
          hovering ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-[420px] w-full object-cover object-center transition-opacity duration-300 ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_75%_at_100%_0%,rgba(201,255,56,0.16),transparent_58%),linear-gradient(to_top,rgba(5,8,13,0.3),transparent_52%)]" />
    </div>
  );
}
