"use client";

import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", windowWidthHandler);

    return window.addEventListener("resize", windowWidthHandler);
  }, [windowSize]);

  return { windowSize };
}
