import React, {
  useLayoutEffect,
  useCallback,
  useRef,
  useState,
  useEffect,
  useContext
} from "react";
import { animated as a, useSpring } from "@react-spring/web";
import ResizeObserver from "resize-observer-polyfill";


const ScrollContainer = ({ children, scrollInertia=70 }: { children?: any, scrollInertia?: number}) => {
  const [{ y }, set] = useSpring(() => ({
    y: [0],
    config: {
      mass: 1,
      tension: 200,
      friction: scrollInertia,
      precision: 0.00001,
      velocity: 0,
      clamp: true
    }
  }));

  const viewportRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight || 0);

  const getCurrentHeight = useCallback(entries => {
    for (let entry of entries) {
      const crx = entry.contentRect;
      setCurrentHeight(crx.height);
    }
  }, []);

  const handleScroll = () => {
    set({ y: [-window.scrollY || 0] });
  }

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let ro = new ResizeObserver(entries => getCurrentHeight(entries));
    ro.observe(viewport);
    return () => {
      if (!ro) return;
      ro.disconnect();
    };
  }, [getCurrentHeight]);

  useEffect(() => {
    if (typeof window != 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [set]);

  return (
    <>
      <a.div
        style={{ transform: y.to(y => `translate3d(0,${y}px,0)`) }}
        ref={viewportRef}
        className="scroll-container"
      >
        {children}
      </a.div>
      <div style={{ height: currentHeight }} />
    </>
  );
};

export default ScrollContainer;
