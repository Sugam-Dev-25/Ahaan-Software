import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import WhatsAppChat from "./components/Whatsapp/WhatsAppChat";
import BlogDetails from "./components/Pages/Blog/BlogDetails";
import SearchResults from "./components/Pages/Blog/SearchResults";
import AllDevelopment from "./components/Pages/Portfolio/Tabs-Templates/AllDevelopment";
import AllUiUxDesign from "./components/Pages/Portfolio/Tabs-Templates/AllUiUxDesign";
import AhaanChat from "./components/AhaanAI/AhaanChat";
import PrivacyPolicy from "./components/QuickLinks/PrivacyPolicy";
import CookiePolicy from "./components/QuickLinks/CookiePolicy";
import GrievancePolicy from "./components/QuickLinks/GrievancePolicy";
import InformationSecurityPolicy from "./components/QuickLinks/InformationSecurityPolicy";
import IntellectualPropertyPolicy from "./components/QuickLinks/IntellectualPropertyPolicy";
import TermsConditions from "./components/QuickLinks/TermsConditions";
import EnvironmentalPolicy from "./components/QuickLinks/EnvironmentalPolicy";
import JobDetails from "./components/Pages/Career/JobDetails";
import CallHippoWidget from "./components/Layouts/Header/CallHippoWidget";

// ✅ All lazy imports together, after all normal imports
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const About = React.lazy(() => import("./components/Pages/AboutUs/About"));
const Service = React.lazy(() => import("./components/Pages/Service/Service"));
const Industry = React.lazy(() => import("./components/Pages/Industry/Industry"));
const Blog = React.lazy(() => import("./components/Pages/Blog/Blog"));
const Portfolios = React.lazy(() => import("./components/Pages/Portfolio/Portfolios"));
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));
const CareerComponent = React.lazy(() => import("./components/Pages/Career/CareerComponent"));

const PageLoader = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff"
  }}>
    <div style={{
      width: 48,
      height: 48,
      border: "4px solid #e5e7eb",
      borderTop: "4px solid #6366f1",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/web-design-development-company"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <CallHippoWidget />
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/solutions" element={<Industry />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolios />} />
          <Route path="/careers" element={<CareerComponent />} />
          <Route path="/careers/:jobId" element={<JobDetails />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/all-development" element={<AllDevelopment />} />
          <Route path="/all-design" element={<AllUiUxDesign />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/grievance-policy" element={<GrievancePolicy />} />
          <Route path="/information-security-policy" element={<InformationSecurityPolicy />} />
          <Route path="/intellectual-property-policy" element={<IntellectualPropertyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/environmental-policy" element={<EnvironmentalPolicy />} />
        </Routes>
      </Suspense>

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  useEffect(() => {
    fetch("https://ahaan-software-1.onrender.com/api/visitor/count")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <AppContent />
      <AhaanChat />
      <WhatsAppChat />
    </Router>
  );
}

export default App;