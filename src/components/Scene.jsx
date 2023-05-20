import { useEffect, useState } from "react";
import "../assets/scene.css";

function Scene({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.wheelDelta > 0) {
        setScrollPosition((prev) => prev - 10);
      } else setScrollPosition((prev) => prev + 10);
      const wrapper = document.querySelector(".wrapper");
      wrapper.style.transform = `translateZ(${scrollPosition}px)`;
      console.log(scrollPosition);
      // console.log(e);
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="scene">
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default Scene;
