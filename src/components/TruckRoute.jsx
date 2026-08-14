import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * 3D-perspective white truck SVG
 * Drawn in 3/4 isometric-ish perspective to give depth.
 * The truck faces right and has visible front, side and top faces.
 */
export function Truck3D({ width = 260, _opacity = 1, style = {} }) {
  const scale = width / 260;
  const h = Math.round(160 * scale);

  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 260 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', ...style }}
    >
      <defs>
        {/* Drop shadow filter */}
        <filter id="truck-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="rgba(0,0,0,0.22)" />
        </filter>
        {/* Subtle inner glow on windshield */}
        <linearGradient id="windshield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.7" />
        </linearGradient>
        {/* Top face gradient — lighter to simulate light from above */}
        <linearGradient id="top-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        {/* Side face gradient — slightly darker */}
        <linearGradient id="side-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        {/* Front cab face */}
        <linearGradient id="cab-front-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="wheel-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>

      <g filter="url(#truck-shadow)">

        {/* ===== CARGO BOX ===== */}
        {/* Top face of cargo box (parallelogram — perspective) */}
        <path
          d="M 14 36  L 152 24  L 168 36  L 30 48 Z"
          fill="url(#top-grad)"
          stroke="#94a3b8"
          strokeWidth="0.8"
        />
        {/* Side face of cargo box (main visible face) */}
        <path
          d="M 14 36  L 14 112  L 152 112  L 152 24 Z"
          fill="url(#side-grad)"
          stroke="#94a3b8"
          strokeWidth="0.8"
        />
        {/* Door seam on cargo box */}
        <line x1="128" y1="28" x2="128" y2="112" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="5 3" />
        {/* RotaJá text on cargo */}
        <text
          x="64"
          y="78"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#2563eb"
          letterSpacing="1"
          textAnchor="middle"
        >
          ROTAJÁ
        </text>
        {/* Subtle horizontal stripe */}
        <rect x="14" y="88" width="138" height="3" fill="rgba(37,99,235,0.12)" />

        {/* ===== CAB ===== */}
        {/* Top face of cab (perspective) */}
        <path
          d="M 152 24  L 168 36  L 240 36  L 240 24 Z"
          fill="url(#top-grad)"
          stroke="#94a3b8"
          strokeWidth="0.8"
        />
        {/* Front cab side face */}
        <path
          d="M 152 24  L 152 112  L 240 112  L 240 24 Z"
          fill="url(#cab-front-grad)"
          stroke="#94a3b8"
          strokeWidth="0.8"
        />
        {/* Windshield */}
        <path
          d="M 158 30  L 158 72  L 234 72  L 234 30 Z"
          fill="url(#windshield-grad)"
          stroke="#93c5fd"
          strokeWidth="1.2"
          rx="4"
        />
        {/* Windshield reflection */}
        <line x1="166" y1="30" x2="174" y2="72" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />

        {/* Headlights */}
        <rect x="234" y="28" width="10" height="18" rx="3" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1" />
        <rect x="234" y="50" width="10" height="10" rx="2" fill="#fca5a5" stroke="#ef4444" strokeWidth="0.8" />

        {/* Front bumper perspective */}
        <path d="M 240 100 L 250 108 L 250 120 L 240 112 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
        <path d="M 240 112 L 250 120 L 14 120 L 14 112 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />

        {/* Side mirror */}
        <rect x="240" y="40" width="8" height="5" rx="1.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />

        {/* Exhaust stack */}
        <rect x="152" y="8" width="6" height="22" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />
        {/* Smoke puffs */}
        <circle cx="155" cy="6" r="3" fill="rgba(148,163,184,0.4)" />
        <circle cx="158" cy="2" r="2" fill="rgba(148,163,184,0.25)" />

        {/* ===== WHEELS ===== */}
        {/* Rear wheel */}
        <ellipse cx="58" cy="120" rx="22" ry="22" fill="url(#wheel-grad)" />
        <ellipse cx="58" cy="120" rx="14" ry="14" fill="#334155" />
        <ellipse cx="58" cy="120" rx="6" ry="6" fill="#64748b" />
        <ellipse cx="58" cy="120" rx="2" ry="2" fill="#94a3b8" />

        {/* Middle wheel */}
        <ellipse cx="108" cy="120" rx="22" ry="22" fill="url(#wheel-grad)" />
        <ellipse cx="108" cy="120" rx="14" ry="14" fill="#334155" />
        <ellipse cx="108" cy="120" rx="6" ry="6" fill="#64748b" />
        <ellipse cx="108" cy="120" rx="2" ry="2" fill="#94a3b8" />

        {/* Front wheel */}
        <ellipse cx="200" cy="120" rx="22" ry="22" fill="url(#wheel-grad)" />
        <ellipse cx="200" cy="120" rx="14" ry="14" fill="#334155" />
        <ellipse cx="200" cy="120" rx="6" ry="6" fill="#64748b" />
        <ellipse cx="200" cy="120" rx="2" ry="2" fill="#94a3b8" />

        {/* Ground shadow ellipse */}
        <ellipse cx="130" cy="144" rx="110" ry="8" fill="rgba(0,0,0,0.08)" />

      </g>
    </svg>
  );
}

