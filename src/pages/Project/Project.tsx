import { FunctionComponent } from "react";
import FrameComponent from "../../components/Frame Components/FrameComponent";
import "./Project.css";

const Project: FunctionComponent = () => {
  return (
    <div className="project-container">
      <h3>We are working on adding</h3>
      <div className="project-container-items">
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
