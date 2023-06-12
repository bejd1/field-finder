import { FunctionComponent, useRef } from "react";
import FrameComponent from "../../components/Frame Components/FrameComponent";
import "./Project.css";
import { useInView } from "framer-motion";

const Project: FunctionComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="project-container">
      <h3>We are working on adding</h3>
      <div
        ref={ref}
        className="project-container-items"
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <FrameComponent
          groupLight="/group-light.svg"
          teamFinder="Team finder"
          phoneLight="/phone-light.svg"
          mobileApp="Mobile app"
          propOverflow="hidden"
          propWidth="88px"
        />

        <FrameComponent
          groupLight="/calories-light.svg"
          teamFinder="More sports"
          phoneLight="/home-light.svg"
          mobileApp="More locations"
          propOverflow="unset"
          propWidth="116px"
        />
      </div>
    </div>
  );
};

export default Project;
