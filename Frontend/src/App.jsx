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
import CareerComponent from "./components/Pages/Career/CareerComponent";
import CallHippoWidget from "./components/Layouts/Header/CallHippoWidget";

// Lazy pages
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const About = React.lazy(() => import("./components/Pages/AboutUs/About"));
const Service = React.lazy(() => import("./components/Pages/Service/Service"));
const Industry = React.lazy(() => import("./components/Pages/Industry/Industry"));
const Blog = React.lazy(() => import("./components/Pages/Blog/Blog"));
const Portfolios = React.lazy(() => import("./components/Pages/Portfolio/Portfolios"));
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));


// Layout wrapper
const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/web-design-development-company"];

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [location])

  return (
    <>

    <CallHippoWidget/>
      {/* HEADER */}
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/about"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <ContactUs />
            </Suspense>
          }
        />

        <Route
          path="/service"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Service />
            </Suspense>
          }
        />

        <Route
          path="/solutions"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Industry />
            </Suspense>
          }
        />

        <Route
          path="/blog"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Blog />
            </Suspense>
          }
        />

        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Portfolios />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <CareerComponent />
            </Suspense>
          }
        />
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

      {/* FOOTER */}
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};


// MAIN APP
function App() {
  useEffect(() => {
    fetch("https://ahaan-software-1.onrender.com/api/visitor/count")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <AppContent />
      <AhaanChat/>
      <WhatsAppChat />
    </Router>
  );
}

export default App;
