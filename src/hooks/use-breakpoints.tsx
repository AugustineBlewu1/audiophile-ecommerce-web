import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

/**
 * Break point hook to determine the screen a user is using
 * @returns mobile | tablet | desktop
 */
export function useBreakpoint(): Breakpoint | undefined {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

  useEffect(() => {
    function getBreakpoint(): Breakpoint {
      const width = window.innerWidth;
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    }

    const updateBreakpoint = () => setBreakpoint(getBreakpoint());

    updateBreakpoint(); // Set initial
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
