import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Import lazy and Suspense for code splitting
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load the exercise components for performance optimization
const Home = lazy(() => import("./components/Home"));
const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./components/Ejercicio5"));

function App() {
  return (
    // Apply dark mode classes to the root div
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ejercicio1" element={<Ejercicio1 />} />
              <Route path="/ejercicio2" element={<Ejercicio2 />} />
              <Route path="/ejercicio3" element={<Ejercicio3 />} />
              <Route path="/ejercicio4" element={<Ejercicio4 />} />
              <Route path="/ejercicio5" element={<Ejercicio5 />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
  );
}
export default App;
