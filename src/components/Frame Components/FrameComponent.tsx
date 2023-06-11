import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FrameComponent.css";

type FrameComponentType = {
  groupLight?: string;
  teamFinder?: string;
  phoneLight?: string;
  mobileApp?: string;

  /** Style props */
  propOverflow?: Property.Overflow;
  propWidth?: Property.Width;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  groupLight,
  teamFinder,
  phoneLight,
  mobileApp,
  propOverflow,
  propWidth,
}) => {
  const phoneLightIconStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const mobileAppStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="frame-container">
      <div className="group-light-parent">
        <img className="group-light-icon" alt="" src={groupLight} />
        <div className="team-finder">{teamFinder}</div>
      </div>
      <div className="phone-light-parent">
        <img
          className="phone-light-icon"
          alt=""
          src={phoneLight}
          style={phoneLightIconStyle}
        />
        <div className="mobile-app" style={mobileAppStyle}>
          {mobileApp}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
