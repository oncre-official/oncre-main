import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type HeroTheme = "dark" | "light";

export interface HeroConfig {
  /** CSS background-color value */
  backgroundColor: string;
  /** Optional URL for a background-image pattern */
  backgroundImage?: string;
  /** Whether the nav text should be white (dark bg) or navy (light bg) */
  theme: HeroTheme;
}

interface HeroContextValue {
  config: HeroConfig | null;
  setHeroConfig: (config: HeroConfig | null) => void;
}

const HeroContext = createContext<HeroContextValue>({
  config: null,
  setHeroConfig: () => {},
});

export function HeroProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<HeroConfig | null>(null);

  const setHeroConfig = useCallback((cfg: HeroConfig | null) => {
    setConfig(cfg);
  }, []);

  return (
    <HeroContext.Provider value={{ config, setHeroConfig }}>
      {children}
    </HeroContext.Provider>
  );
}

/** Read the current hero config (used by SiteHeader) */
export function useHeroConfig() {
  return useContext(HeroContext).config;
}

/** Set the hero config for the current page (used in each page component) */
export function useSetHeroConfig() {
  return useContext(HeroContext).setHeroConfig;
}

/**
 * Register this page's hero config once on mount, clear it on unmount.
 * Call this at the top of any page component whose hero should colour the navbar.
 */
export function useRegisterHero(config: HeroConfig) {
  const setHeroConfig = useSetHeroConfig();
  useEffect(() => {
    setHeroConfig(config);
    return () => setHeroConfig(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
