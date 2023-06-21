import React, { useEffect } from "react";
import "./fixed-background.css";

const FixedBackground = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const element = document.querySelector(".element");
      if (element) {
        element.style.backgroundPositionY = -scrollTop + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed-background">
      <div className="element">{props.children}</div>
    </div>
  );
};

export default FixedBackground;
