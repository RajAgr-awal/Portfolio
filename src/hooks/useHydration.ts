// ── Hydration-safe hook ─────────────────────────────────────────────
// Returns false during SSR / first render, true after hydration.
// Use to gate any browser-only values (Date, window, etc.)

import { useState, useEffect } from "react";

export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
