import React, { useEffect, useState, Fragment } from "react";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {isVisible && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <i className="fa fa-chevron-up"></i>
        </button>
      )}
    </Fragment>
  );
};

export default ScrollToTop;
