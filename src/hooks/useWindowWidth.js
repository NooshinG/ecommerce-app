import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const mediumScreen = 800;
  const [isSmall, setIsSmall] = useState(window.innerWidth < mediumScreen);

  useEffect(() => {
    const windowWidthHandler = () => {
      setIsSmall(window.innerWidth < mediumScreen);
    };

    window.addEventListener("resize", windowWidthHandler);

    return window.addEventListener("resize", windowWidthHandler);
  }, [isSmall]);

  return { isSmall };
}
