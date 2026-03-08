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
    contact_subtitle: "Feel free to contact me — I'd be happy to talk.",
    // Projects page CTA
    cta_more_projects: "More projects coming soon",
    cta_view_github: "View GitHub",
    cta_collaborate: "Collaborate with me",
    projects_cta_paragraph: "I’m continuously building new, exciting products. Stay tuned to discover what’s next!",
    // HomePage
    cta_download_resume: "Download Resume",
    stats_projects_label: "Projects",
    stats_years_exp_label: "Years exp.",
    stats_certificates_label: "Certificates",
    technologies_label: "Technologies",
    // About
    about_title: "About Me",
    who_am_i_title: "Who am I?",
    who_am_i_p1: "Computer Science Engineering student (Software Engineering track) at Université de Technologie de Compiègne (UTC), currently an apprentice at Cegedim.",
    who_am_i_p2: "I’m passionate about technology, focusing on competitive programming, machine learning, web development, DevOps, and video editing.",
    who_am_i_p3: "I’m always looking to expand my knowledge and sharpen my skills. I enjoy solving complex problems and contributing to impactful projects.",
    skills_title: "Skills",
    about_cta_title: "Interested in my profile?",
    about_cta_text: "Feel free to reach out to discuss opportunities or collaborations!",
    about_cta_button_contact: "Contact Me",
    // Certificates
    certificates_subtitle: "Explore my professional and academic certifications.",
    click_to_enlarge: "Click to enlarge",
    issued_by: "Issued by",
    certificates_cta_title: "Continuous Learning",
    certificates_cta_text: "I keep enhancing my skills through new courses and certifications regularly!",
    certificates_cta_skills: "See My Skills",
    certificates_cta_training: "Training Discussion",
    // Contact
    contact_keep_in_touch: "Let’s keep in touch!",
    contact_intro_text: "I’m always open to new opportunities, collaborations and interesting discussions. Whether you want to talk about a project, an apprenticeship opportunity, or simply chat about tech, I’d be glad to respond!",
    contact_full_name_label: "Full name *",
    contact_full_name_placeholder: "Your full name",
    contact_email_label: "Email address *",
    contact_email_placeholder: "your@email.com",
    contact_subject_label: "Subject",
    contact_subject_placeholder: "Subject of your message",
    contact_message_label: "Message *",
    contact_message_placeholder: "Describe your project, your questions, or what you’d like to discuss...",
    contact_send_message: "Send message",
    contact_privacy_note: "Your information is safe and will never be shared with third parties.",
    contact_follow_me_title: "Follow me on socials",
    contact_follow_me_subtitle: "Stay tuned for my latest projects and updates!",
    contact_response_time_title: "Response time",
    contact_response_time_value: "Usually within 24 hours",
    contact_email_label_short: "Email",
    contact_linkedin_label_short: "LinkedIn",
    contact_github_label_short: "GitHub",
    // Competitions
    competitions_hero_title: "Competitive Programming Journey",
    competitions_hero_subtitle: "From early contests to national titles — a steady climb powered by persistence, teamwork, and love for problem solving.",
    competitions_stats_problems_label: "Problems solved",
    competitions_stats_codeforces_label: "Codeforces Candidate Master",
    competitions_stats_years_label: "Active competing",
    who_are_diga_title: "Who are DIGA DIGA?",
    who_are_diga_p1: "We are DIGA DIGA, a competitive programming team from the Higher Institute of Computer Science (ISI), part of Tunis El Manar University. Composed of Karim Zaafrani, Firas Briki, and Adem Ksouri, we thrive on solving challenging algorithmic problems and pushing our limits through competitions.",
    who_are_diga_p2: "Driven by a love for coding and teamwork, we actively compete in prestigious events such as the Tunisian Collegiate Programming Contest (TCPC 2025), where we became Tunisian Champions and qualified for the Africa and Arab Collegiate Programming Championship (ACPC).",
    who_are_diga_p3: "The name DIGA DIGA — meaning “slowly, slowly” in Tunisian dialect — reflects our philosophy: continuous, steady progress and the commitment to becoming a better version of ourselves with every challenge. Believe in yourself and in your dreams.",
    tcpc_2025_title: "TCPC 2025",
    tcpc_2025_card_title: "Tunisian Champion — TCPC 2025",
    tcpc_2025_p1: "A dream comes true! Our team DIGA DIGA secured first place in the Tunisian Collegiate Programming Contest (TCPC 2025) and will represent Tunisia and the Higher Institute of Computer Science (ISI) at the ACPC — Africa and Arab Collegiate Programming Championship in Luxor, Egypt.",
    tcpc_2025_progress_1: "1st year — we didn’t qualify for ACPC",
    tcpc_2025_progress_2: "2nd year — we qualified as the last team",
    tcpc_2025_progress_3: "3rd year — Tunisian Champions",
    tcpc_2025_p2: "The name DIGA DIGA, meaning “slowly slowly” in Tunisian dialect, reflects our philosophy: continuous, steady progress and the commitment to becoming a better version of ourselves with every challenge. Believe in yourself and in your dreams.",
    acpc_2024_title: "ACPC 2024",
    tcpc_2024_title: "TCPC 2024",
    highlights_title: "Competitive Programming Highlights",
    highlights_card1_title: "Problem Solving & Weekly Contests",
    highlights_card1_p1: "I regularly take part in weekly contests to sharpen my skills and learn new techniques.",
    highlights_card1_platforms_prefix: "Platforms:",
    highlights_card1_p2: "Recently, I became a Candidate Master on Codeforces (top 5%). This milestone reflects consistent progress, stronger algorithmic knowledge, and faster implementation.",
    highlights_card1_p3: "Problem solving resonates deeply with my CS studies: it boosts my ability to write clean, efficient code and to optimize programs across projects.",
    highlights_card2_title: "Sharing Knowledge & Inspiring Others",
    highlights_card2_p1: "I also share knowledge with younger students through workshops (with Freeways Club) on problem-solving and algorithms, and I publish recordings of contests on my YouTube channel to demystify strategies and motivate others to embrace competitive programming.",
    // Video Editing
    videoediting_title: "Video Editing",
    videoediting_story_title: "My story with Video Editing",
    videoediting_p1: "I’ve been passionate about video editing since I was about 10 years old, using a heavy laptop that barely ran Premiere Pro. I started with Windows Movie Maker, creating fun presentations for school projects in middle school. As I got better, I moved on to Sony Vegas Pro and then switched to Adobe tools like Premiere Pro and After Effects.",
    videoediting_p2: "In high school, I edited videos for events organized by school clubs, capturing special moments and telling stories through my edits. My love for cinema and storytelling kept growing, and I eventually started freelancing on Upwork, helping clients create exciting and engaging videos.",
    videoediting_p3: "Video editing has always been my way of turning ideas into visual stories that people can connect with.",
    // YouTube
    yt_section_title: "YouTube Content",
    yt_section_subtitle: "Watch vlogs, problem corrections, and competitive programming content on my channel.",
    yt_acpc_vlog_title: "ACPC 2025 Vlog",
    yt_acpc_vlog_desc: "Behind the scenes of our journey at the Africa and Arab Collegiate Programming Championship.",
    yt_tcpc_corrections_title: "TCPC 2025 — Problem Corrections",
    yt_tcpc_corrections_desc: "Detailed walkthroughs and solutions for TCPC 2025 contest problems.",
    yt_cta_channel: "Visit My YouTube Channel",
    contact_youtube_label_short: "YouTube",
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
    contact_subtitle: "N'hésitez pas à me contacter — je serais ravi d'échanger.",
    // Projects page CTA
    cta_more_projects: "D'autres projets arrivent bientôt",
    cta_view_github: "Voir GitHub",
    cta_collaborate: "Collaborer avec moi",
    projects_cta_paragraph: "Je construis en continu de nouveaux produits passionnants. Restez à l'écoute pour découvrir la suite !",
    // HomePage
    cta_download_resume: "Télécharger le CV",
    stats_projects_label: "Projets",
    stats_years_exp_label: "Années d'exp.",
    stats_certificates_label: "Certificats",
    technologies_label: "Technologies",
    // About
    about_title: "À propos de moi",
    who_am_i_title: "Qui suis-je ?",
    who_am_i_p1: "Étudiant en ingénierie informatique (parcours Génie Logiciel) à l'Université de Technologie de Compiègne (UTC), actuellement apprenti chez Cegedim.",
    who_am_i_p2: "Passionné par la technologie, je me concentre sur le competitive programming, le machine learning, le développement web, le DevOps et le montage vidéo.",
    who_am_i_p3: "Je cherche constamment à élargir mes connaissances et à affiner mes compétences. J'aime résoudre des problèmes complexes et contribuer à des projets à impact.",
    skills_title: "Compétences",
    about_cta_title: "Intéressé par mon profil ?",
    about_cta_text: "N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations !",
    about_cta_button_contact: "Me Contacter",
    // Certificates
    certificates_subtitle: "Découvrez mes certifications professionnelles et académiques.",
    click_to_enlarge: "Cliquer pour agrandir",
    issued_by: "Délivré par",
    certificates_cta_title: "Apprentissage Continu",
    certificates_cta_text: "J'améliore régulièrement mes compétences grâce à de nouvelles formations et certifications !",
    certificates_cta_skills: "Voir mes compétences",
    certificates_cta_training: "Parler Formation",
    // Contact
    contact_keep_in_touch: "Restons en contact !",
    contact_intro_text: "Je suis toujours ouvert aux nouvelles opportunités, collaborations et discussions intéressantes. Que vous souhaitiez parler d'un projet, d'une alternance ou simplement échanger autour de la tech, je serai ravi de répondre !",
    contact_full_name_label: "Nom complet *",
    contact_full_name_placeholder: "Votre nom complet",
    contact_email_label: "Adresse e-mail *",
    contact_email_placeholder: "votre@email.com",
    contact_subject_label: "Objet",
    contact_subject_placeholder: "Objet de votre message",
    contact_message_label: "Message *",
    contact_message_placeholder: "Décrivez votre projet, vos questions, ou ce dont vous souhaitez discuter...",
    contact_send_message: "Envoyer le message",
    contact_privacy_note: "Vos informations sont en sécurité et ne seront jamais partagées avec des tiers.",
    contact_follow_me_title: "Suivez-moi sur les réseaux",
    contact_follow_me_subtitle: "Restez informé de mes derniers projets et actualités !",
    contact_response_time_title: "Délai de réponse",
    contact_response_time_value: "Généralement sous 24h",
    contact_email_label_short: "Email",
    contact_linkedin_label_short: "LinkedIn",
    contact_github_label_short: "GitHub",
    // Competitions
    competitions_hero_title: "Parcours en Programmation Compétitive",
    competitions_hero_subtitle: "Des premiers concours aux titres nationaux — une progression constante portée par la persévérance, l'esprit d'équipe et l'amour de la résolution de problèmes.",
    competitions_stats_problems_label: "Problèmes résolus",
    competitions_stats_codeforces_label: "Codeforces Candidate Master",
    competitions_stats_years_label: "Années de compétition active",
    who_are_diga_title: "Qui sont DIGA DIGA ?",
    who_are_diga_p1: "Nous sommes DIGA DIGA, une équipe de programmation compétitive de l'Institut Supérieur d'Informatique (ISI), rattaché à l'Université de Tunis El Manar. Composée de Karim Zaafrani, Firas Briki et Adem Ksouri, nous aimons résoudre des problèmes algorithmiques exigeants et dépasser nos limites à travers les compétitions.",
    who_are_diga_p2: "Animés par l'envie de coder et l'esprit d'équipe, nous participons activement à des événements prestigieux tels que le Tunisian Collegiate Programming Contest (TCPC 2025), où nous sommes devenus Champions de Tunisie et qualifiés pour l'ACPC (Africa and Arab Collegiate Programming Championship).",
    who_are_diga_p3: "Le nom DIGA DIGA — signifiant « doucement, doucement » en dialecte tunisien — reflète notre philosophie : une progression continue et régulière, et l'engagement à devenir une meilleure version de nous-mêmes à chaque défi. Croyez en vous et en vos rêves.",
    tcpc_2025_title: "TCPC 2025",
    tcpc_2025_card_title: "Champion de Tunisie — TCPC 2025",
    tcpc_2025_p1: "Un rêve devenu réalité ! Notre équipe DIGA DIGA a remporté la première place au Tunisian Collegiate Programming Contest (TCPC 2025) et représentera la Tunisie et l'Institut Supérieur d'Informatique (ISI) à l'ACPC — Africa and Arab Collegiate Programming Championship à Louxor, Égypte.",
    tcpc_2025_progress_1: "1ère année — non qualifiés à l'ACPC",
    tcpc_2025_progress_2: "2ème année — qualifiés en dernière position",
    tcpc_2025_progress_3: "3ème année — Champions de Tunisie",
    tcpc_2025_p2: "Le nom DIGA DIGA, signifiant « doucement doucement » en dialecte tunisien, reflète notre philosophie : progression continue et régulière, et volonté de devenir une meilleure version de nous-mêmes à chaque défi. Croyez en vous et en vos rêves.",
    acpc_2024_title: "ACPC 2024",
    tcpc_2024_title: "TCPC 2024",
    highlights_title: "Faits marquants en Programmation Compétitive",
    highlights_card1_title: "Résolution de problèmes & concours hebdomadaires",
    highlights_card1_p1: "Je participe régulièrement à des concours hebdomadaires pour affûter mes compétences et apprendre de nouvelles techniques.",
    highlights_card1_platforms_prefix: "Plateformes :",
    highlights_card1_p2: "Récemment, je suis devenu Candidate Master sur Codeforces (top 5%). Ce palier reflète des progrès constants, une meilleure maîtrise des algorithmes et une implémentation plus rapide.",
    highlights_card1_p3: "La résolution de problèmes résonne avec mes études en informatique : elle renforce ma capacité à écrire du code propre et efficace, et à optimiser des programmes sur mes projets.",
    highlights_card2_title: "Partager le savoir & inspirer les autres",
    highlights_card2_p1: "Je partage aussi mes connaissances avec les plus jeunes via des ateliers (avec le club Freeways) sur la résolution de problèmes et les algorithmes, et je publie des enregistrements de concours sur ma chaîne YouTube pour démystifier les stratégies et motiver d'autres à se lancer en programmation compétitive.",
    // Video Editing
    videoediting_title: "Montage Vidéo",
    videoediting_story_title: "Mon histoire avec le montage vidéo",
    videoediting_p1: "Je suis passionné par le montage vidéo depuis l'âge d'environ 10 ans, sur un ordinateur portable lourd qui faisait à peine tourner Premiere Pro. J'ai commencé avec Windows Movie Maker, en créant des présentations amusantes pour les projets scolaires au collège. En progressant, je suis passé à Sony Vegas Pro puis aux outils Adobe comme Premiere Pro et After Effects.",
    videoediting_p2: "Au lycée, j'ai monté des vidéos pour des événements organisés par des clubs scolaires, capturant des moments forts et racontant des histoires à travers mes montages. Mon amour pour le cinéma et la narration a grandi, et j'ai fini par faire du freelancing sur Upwork, en aidant des clients à créer des vidéos attrayantes et engageantes.",
    videoediting_p3: "Le montage vidéo a toujours été pour moi un moyen de transformer des idées en histoires visuelles auxquelles les gens peuvent s'identifier.",
    // YouTube
    yt_section_title: "Contenu YouTube",
    yt_section_subtitle: "Regardez des vlogs, corrections de problèmes et du contenu de programmation compétitive sur ma chaîne.",
    yt_acpc_vlog_title: "Vlog ACPC 2025",
    yt_acpc_vlog_desc: "Les coulisses de notre parcours au Championnat Africain et Arabe de Programmation Collégiale.",
    yt_tcpc_corrections_title: "TCPC 2025 — Corrections de problèmes",
    yt_tcpc_corrections_desc: "Explications détaillées et solutions des problèmes du concours TCPC 2025.",
    yt_cta_channel: "Visiter ma chaîne YouTube",
    contact_youtube_label_short: "YouTube",
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

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

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


