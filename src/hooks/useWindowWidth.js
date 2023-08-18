import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const windowWidthHandler = () => {
      setIsSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", windowWidthHandler);

    return window.addEventListener("resize", windowWidthHandler);

  }, [isSmall]);

  return { isSmall };
}
