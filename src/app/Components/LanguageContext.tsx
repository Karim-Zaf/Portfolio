"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SupportedLang = "en" | "fr";

interface LanguageContextValue {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STRINGS: Record<SupportedLang, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_competitions: "Competitions",
    nav_videoediting: "Video Editing",
    nav_contact: "Contact",
    title_projects: "My Projects",
    projects_subtitle: "A selection of my featured projects, blending creativity and technical excellence",
    title_certificates: "My Certificates",
    cta_view_site: "View Site",
    cta_source_code: "Source Code",
    cta_view_online: "View Online",
    contact_title: "Contact",
    contact_subtitle: "Feel free to contact me! I’d be happy to talk 💬",
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_certificates: "Certificats",
    nav_competitions: "Compétitions",
    nav_videoediting: "Montage Vidéo",
    nav_contact: "Contact",
    title_projects: "Mes Projets",
    projects_subtitle: "Une sélection de mes projets phares, alliant créativité et excellence technique",
    title_certificates: "Mes Certificats",
    cta_view_site: "Voir le Site",
    cta_source_code: "Code Source",
    cta_view_online: "Voir en ligne",
    contact_title: "Contact",
    contact_subtitle: "N'hésitez pas à me contacter ! Je serais ravi d'échanger 💬",
  },
};

const ARRAYS: Record<SupportedLang, Record<string, string[]>> = {
  en: {
    home_words: [
      'Computer Science Engineering Student',
      'Competitive Programming Champion',
      'Full‑Stack Developer',
      'Machine Learning Enthusiast',
      'Open Source Contributor',
    ],
  },
  fr: {
    home_words: [
      "Étudiant en ingénierie informatique",
      "Champion TCPC 2025",
      "Développeur Full‑Stack",
      "Passionné de Machine Learning",
      "Contributeur Open Source",
    ],
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>("en"); // default EN

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang") as SupportedLang | null;
      if (stored === "en" || stored === "fr") setLangState(stored);
    } catch {}
  }, []);

  const setLang = (l: SupportedLang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {}
  };

  const t = useMemo(() => {
    const dict = STRINGS[lang];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  const ta = useMemo(() => {
    const dict = ARRAYS[lang];
    return (key: string) => dict[key] ?? [];
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, ta }), [lang, t, ta]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


