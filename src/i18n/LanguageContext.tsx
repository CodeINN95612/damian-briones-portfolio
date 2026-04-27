import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Lang, Translations } from "./types";
import { en } from "./en";
import { es } from "./es";

const translations: Record<Lang, Translations> = { en, es };

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
