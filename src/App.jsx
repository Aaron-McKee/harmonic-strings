import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import FeaturedCollection from "./components/FeaturedCollection";
import Footer from "./components/Footer";

import ViolinPage from "./pages/ViolinPage";
import ViolinDetailPage from "./pages/ViolinDetailPage";

import ViolaPage from "./pages/ViolaPage";
import ViolaDetailPage from "./pages/ViolaDetailPage";

import CelloPage from "./pages/CelloPage";
import CelloDetailPage from "./pages/CelloDetailPage";

import BowPage from "./pages/BowPage";
import BowDetailPage from "./pages/BowDetailPage";

import CasePage from "./pages/CasePage";
import CaseDetailPage from "./pages/CaseDetailPage";

import AccessoriesPage from "./pages/AccessoriesPage";


function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedCollection />
    </>
  );
}


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/violins"
          element={<ViolinPage />}
        />

        <Route
          path="/violins/:slug"
          element={<ViolinDetailPage />}
        />

        <Route
          path="/violas"
          element={<ViolaPage />}
        />

        <Route
          path="/violas/:slug"
          element={<ViolaDetailPage />}
        />

        <Route
          path="/cellos"
          element={<CelloPage />}
        />

        <Route
          path="/cellos/:slug"
          element={<CelloDetailPage />}
        />

        <Route
          path="/bows"
          element={<BowPage />}
        />

        <Route
          path="/bows/:slug"
          element={<BowDetailPage />}
        />

        <Route
          path="/cases"
          element={<CasePage />}
        />

        <Route
          path="/cases/:slug"
          element={<CaseDetailPage />}
        />

        <Route
          path="/accessories"
          element={<AccessoriesPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}


export default App;