/**
 * Small truck used for the animated route overlay
 */
function TruckSmall() {
  return (
    <svg width="110" height="60" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ts-shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.18)" />
        </filter>
        <linearGradient id="ts-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="ts-side" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="ts-wind" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="ts-wheel" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <g filter="url(#ts-shadow)">
        <path d="M 14 36 L 152 24 L 168 36 L 30 48 Z" fill="url(#ts-top)" stroke="#cbd5e1" strokeWidth="0.8" />
        <path d="M 14 36 L 14 112 L 152 112 L 152 24 Z" fill="url(#ts-side)" stroke="#cbd5e1" strokeWidth="0.8" />
        <path d="M 152 24 L 168 36 L 240 36 L 240 24 Z" fill="url(#ts-top)" stroke="#cbd5e1" strokeWidth="0.8" />
        <path d="M 152 24 L 152 112 L 240 112 L 240 24 Z" fill="url(#ts-side)" stroke="#cbd5e1" strokeWidth="0.8" />
        <path d="M 158 30 L 158 72 L 234 72 L 234 30 Z" fill="url(#ts-wind)" stroke="#93c5fd" strokeWidth="1" />
        <rect x="234" y="28" width="10" height="18" rx="3" fill="#fef9c3" stroke="#fbbf24" strokeWidth="0.8" />
        <path d="M 240 112 L 250 120 L 14 120 L 14 112 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
        <ellipse cx="58" cy="122" rx="20" ry="20" fill="url(#ts-wheel)" />
        <ellipse cx="58" cy="122" rx="12" ry="12" fill="#334155" />
        <ellipse cx="108" cy="122" rx="20" ry="20" fill="url(#ts-wheel)" />
        <ellipse cx="108" cy="122" rx="12" ry="12" fill="#334155" />
        <ellipse cx="200" cy="122" rx="20" ry="20" fill="url(#ts-wheel)" />
        <ellipse cx="200" cy="122" rx="12" ry="12" fill="#334155" />
      </g>
    </svg>
  );
}

function HouseSVG({ visible, delivered }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        pointerEvents: 'none',
      }}
    >
      <svg width="100" height="96" viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="48" width="70" height="44" rx="3" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
        <path d="M8 50 L50 12 L92 50 Z" fill="#2563eb" />
        <rect x="37" y="64" width="26" height="28" rx="2" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
        <circle cx="58" cy="78" r="2" fill="#2563eb" />
        <rect x="19" y="57" width="18" height="16" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="63" y="57" width="18" height="16" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
        <rect x="65" y="18" width="10" height="22" rx="2" fill="#1d4ed8" />
        {delivered && (
          <rect x="40" y="57" width="20" height="14" rx="2" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
        )}
      </svg>
      {delivered && (
        <div style={{
          textAlign: 'center',
          color: '#2563eb',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: '700',
          fontSize: '12px',
          marginTop: '4px',
          animation: 'fadeInUp 0.5s ease forwards',
        }}>
          Entregue! ✓
        </div>
      )}
    </div>
  );
}

