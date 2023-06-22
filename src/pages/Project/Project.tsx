import { FunctionComponent, useRef } from "react";
import "./Project.css";
import { useInView } from "framer-motion";
import { Houses, Phone } from "react-bootstrap-icons";
import GroupsIcon from "@mui/icons-material/Groups";
import Whatshot from "@mui/icons-material/Whatshot";

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
        <div className="project-mobile-item">
          <Phone style={{ fontSize: "70px" }} />
          <p>Mobile app</p>
        </div>

        <div className="project-location-item">
          <Houses style={{ fontSize: "70px" }} />
          <p>More locations</p>
        </div>
        <div className="project-moresports-item">
          <Whatshot style={{ fontSize: "70px" }} />
          <p>More sports</p>
        </div>
        <div className="project-teamfinder-item">
          <GroupsIcon style={{ fontSize: "70px" }} />
          <p>Team Finder</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
