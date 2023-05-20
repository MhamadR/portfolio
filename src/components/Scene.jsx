import { useEffect, useRef, useState } from "react";
import "../assets/scene.css";

function Scene({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const deltaY = useRef(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      deltaY.current = e.touches[0].pageY;
    };

    const handleScroll = (e) => {
      let newScrollPosition;
      if (e.deltaY) {
        newScrollPosition = scrollPosition + (e.deltaY < 0 ? -10 : +10);
      } else {
        newScrollPosition =
          scrollPosition + (deltaY.current > e.touches[0].pageY ? -10 : +10);
        deltaY.current = e.touches[0].pageY;
      }
      setScrollPosition(() => newScrollPosition);

      elementRef.current.style.transform = `translateZ(${newScrollPosition}px)`;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="scene">
      <div className="wrapper" ref={elementRef}>
        {children}
      </div>
    </div>
  );
}

export default Scene;
