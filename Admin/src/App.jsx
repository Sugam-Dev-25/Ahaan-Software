import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Topbar from "./Components/Layouts/Topbar";
import Sidebar from "./Components/Layouts/Sidebar";
import Dashboard from "./Components/Pages/Dashboard";


function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-grow-1" style={{ minHeight: "100vh", background: "#f8f9fc" }}>
        {/* Topbar */}
        <Topbar />

        {/* Page Main Content */}
        <div className="container-fluid mt-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

