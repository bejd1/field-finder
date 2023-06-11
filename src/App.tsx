import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Project from "./pages/Project/Project";
import Social from "./pages/Social/Social";

export const App = () => {
  return (
    <div className="App">
      <Main />
      <AboutUs />
      <Project />
      <Social />
      <Contact />
    </div>
  );
};

export default App;
