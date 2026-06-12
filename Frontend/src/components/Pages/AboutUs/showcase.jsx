import React from "react";
import "./showcase.css";

const Showcase = () => {
  return (
    <div className="bodyWrapper">
      <h1 className="whychooseus-label show-case-label">
        Innovative Solutions for Modern Businesses
      </h1>

      <div className="container diagram">
        <svg viewBox="0 0 1100 640" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="circleGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pillGlow" x="-15%" y="-35%" width="130%" height="170%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="pillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#001a2e" />
              <stop offset="100%" stopColor="#b19a18" />
            </linearGradient>

            <marker id="arrG" markerWidth="8" markerHeight="7" refX="7.5" refY="3.5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0.5 L0,6.5 L7.5,3.5 Z" fill="#c07f1e" />
            </marker>
            <marker id="arrC" markerWidth="8" markerHeight="7" refX="7.5" refY="3.5" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0.5 L0,6.5 L7.5,3.5 Z" fill="#c07f1e" />
            </marker>


            <radialGradient id="spaceBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#001a2e" />
              <stop offset="100%" stopColor="#020a0f" />
            </radialGradient>

            <radialGradient id="centerBg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#041e30" />
              <stop offset="100%" stopColor="#010d18" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="1100" height="640" fill="url(#spaceBg)" />

          {/* Subtle Grid */}
          <g stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1">
            <line x1="0" y1="80" x2="1100" y2="80" />
            <line x1="0" y1="160" x2="1100" y2="160" />
            <line x1="0" y1="240" x2="1100" y2="240" />
            <line x1="0" y1="320" x2="1100" y2="320" />
            <line x1="0" y1="400" x2="1100" y2="400" />
            <line x1="0" y1="480" x2="1100" y2="480" />
            <line x1="0" y1="560" x2="1100" y2="560" />
            <line x1="100" y1="0" x2="100" y2="640" />
            <line x1="200" y1="0" x2="200" y2="640" />
            <line x1="300" y1="0" x2="300" y2="640" />
            <line x1="400" y1="0" x2="400" y2="640" />
            <line x1="500" y1="0" x2="500" y2="640" />
            <line x1="600" y1="0" x2="600" y2="640" />
            <line x1="700" y1="0" x2="700" y2="640" />
            <line x1="800" y1="0" x2="800" y2="640" />
            <line x1="900" y1="0" x2="900" y2="640" />
            <line x1="1000" y1="0" x2="1000" y2="640" />
          </g>



          {/* Orbit Rings */}


          {/* Left Arrows */}
          <g>
            <path d="M 470,213 Q 412,122 368,96" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrG)" filter="url(#neon)" />
            <path d="M 426,264 Q 388,220 326,218" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrG)" filter="url(#neon)" />
            <path d="M 426,352 Q 368,376 282,362" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrG)" filter="url(#neon)" />
            <path d="M 478,427 Q 412,480 360,490" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrG)" filter="url(#neon)" />
          </g>

          {/* Right Arrows */}
          <g>
            <path d="M 632,213 Q 688,122 732,96" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrC)" filter="url(#neon)" />
            <path d="M 674,264 Q 732,230 764,228" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrC)" filter="url(#neon)" />
            <path d="M 674,352 Q 732,376 786,362" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrC)" filter="url(#neon)" />
            <path d="M 632,427 Q 688,480 740,490" fill="none" stroke="#c07f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" markerEnd="url(#arrC)" filter="url(#neon)" />
          </g>

          {/* Center Circle */}

          <circle cx="550" cy="320" r="90" fill="url(#centerBg)" />
          <circle cx="550" cy="320" r="90" fill="none" stroke="#c07f1e" strokeWidth="2" opacity="0.75" filter="url(#neon)" />




          <image
            href="https://ahaanmedia.com/asc/layouts/fav.png"
            x="490"
            y="265"
            width="120"
            height="120"
          />

          {/* Left Pills */}
          {/* Pill 0 */}
          <g>
            <rect x="42" y="44" width="276" height="68" rx="8" fill="url(#pillGrad)" />
            <rect x="42" y="44" width="276" height="68" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="42" y1="56" x2="42" y2="44" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="42" y1="44" x2="58" y2="44" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="318" y1="100" x2="318" y2="112" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="302" y1="112" x2="318" y2="112" stroke="#ffffff" strokeWidth="2.5" />
            <text x="180" y="82" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '16px' }}>Web/Graphics Design </text>

          </g>

          {/* Pill 1 */}
          <g>
            <rect x="42" y="188" width="236" height="54" rx="8" fill="url(#pillGrad)" />
            <rect x="42" y="188" width="236" height="54" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="42" y1="200" x2="42" y2="188" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="42" y1="188" x2="58" y2="188" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="278" y1="242" x2="278" y2="230" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="262" y1="242" x2="278" y2="242" stroke="#ffffff" strokeWidth="2.5" />
            <text x="160" y="220" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '14px' }}>UI/UX Design</text>
          </g>

          {/* Pill 2 */}
          <g>
            <rect x="42" y="328" width="186" height="54" rx="8" fill="url(#pillGrad)" />
            <rect x="42" y="328" width="186" height="54" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="42" y1="340" x2="42" y2="328" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="42" y1="328" x2="58" y2="328" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="228" y1="382" x2="228" y2="370" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="212" y1="382" x2="228" y2="382" stroke="#ffffff" strokeWidth="2.5" />
            <text x="135" y="360" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '14px' }}>Web Development</text>
          </g>

          {/* Pill 3 */}
          <g>
            <rect x="42" y="470" width="260" height="54" rx="8" fill="url(#pillGrad)" />
            <rect x="42" y="470" width="260" height="54" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="42" y1="482" x2="42" y2="470" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="42" y1="470" x2="58" y2="470" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="302" y1="524" x2="302" y2="512" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="286" y1="524" x2="302" y2="524" stroke="#ffffff" strokeWidth="2.5" />
            <text x="172" y="502" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '16px' }}>IT Business Consultancy</text>
          </g>

          {/* Right Pills */}
          {/* Pill 0 */}
          <g>
            <rect x="782" y="44" width="292" height="68" rx="8" fill="url(#pillGrad)" />
            <rect x="782" y="44" width="292" height="68" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="782" y1="56" x2="782" y2="44" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="782" y1="44" x2="798" y2="44" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1074" y1="100" x2="1074" y2="112" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1058" y1="112" x2="1074" y2="112" stroke="#ffffff" strokeWidth="2.5" />
            <text x="928" y="82" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '16px' }}>Custom Web Application</text>

          </g>

          {/* Pill 1 */}
          <g>
            <rect x="782" y="188" width="292" height="68" rx="8" fill="url(#pillGrad)" />
            <rect x="782" y="188" width="292" height="68" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="782" y1="200" x2="782" y2="188" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="782" y1="188" x2="798" y2="188" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1074" y1="244" x2="1074" y2="256" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1058" y1="256" x2="1074" y2="256" stroke="#ffffff" strokeWidth="2.5" />
            <text x="928" y="226" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '14px' }}>Mobile App Design & Development</text>

          </g>

          {/* Pill 2 */}
          <g>
            <rect x="812" y="328" width="186" height="54" rx="8" fill="url(#pillGrad)" />
            <rect x="812" y="328" width="186" height="54" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="812" y1="340" x2="812" y2="328" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="812" y1="328" x2="828" y2="328" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="998" y1="382" x2="998" y2="370" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="982" y1="382" x2="998" y2="382" stroke="#ffffff" strokeWidth="2.5" />
            <text x="905" y="360" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '13px' }}>Digital Marketing & SEO</text>
          </g>

          {/* Pill 3 */}
          <g>
            <rect x="782" y="470" width="268" height="54" rx="8" fill="url(#pillGrad)" />
            <rect x="782" y="470" width="268" height="54" rx="8" fill="none" stroke="#c07f1e" strokeWidth="1.5" opacity="0.85" filter="url(#pillGlow)" />
            <line x1="782" y1="482" x2="782" y2="470" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="782" y1="470" x2="798" y2="470" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1050" y1="524" x2="1050" y2="512" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="1034" y1="524" x2="1050" y2="524" stroke="#ffffff" strokeWidth="2.5" />
            <text x="916" y="502" textAnchor="middle" fill="#ffffff" filter="url(#neon)" className="svgMonoText" style={{ fontSize: '14px' }}>Maintenance & Technical Support</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Showcase;