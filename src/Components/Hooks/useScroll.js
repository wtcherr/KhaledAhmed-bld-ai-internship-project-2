import { useState, useEffect } from "react";

export default function useScroll(limit) {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = (e) => {
    let heightToDockFrom = limit;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToDockFrom) {
      setDocked(true);
    } else {
      docked && setDocked(false);
    }
  };
  return docked;
}
