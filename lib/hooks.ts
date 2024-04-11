import { useCurrentSectionContext } from "@/context/current-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setCurrentSection, timeOfLastClick } = useCurrentSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setCurrentSection(sectionName);
    }
  }, [inView, setCurrentSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
