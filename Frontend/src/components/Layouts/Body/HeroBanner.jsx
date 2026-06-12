import React, { useEffect, useRef } from "react";
import "./HeroBanner.css";
import BannerContent from "./BannerContent";

const rand = (a, b) => a + Math.random() * (b - a);

function projectLatLon(lat, lon, cx, cy, r, rotation) {
  const lonR = lon + rotation;
  const x = cx + r * Math.cos(lat) * Math.sin(lonR);
  const y = cy - r * Math.sin(lat);
  const z = Math.cos(lat) * Math.cos(lonR); 
  return { x, y, z };
}

const HeroBanner = () => {
  const canvasRef = useRef(null);
  const networkRef = useRef(null);
  const globeRef = useRef(null);
  const wrapperRef = useRef(null); // Ref to scale the CSS HTML elements simultaneously

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const netCanvas = networkRef.current;
    const nctx = netCanvas.getContext("2d");

    let w = (canvas.width = netCanvas.width = window.innerWidth);
    let h = (canvas.height = netCanvas.height = window.innerHeight);

    // Subtle, clean background stars
    const stars = [];
    const numStars = 120;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        dx: (Math.random() - 0.5) * 0.05,
        dy: (Math.random() - 0.5) * 0.05,
      });
    }

    // Network Setup
    const nodes = [];
    const connections = [];
    const numNodes = 24;

    for (let i = 0; i < numNodes; i++) {
      const lat = rand(-Math.PI / 2.3, Math.PI / 2.3);
      const lon = rand(-Math.PI, Math.PI);
      nodes.push({ lat, lon });
    }

    for (let i = 0; i < 35; i++) {
      const a = Math.floor(Math.random() * numNodes);
      let b = Math.floor(Math.random() * numNodes);
      if (b === a) b = (b + 1) % numNodes;
      const speed = rand(0.003, 0.008);
      const offset = Math.random() * Math.PI * 2;
      connections.push({ a, b, speed, t: Math.random(), offset });
    }

    let baseRotation = 0;
    const rotationSpeed = 0.0015; 

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = netCanvas.width = w * dpr;
      canvas.height = netCanvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      nctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const drawStars = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const drawNetwork = (currentScroll, currentScale) => {
      nctx.clearRect(0, 0, w, h);

      let globeRect = null;
      if (globeRef.current) globeRect = globeRef.current.getBoundingClientRect();

      // Dynamic calculation adjustments for canvas elements 
      const cx = globeRect ? globeRect.left + globeRect.width / 2 : w / 2;
      const cy = globeRect ? globeRect.top + currentScroll + globeRect.width / 2 : h + 200;
      
      // Calculate active base radius downscaled by scroll factor
      const baseRadius = globeRect ? globeRect.width / 2 : Math.max(w, h) * 0.55;
      const r = baseRadius * currentScale;

      // Dynamic scroll rotation factor (adds extra spin as you scroll down)
      const dynamicRotation = baseRotation + currentScroll * 0.0015;

      // --- 1. PROFESSIONAL TECH GRID SYSTEM (LAT/LON WIREFRAME) ---
      nctx.save();
      for (let g = -5; g <= 5; g++) {
        nctx.beginPath();
        const latg = (g / 6) * (Math.PI / 2);
        let first = true;
        for (let i = 0; i <= 90; i++) {
          const lonp = (i / 90) * Math.PI * 2 - Math.PI;
          const p = projectLatLon(latg, lonp, cx, cy, r, dynamicRotation);
          
          if (p.z < 0) continue; 
          
          if (first) {
            nctx.moveTo(p.x, p.y);
            first = false;
          } else {
            nctx.lineTo(p.x, p.y);
          }
        }
        nctx.strokeStyle = `rgba(0, 180, 255, ${0.07 * (1 - Math.abs(g)/6)})`;
        nctx.lineWidth = 0.8;
        nctx.stroke();
      }

      for (let g = 0; g < 12; g++) {
        nctx.beginPath();
        const long = (g / 12) * Math.PI * 2;
        let first = true;
        for (let i = -45; i <= 45; i++) {
          const latp = (i / 45) * (Math.PI / 2);
          const p = projectLatLon(latp, long, cx, cy, r, dynamicRotation);
          
          if (p.z < 0) continue;

          if (first) {
            nctx.moveTo(p.x, p.y);
            first = false;
          } else {
            nctx.lineTo(p.x, p.y);
          }
        }
        nctx.strokeStyle = "rgba(0, 180, 255, 0.05)";
        nctx.lineWidth = 0.8;
        nctx.stroke();
      }
      nctx.restore();

      // --- 2. CALCULATE NODE POSITIONS ---
      const projected = nodes.map((n) =>
        projectLatLon(n.lat, n.lon, cx, cy, r, dynamicRotation)
      );

      // --- 3. DRAW CURVED ARCHES ---
      const connWithDepth = connections.map((c) => {
        const p1 = projected[c.a];
        const p2 = projected[c.b];
        const depth = (p1.z + p2.z) / 2;
        return { ...c, p1, p2, depth };
      });
      
      connWithDepth.sort((a, b) => a.depth - b.depth);

      for (const conn of connWithDepth) {
        const { p1, p2 } = conn;
        if (p1.z < -0.1 && p2.z < -0.1) continue;

        const grad = nctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        const alphaFactor = Math.max(0, conn.depth + 0.2);
        grad.addColorStop(0, `rgba(0, 210, 255, ${0.02 * alphaFactor})`);
        grad.addColorStop(0.5, `rgba(100, 230, 255, ${0.25 * alphaFactor})`);
        grad.addColorStop(1, `rgba(0, 255, 180, ${0.02 * alphaFactor})`);

        nctx.strokeStyle = grad;
        nctx.lineWidth = (0.5 + Math.max(0, conn.depth) * 1.5) * currentScale;

        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        const vx = mx - cx;
        const vy = my - cy;
        const dist = Math.sqrt(vx * vx + vy * vy);
        const outward = Math.min(120, r * 0.18);
        const factor = 1 + (1 - conn.depth) * 0.4;
        const cxp = mx + (vx / (dist || 1)) * outward * factor;
        const cyp = my + (vy / (dist || 1)) * outward * factor;

        nctx.beginPath();
        nctx.moveTo(p1.x, p1.y);
        nctx.quadraticCurveTo(cxp, cyp, p2.x, p2.y);
        nctx.stroke();

        conn.t = (conn.t + conn.speed) % 1;
        const t = (Math.sin(conn.t * Math.PI * 2 + conn.offset) + 1) / 2;
        const x = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * cxp + t * t * p2.x;
        const y = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cyp + t * t * p2.y;
        
        const currentZ = (1 - t) * p1.z + t * p2.z;
        if (currentZ > 0) {
          const dotSize = (1.2 + currentZ * 2.5) * currentScale;
          nctx.beginPath();
          nctx.fillStyle = `rgba(255, 255, 255, ${0.4 + currentZ * 0.6})`;
          nctx.shadowColor = "#00f0ff";
          nctx.shadowBlur = 6;
          nctx.arc(x, y, dotSize, 0, Math.PI * 2);
          nctx.fill();
          nctx.shadowBlur = 0;
        }
      }

      // --- 4. DRAW CORES & NODES ---
      const projSorted = projected
        .map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.z - b.p.z);

      for (const { p } of projSorted) {
        if (p.z < 0) continue; 
        
        const size = (1.5 + p.z * 3) * currentScale;
        
        nctx.beginPath();
        nctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * p.z})`;
        nctx.lineWidth = 1;
        nctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        nctx.stroke();

        nctx.beginPath();
        nctx.fillStyle = `rgba(255, 255, 255, ${0.7 * p.z + 0.3})`;
        nctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        nctx.fill();
      }
    };

    let rafId = 0;
    const loop = () => {
      baseRotation += rotationSpeed;
      
      // Handle Scroll metrics cleanly in loop
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Calculate dynamic scale factor (Shrinks up to 35% smaller the further you scroll)
      // Clamps scale between 0.65 and 1.0
      const targetScale = Math.max(0.65, 1 - scrollY / 1500);

      // Apply scale matrix transformation on HTML Earth element layers
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translateX(-50%) scale(${targetScale})`;
      }

      drawStars();
      drawNetwork(scrollY, targetScale);
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hero-banner">
      <canvas ref={canvasRef} className="stars" />
      <canvas ref={networkRef} className="network" />

      {/* Added ref={wrapperRef} to cleanly scale DOM visuals alongside Canvas coordinates */}
      <div className="earth-wrapper" ref={wrapperRef}>
        <div className="earth" ref={globeRef} />
        <div className="earth-scanner" />
        <div className="earth-glow" />
      </div>

      <BannerContent />
    </div>
  );
};

export default HeroBanner;