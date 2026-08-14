import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Full detail Truck SVG (facing right = default) ─── */
export function TruckSVG({ scale = 1, facing = 'right', id = 'truck-svg' }) {
  const scaleX = facing === 'left' ? -1 : 1;
  return (
    <svg
      id={id}
      width={400 * scale}
      height={168 * scale}
      viewBox="0 0 400 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', transform: `scaleX(${scaleX})` }}
    >
      {/* Shadow */}
      <ellipse cx="200" cy="158" rx="175" ry="10" fill="rgba(0,0,0,0.4)" />

      {/* Chassis */}
      <rect x="20" y="112" width="330" height="15" rx="3" fill="#0f172a" />

      {/* Cargo body */}
      <rect x="20" y="40" width="235" height="75" rx="5" fill="#eef2ff" />
      <rect x="20" y="40" width="235" height="7" rx="4" fill="#dde8ff" />
      {/* Blue stripe */}
      <rect x="20" y="98" width="235" height="8" rx="0" fill="#1a56db" />
      {/* ROTAJÁ text on cargo */}
      <rect x="60" y="56" width="110" height="28" rx="3" fill="rgba(26,86,219,0.12)" stroke="rgba(26,86,219,0.35)" strokeWidth="1" />
      <text x="115" y="75" textAnchor="middle" fill="#1a56db" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif" letterSpacing="-0.5">ROTAJÁ</text>
      {/* Door lines */}
      <line x1="140" y1="47" x2="140" y2="106" stroke="#c8d8ff" strokeWidth="1.5" />
      <line x1="195" y1="47" x2="195" y2="106" stroke="#c8d8ff" strokeWidth="1.5" />
      <rect x="248" y="74" width="5" height="15" rx="2.5" fill="#94a3b8" />

      {/* Cabin */}
      <path d="M255 63 L255 112 L360 112 L360 76 L335 50 L255 50 Z" fill="#1a56db" />
      <path d="M255 63 L255 50 L335 50 L360 76 L360 63 Z" fill="#1042b8" />
      {/* Windshield */}
      <path d="M263 55 L263 82 L352 82 L352 68 L330 55 Z" fill="rgba(147,197,253,0.75)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M270 57 L285 57 L285 80 L270 80 Z" fill="rgba(255,255,255,0.12)" />
      {/* Side window */}
      <rect x="261" y="85" width="70" height="17" rx="3" fill="rgba(147,197,253,0.55)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Door handle */}
      <rect x="305" y="92" width="12" height="3.5" rx="1.75" fill="rgba(255,255,255,0.5)" />
      {/* Cabin stripe */}
      <rect x="255" y="104" width="105" height="4" rx="0" fill="#0d3db5" />
      {/* Front grill */}
      <rect x="350" y="76" width="15" height="32" rx="2" fill="#0d2d8a" />
      {[79, 85, 91, 97, 103].map(y => (
        <line key={y} x1="350" y1={y} x2="365" y2={y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      ))}
      {/* Bumper */}
      <rect x="348" y="106" width="18" height="9" rx="2.5" fill="#e2e8f0" />
      {/* Headlights */}
      <rect x="362" y="78" width="6" height="9" rx="1.5" fill="#fefce8" />
      <rect x="362" y="93" width="6" height="5" rx="1.5" fill="rgba(255,235,100,0.55)" />
      <rect x="366" y="80" width="3" height="5" rx="1" fill="rgba(255,255,200,0.95)" />
      {/* Mirror */}
      <rect x="362" y="64" width="9" height="6" rx="1.5" fill="#0d2d8a" />
      {/* Exhaust */}
      <rect x="250" y="44" width="5" height="16" rx="2.5" fill="#334155" />
      <circle cx="252" cy="40" r="3.5" fill="rgba(200,220,255,0.12)" />
      <circle cx="255" cy="34" r="2.5" fill="rgba(200,220,255,0.08)" />
      {/* Fuel tank */}
      <rect x="218" y="100" width="26" height="18" rx="3.5" fill="#94a3b8" />
      <rect x="222" y="104" width="18" height="10" rx="2.5" fill="#64748b" />

      {/* Front Wheel */}
      {[330, 100, 45].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy={132} r={20} fill="#0f172a" />
          <circle cx={cx} cy={132} r={14} fill="#1e293b" />
          <circle cx={cx} cy={132} r={8} fill="#334155" />
          <circle cx={cx} cy={132} r={3.5} fill="#60a5fa" />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <line
              key={angle}
              x1={cx + 9 * Math.cos((angle * Math.PI) / 180)}
              y1={132 + 9 * Math.sin((angle * Math.PI) / 180)}
              x2={cx + 14 * Math.cos((angle * Math.PI) / 180)}
              y2={132 + 14 * Math.sin((angle * Math.PI) / 180)}
              stroke="#475569"
              strokeWidth="1.5"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ─── Speed line particle ─── */
function createSpeedLines(container, x, y, count = 6, facing = 'right') {
  for (let i = 0; i < count; i++) {
    const line = document.createElement('div');
    const width = 40 + Math.random() * 80;
    const offsetY = (Math.random() - 0.5) * 60;
    const delay = Math.random() * 200;
    line.style.cssText = `
      position: absolute;
      height: 2px;
      width: ${width}px;
      border-radius: 2px;
      background: linear-gradient(${facing === 'right' ? '90deg' : '270deg'}, 
        rgba(26,86,219,0.8) 0%, 
        rgba(59,130,246,0.4) 60%, 
        transparent 100%
      );
      top: ${y + offsetY}px;
      ${facing === 'right' ? `right: ${window.innerWidth - x}px` : `left: ${x}px`};
      opacity: 0;
      transform: scaleX(0);
      transform-origin: ${facing === 'right' ? 'right' : 'left'} center;
      pointer-events: none;
    `;
    container.appendChild(line);
    setTimeout(() => {
      line.style.transition = 'transform 0.35s ease-out, opacity 0.35s ease-out';
      line.style.transform = 'scaleX(1)';
      line.style.opacity = '1';
      setTimeout(() => {
        line.style.opacity = '0';
        setTimeout(() => line.remove(), 350);
      }, 200);
    }, delay);
  }
}

/* ─── Trail particles going up ─── */
function createTrailParticles(container, x, y, count = 8) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = 4 + Math.random() * 8;
    const offsetX = (Math.random() - 0.5) * 100;
    const delay = Math.random() * 400;
    p.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(26,86,219,${0.4 + Math.random() * 0.4});
      left: ${x + offsetX}px;
      top: ${y}px;
      pointer-events: none;
    `;
    container.appendChild(p);
    setTimeout(() => {
      p.style.transition = `transform 0.8s ease-out, opacity 0.8s ease-out`;
      p.style.transform = `translateY(-${60 + Math.random() * 80}px)`;
      p.style.opacity = '0';
      setTimeout(() => p.remove(), 800);
    }, delay);
  }
}

/* ─── Curtain transition ─── */
function triggerCurtain(onMidpoint) {
  const curtainL = document.createElement('div');
  const curtainR = document.createElement('div');
  const shared = `
    position: fixed; top: 0; bottom: 0; width: 50%; 
    background: #1a56db; z-index: 200; pointer-events: none;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  `;
  curtainL.style.cssText = shared + 'left: 0; transform-origin: left; transform: scaleX(0);';
  curtainR.style.cssText = shared + 'right: 0; transform-origin: right; transform: scaleX(0);';
  document.body.appendChild(curtainL);
  document.body.appendChild(curtainR);

  requestAnimationFrame(() => {
    curtainL.style.transform = 'scaleX(1)';
    curtainR.style.transform = 'scaleX(1)';
  });

  setTimeout(() => {
    onMidpoint?.();
    curtainL.style.transform = 'scaleX(0)';
    curtainR.style.transform = 'scaleX(0)';
    setTimeout(() => {
      curtainL.remove();
      curtainR.remove();
    }, 600);
  }, 520);
}


/* ─── Main Truck Animator Component ─── */
export default function TruckAnimator() {
  const layerRef = useRef(null);
  const truckWrapRef = useRef(null);
  const triggersRef = useRef([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    const truckWrap = truckWrapRef.current;
    if (!layer || !truckWrap) return;

    const truck = truckWrap.querySelector('svg');

    // ─ Helper: get section midpoint Y in viewport ─
    const getSectionMid = (id) => {
      const el = document.getElementById(id);
      if (!el) return window.innerHeight / 2;
      const rect = el.getBoundingClientRect();
      return rect.top + rect.height / 2;
    };

    // ─ Phase 1: Left-to-right in "Sobre" section ─
    const trigger1 = ScrollTrigger.create({
      trigger: '#sobre',
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => {
        // Reset position: start off-screen left
        gsap.set(truckWrap, {
          x: '-120vw',
          y: window.innerHeight * 0.55,
          opacity: 1,
          scaleX: 1,
          display: 'block',
        });
        if (truck) truck.style.transform = 'scaleX(1)';

        // Animate across
        gsap.to(truckWrap, {
          x: '110vw',
          duration: 2.2,
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = this.progress();
            // Spawn speed lines at midpoint
            if (progress > 0.3 && progress < 0.32) {
              const rect = truckWrap.getBoundingClientRect();
              createSpeedLines(layer, rect.left, rect.top + rect.height * 0.5, 8, 'right');
            }
            if (progress > 0.5 && progress < 0.52) {
              const rect = truckWrap.getBoundingClientRect();
              createTrailParticles(layer, rect.left + rect.width * 0.5, rect.top, 6);
            }
          },
          onComplete: () => {
            gsap.set(truckWrap, { display: 'none' });
          },
        });
      },
      onLeaveBack: () => {
        gsap.killTweensOf(truckWrap);
        gsap.set(truckWrap, { display: 'none' });
      },
    });

    // ─ Phase 2: Bottom-to-top in "Como Funciona" ─
    const trigger2 = ScrollTrigger.create({
      trigger: '#como-funciona',
      start: 'top 70%',
      end: 'center 40%',
      onEnter: () => {
        // Truck comes from bottom going up (facing up = tilt)
        // Use the truck facing left (mirror) to indicate going up
        if (truck) truck.style.transform = 'scaleX(-1) rotate(-90deg)';
        gsap.set(truckWrap, {
          x: '42vw',
          y: window.innerHeight + 100,
          opacity: 1,
          display: 'block',
        });

        gsap.to(truckWrap, {
          y: -window.innerHeight * 0.5,
          duration: 2.0,
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = this.progress();
            if (progress > 0.4 && progress < 0.42) {
              const rect = truckWrap.getBoundingClientRect();
              createTrailParticles(layer, rect.left + rect.width * 0.5, rect.bottom, 10);
            }
          },
          onComplete: () => {
            gsap.set(truckWrap, { display: 'none' });
            if (truck) truck.style.transform = 'scaleX(1)';
          },
        });
      },
      onLeaveBack: () => {
        gsap.killTweensOf(truckWrap);
        gsap.set(truckWrap, { display: 'none' });
        if (truck) truck.style.transform = 'scaleX(1)';
      },
    });

    // ─ Phase 3: Right-to-left in "Aplicativo" ─
    const trigger3 = ScrollTrigger.create({
      trigger: '#aplicativo',
      start: 'top 70%',
      end: 'center 40%',
      onEnter: () => {
        if (truck) truck.style.transform = 'scaleX(-1)'; // facing left
        gsap.set(truckWrap, {
          x: '110vw',
          y: window.innerHeight * 0.6,
          opacity: 1,
          display: 'block',
        });

        gsap.to(truckWrap, {
          x: '-120vw',
          duration: 2.4,
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = this.progress();
            if (progress > 0.3 && progress < 0.32) {
              const rect = truckWrap.getBoundingClientRect();
              createSpeedLines(layer, rect.right, rect.top + rect.height * 0.5, 8, 'left');
            }
            if (progress > 0.55 && progress < 0.57) {
              const rect = truckWrap.getBoundingClientRect();
              createTrailParticles(layer, rect.left + rect.width * 0.5, rect.top, 6);
            }
          },
          onComplete: () => {
            gsap.set(truckWrap, { display: 'none' });
            if (truck) truck.style.transform = 'scaleX(1)';
          },
        });
      },
      onLeaveBack: () => {
        gsap.killTweensOf(truckWrap);
        gsap.set(truckWrap, { display: 'none' });
        if (truck) truck.style.transform = 'scaleX(1)';
      },
    });

    // ─ Phase 4: Arrive at CTA / chegada ─
    const trigger4 = ScrollTrigger.create({
      trigger: '#chegada',
      start: 'top 65%',
      end: 'center 50%',
      onEnter: () => {
        if (truck) truck.style.transform = 'scaleX(1)';
        gsap.set(truckWrap, {
          x: '110vw',
          y: window.innerHeight * 0.45,
          opacity: 1,
          display: 'block',
        });

        // Drives in and brakes to a stop at center
        gsap.to(truckWrap, {
          x: 'calc(50vw - 200px)',
          duration: 1.6,
          ease: 'power3.out',
          onComplete: () => {
            // Brake wobble
            gsap.to(truckWrap, {
              x: 'calc(50vw - 195px)',
              duration: 0.1,
              yoyo: true,
              repeat: 3,
              ease: 'power1.inOut',
            });
            // Headlight glow effect
            const rect = truckWrap.getBoundingClientRect();
            createSpeedLines(layer, rect.right, rect.top + rect.height * 0.5, 12, 'left');
          },
        });
      },
      onLeaveBack: () => {
        gsap.killTweensOf(truckWrap);
        gsap.set(truckWrap, { display: 'none' });
      },
    });

    triggersRef.current = [trigger1, trigger2, trigger3, trigger4];

    return () => {
      triggersRef.current.forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={layerRef}
      id="truck-layer"
      aria-hidden="true"
    >
      <div
        ref={truckWrapRef}
        style={{
          position: 'absolute',
          display: 'none',
          filter: 'drop-shadow(0 15px 35px rgba(26,86,219,0.5))',
          willChange: 'transform',
          zIndex: 26,
        }}
      >
        <TruckSVG scale={0.9} />
      </div>
    </div>
  );
}
