import { useEffect, useRef, useState } from "react";
import "./OurProcess.css";

const steps = [
  {
    num: "01",
    phase: "phase 01",
    title: "Discovery & Planning",
    desc: "Define goals, scope, audience & wireframe the full roadmap.",
  },
  {
    num: "02",
    phase: "phase 02",
    title: "Design & Prototyping",
    desc: "Craft UI/UX system & deliver interactive high-fidelity mockups.",
  },
  {
    num: "03",
    phase: "phase 03",
    title: "Development & Testing",
    desc: "Full-stack build, API integration & rigorous QA across all devices.",
  },
  {
    num: "04",
    phase: "phase 04",
    title: "Launch & Growth",
    desc: "Deploy to production, SEO setup & post-launch monitoring.",
  },
];

const OurProcess = () => {
  const [visible, setVisible] = useState([]);
  const [done, setDone] = useState([]);
  const cellRefs = useRef([]);

  useEffect(() => {
    const observers = cellRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
            setDone((prev) => {
              const next = [...prev];
              for (let i = 0; i < idx; i++) {
                if (!next.includes(i)) next.push(i);
              }
              return next;
            });
          }
        },
        { threshold: 0.45 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="op-root">
      <div className="container">
        <div className="op-header">

          <p className=" whychooseus-label ">
            Our Process
          </p>
        </div>

        <div className="op-grid">
          {steps.map((step, idx) => {
            const isVisible = visible.includes(idx);
            const isDone = done.includes(idx);
            return (
              <div
                key={idx}
                ref={(el) => (cellRefs.current[idx] = el)}
                className={[
                  "op-cell",
                  isVisible ? "visible" : "",
                  isDone ? "done" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ transitionDelay: `${(idx % 2) * 0.15}s` }}
              >
                <div className="op-bignum">
                  <span
                    className="op-num-base"

                  >
                    {step.num}
                  </span>

                  <span className="op-num-stroke">
                    {step.num}
                  </span>

                  <span className="op-num-fill" style={{ color: "#1c1500" }}>
                    {step.num}
                  </span>
                </div>

                <div className="op-bar" />

                <div className="op-content">
                  <div className="op-phase">{step.phase}</div>
                  <div className="op-step-title">{step.title}</div>
                  <div className="op-desc">{step.desc}</div>
                </div>


                <div className="op-scanline" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
