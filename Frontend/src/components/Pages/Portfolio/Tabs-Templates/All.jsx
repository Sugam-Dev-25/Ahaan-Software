import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import ONCE here only — not in child components
import "./All.css";

// ✅ Lazy load each section — they only parse+execute JS when scrolled into view
// This dramatically reduces initial JS parse time, especially on low-end Android/iOS
const WebDevelopment     = lazy(() => import("./WebDevelopment"));
const UiUxDesign         = lazy(() => import("./UiUxDesign"));
const SocialMediaMarketing = lazy(() => import("./SocialMediaMarketing"));
const AppDevelopment     = lazy(() => import("./AppDevelopment"));

// ✅ Lightweight fallback shown while each section loads
const SectionSkeleton = () => (
  <div style={{ minHeight: 300, background: "#f8f8f8", borderRadius: 12, margin: "24px 0" }} />
);

const All = () => (
  <div className="uiux-gallery-container container py-1">
    {/* ✅ Each section is independently lazy — one slow API won't block others */}
    <Suspense fallback={<SectionSkeleton />}>
      <div className="mb-5">
        <WebDevelopment />
      </div>
    </Suspense>

    <hr className="hr-style" />

    <Suspense fallback={<SectionSkeleton />}>
      <div className="mb-5">
        <UiUxDesign />
      </div>
    </Suspense>

    <hr className="hr-style" />

    <Suspense fallback={<SectionSkeleton />}>
      <div className="mb-5">
        <SocialMediaMarketing />
      </div>
    </Suspense>

    <hr className="hr-style" />

    <Suspense fallback={<SectionSkeleton />}>
      <div className="mb-5">
        <AppDevelopment />
      </div>
    </Suspense>
  </div>
);

export default All;
