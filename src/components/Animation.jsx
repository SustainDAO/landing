import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import React, { useEffect, useState } from "react";

const Animation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-screen">
      <Rive
        src="../../assets/animations/animation.riv"
        layout={
          new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center,
          })
        }
      />
    </div>
  );
};

export default Animation;
