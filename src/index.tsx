import { createRoot } from "react-dom/client";
import "./global.css";
import Contact from "./pages/Contact/Contact";
import PitchInfo from "./pages/PitchInfo/PitchInfo";
// import { PitchProps } from "./pages/PitchInfo/PitchInfo";
import App from "./App";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./pages/Nav/Nav";
import { pitchDataBase } from "./components/PitchDataBase/PitchDataBase";
const container = document.getElementById("root");
const root = createRoot(container!);
const pitch = pitchDataBase.find((p) => p.id === 1)!;

export type PitchProps = {
  id?: number;
  city?: string;
  name?: string;
  address?: string;
  phoneNumber?: number;
  webPage?: string;
  email?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  parking?: boolean;
  dressingRoom?: boolean;
  toilet?: boolean;
  prize?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
};

root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/Pitch-Finderr" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/pitch/:id" element={<PitchInfo {...pitch} />} />

      <Route
        path="*"
        element={
          <div className="not__exit">
            <h1 className="not__exits">This page does not exist</h1>
            <Link to="/Pitch-Finderr" className="not__exit-btn">
              BACK TO HOME
            </Link>
          </div>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);