export default function TruckRoute() {
  const pathRef = useRef(null);
  const truckRef = useRef(null);
  const trailRef = useRef(null);
  const animFrameRef = useRef(null);

  const [houseVisible, setHouseVisible] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [housePos, setHousePos] = useState({ x: 0, y: 0 });
  const [pathD, setPathD] = useState('');
  const [svgDims, setSvgDims] = useState({ w: 1200, h: 5000 });

  const buildPath = useCallback(() => {
    const pageW = document.body.scrollWidth;
    const pageH = document.body.scrollHeight;
    const pw = pageW;

    // The truck starts at the RIGHT side of the hero (hero is about 100vh tall)
    // Then zigzags left → right → left ... until the footer
    const heroH = window.innerHeight;

    const points = [
      // Start — hero right side, vertically centered
      { x: pw * 0.76, y: heroH * 0.52 },
      // Curve down-left into metrics/features
      { x: pw * 0.68, y: heroH * 0.75 },
      { x: pw * 0.42, y: pageH * 0.17 },
      { x: pw * 0.12, y: pageH * 0.22 },
      // Curve right
      { x: pw * 0.06, y: pageH * 0.27 },
      { x: pw * 0.32, y: pageH * 0.32 },
      { x: pw * 0.76, y: pageH * 0.37 },
      // Curve left
      { x: pw * 0.88, y: pageH * 0.43 },
      { x: pw * 0.58, y: pageH * 0.48 },
      { x: pw * 0.10, y: pageH * 0.52 },
      // Curve right
      { x: pw * 0.06, y: pageH * 0.57 },
      { x: pw * 0.38, y: pageH * 0.62 },
      { x: pw * 0.80, y: pageH * 0.67 },
      // Curve left
      { x: pw * 0.86, y: pageH * 0.72 },
      { x: pw * 0.52, y: pageH * 0.77 },
      { x: pw * 0.08, y: pageH * 0.82 },
      // Final approach to house — center bottom
      { x: pw * 0.06, y: pageH * 0.86 },
      { x: pw * 0.38, y: pageH * 0.91 },
      { x: pw * 0.50, y: pageH * 0.94 },
    ];

    // Build smooth cubic bezier path
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length - 2; i += 3) {
      const p1 = points[i];
      const p2 = points[i + 1] || points[i];
      const p3 = points[i + 2] || points[i + 1] || points[i];
      d += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;
    }

    const lastP = points[points.length - 1];
    setHousePos({ x: lastP.x, y: lastP.y });
    setSvgDims({ w: pageW, h: pageH });
    setPathD(d);
  }, []);

  useEffect(() => {
    // Wait a tick so page has full height
    const timeout = setTimeout(buildPath, 300);
    const onResize = () => { clearTimeout(timeout); buildPath(); };
    window.addEventListener('resize', onResize);
    return () => { clearTimeout(timeout); window.removeEventListener('resize', onResize); };
  }, [buildPath]);

  useEffect(() => {
    if (!pathD) return;

    const updateTruck = () => {
      const path = pathRef.current;
      const truck = truckRef.current;
      const trail = trailRef.current;
      if (!path || !truck || !trail) return;

      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      const totalLen = path.getTotalLength();
      const traveled = progress * totalLen;

      const pt = path.getPointAtLength(traveled);
      const ptAhead = path.getPointAtLength(Math.min(traveled + 10, totalLen));

      const dx = ptAhead.x - pt.x;
      const dy = ptAhead.y - pt.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const clampedAngle = Math.max(-25, Math.min(25, angle));

      // Truck is 110px wide x 60px tall — center it on the path point
      truck.style.transform = `translate(${pt.x - 55}px, ${pt.y - 30}px) rotate(${clampedAngle}deg)`;
      trail.style.strokeDashoffset = String(totalLen - traveled);

      if (progress > 0.90) {
        setHouseVisible(true);
        if (progress > 0.97) setDelivered(true);
      } else {
        setHouseVisible(false);
        setDelivered(false);
      }
    };

    const onScroll = () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(updateTruck);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateTruck();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [pathD]);

  if (!pathD) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 20,
        overflow: 'hidden',
      }}
    >
      <svg
        width={svgDims.w}
        height={svgDims.h}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Hidden path for measurement */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />

        {/* Faint road guide */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="5"
          strokeDasharray="12 8"
        />

        {/* Trail that reveals as truck moves */}
        <path
          ref={trailRef}
          d={pathD}
          fill="none"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="4"
          strokeDasharray="10 6"
          style={{
            strokeDashoffset: 99999,
            transition: 'stroke-dashoffset 0.06s linear',
          }}
        />

        {/* Truck — positioned via JS */}
        <g ref={truckRef} style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}>
          <foreignObject x="0" y="0" width="110" height="60">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <TruckSmall />
            </div>
          </foreignObject>
        </g>
      </svg>

      {/* House at end */}
      <div
        style={{
          position: 'absolute',
          left: housePos.x - 50,
          top: housePos.y - 96,
          pointerEvents: 'none',
        }}
      >
        <HouseSVG visible={houseVisible} delivered={delivered} />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
