import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppList from "./pages/AppList";
import AppInfo from "./pages/AppInfo";
import ResourceList from "./pages/ResourceList";
import ResourceInfo from "./pages/ResourceInfo";
import Layout from "./pages/Layout";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AppList" element={<AppList />} />
          <Route path="AppList/:name" element={<AppInfo />} />
          <Route path="ResourceList" element={<ResourceList />} />
          <Route path="ResourceList/:name" element={<ResourceInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);