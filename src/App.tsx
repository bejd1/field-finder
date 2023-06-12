import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Project from "./pages/Project/Project";
import Social from "./pages/Social/Social";
import MyModal from "./components/Modal/Modal";

export const App = () => {
  return (
    <div className="App">
      <Main />
      <AboutUs />
      <Project />
      <Social />
      <Contact />
      {/* Modal */}
      <MyModal />
    </div>
  );
};

export default App;
