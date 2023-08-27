import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export function useAos() {
  useEffect(() => {
    AOS.init();
  }, []);
}