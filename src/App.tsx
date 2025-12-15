import { Dangers } from "./assets/Pages/DangersPage";
import HomePage from "./assets/Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import { Universe } from "./assets/Pages/UniversePage";
import { Rules } from "./assets/Pages/RulesPage";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Univers" element={<Universe />} />
          <Route path="/Règles" element={<Rules />} />
          <Route path="/Dangers" element={<Dangers />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
