"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "et" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  et: {
    // Navigation
    "nav.home": "Avaleht",
    "nav.about": "Meist",
    "nav.portfolio": "Portfoolio",
    "nav.contact": "Kontakt",
    "nav.cta": "Küsi pakkumist",
    
    // Hero
    "hero.title": "Loome veebilehti, mis",
    "hero.titleHighlight": "müüvad",
    "hero.description": "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada. Minimalistlik disain, maksimaalne mõju.",
    "hero.cta": "Küsi pakkumist",
    "hero.secondary": "Vaata portfooliot",
    
    // Services
    "services.title": "Meie teenused",
    "services.subtitle": "Pakume täislahendusi, mis viivad teie ettevõtte digitaalsele tasemele",
    "services.web.title": "Veebilehtede loomine",
    "services.web.description": "Kaasaegsed ja kiired veebilehed, mis on optimeeritud konversioonideks ja kasutajakogemuseks.",
    "services.design.title": "UI/UX disain",
    "services.design.description": "Läbimõeldud kasutajaliidesed, mis on visuaalselt atraktiivsed ja intuitiivsed kasutada.",
    "services.seo.title": "SEO optimeerimine",
    "services.seo.description": "Tehniline ja sisuline optimeerimine, et teie veebileht oleks otsingumootoritele nähtav.",
    "services.maintenance.title": "Hooldus ja tugi",
    "services.maintenance.description": "Pidev tehniline tugi ja uuendused, et teie veebileht töötaks alati sujuvalt.",
    
    // Trust
    "trust.title": "Miks valida meid?",
    "trust.subtitle": "Oleme pühendunud kvaliteedile ja teie äri edule",
    "trust.experience.title": "Kaks tegusat noort",
    "trust.experience.description": "Pikaajaline kogemus veebiarenduses ja disainis annab meile teadmised luua lahendusi, mis töötavad.",
    "trust.quality.title": "Premium kvaliteet",
    "trust.quality.description": "Iga projekt on hoolikalt läbi mõeldud ja teostatud, et tagada parim tulemus.",
    "trust.results.title": "Tulemustele suunatud",
    "trust.results.description": "Meie eesmärk on aidata teie ettevõttel kasvada läbi efektiivse veebipresentsuse.",
    "trust.stat.projects": "Lõpetatud projekti",
    "trust.stat.clients": "Rahulolev klient",
    "trust.stat.years": "Aastat kogemust",
    
    // CTA
    "cta.title": "Valmis alustama?",
    "cta.description": "Võtke meiega ühendust ja arutame, kuidas saame teie ettevõtet aidata. Esimene konsultatsioon on tasuta.",
    "cta.button": "Küsi pakkumist",
    
    // Footer
    "footer.description": "Loome professionaalseid veebilehti, mis aitavad teie ettevõttel kasvada.",
    "footer.navigation": "Navigatsioon",
    "footer.contact": "Kontakt",
    "footer.rights": "Kõik õigused kaitstud.",
    
    // About page
    "about.title": "Meist",
    "about.subtitle": "Oleme väike, kuid pühendunud meeskond, kes usub, et hea veebileht on rohkem kui lihtsalt ilus disain.",
    "about.story.title": "Meie lugu",
    "about.story.p1": "MarVar sai alguse kirgliku veebiarenduse entusiastide ideest luua midagi enamat kui tavaline veebiagentuuri. Me usume, et iga ettevõte väärib veebilehte, mis peegeldab nende unikaalsust ja aitab neil silma paista.",
    "about.story.p2": "Meie lähenemine on lihtne: kuulame, mõistame ja loome. Iga projekt algab põhjaliku vestlusega, kus saame aru teie eesmärkidest, sihtrühmast ja visioonist. Seejärel töötame välja lahenduse, mis on nii visuaalselt atraktiivne kui ka funktsionaalselt tugev.",
    "about.values.title": "Meie väärtused",
    "about.values.quality.title": "Kvaliteet",
    "about.values.quality.description": "Me ei tee kompromisse kvaliteedis. Iga piksel ja koodirida on hoolikalt läbi mõeldud.",
    "about.values.transparency.title": "Läbipaistvus",
    "about.values.transparency.description": "Hoiame teid kursis kogu protsessi vältel. Ausus ja avatud suhtlus on meie prioriteet.",
    "about.values.innovation.title": "Innovatsioon",
    "about.values.innovation.description": "Kasutame kaasaegseid tehnoloogiaid ja parimaid praktikaid, et luua tulevikukindlaid lahendusi.",
    "about.values.partnership.title": "Partnerlus",
    "about.values.partnership.description": "Me ei ole lihtsalt teenusepakkuja – oleme teie partner digitaalses arengus.",
    
    // Portfolio page
    "portfolio.title": "Meie tehtud tööd",
    "portfolio.subtitle": "Valik projektidest, mis näitavad meie oskusi ja lähenemist",
    "portfolio.cta.title": "Soovid sarnast tulemust?",
    "portfolio.cta.description": "Võta meiega ühendust ja arutame, kuidas saame teie projekti ellu viia.",
    "portfolio.cta.button": "Alusta projekti",
    
    // Contact page
    "contact.title": "Võta ühendust",
    "contact.subtitle": "Oleme valmis kuulama teie ideid ja leidma parima lahenduse teie ettevõttele.",
    "contact.form.title": "Saada päring",
    "contact.form.description": "Täida vorm ja võtame sinuga ühendust 24 tunni jooksul.",
    "contact.form.name": "Nimi",
    "contact.form.namePlaceholder": "Teie nimi",
    "contact.form.email": "E-post",
    "contact.form.emailPlaceholder": "teie@email.ee",
    "contact.form.company": "Ettevõte (valikuline)",
    "contact.form.companyPlaceholder": "Teie ettevõtte nimi",
    "contact.form.message": "Projekti kirjeldus",
    "contact.form.messagePlaceholder": "Kirjeldage oma projekti, eesmärke ja ootusi...",
    "contact.form.submit": "Saada päring",
    "contact.form.success": "Päring saadetud!",
    "contact.form.successDescription": "Võtame teiega ühendust esimesel võimalusel.",
    "contact.info.title": "Kontaktinfo",
    "contact.info.email": "E-post",
    "contact.info.phone": "Telefon",
    "contact.info.location": "Asukoht",
    "contact.faq.title": "Korduma kippuvad küsimused",
    "contact.faq.q1": "Kui kaua võtab veebilehe loomine aega?",
    "contact.faq.a1": "Sõltuvalt projekti keerukusest võtab veebilehe loomine tavaliselt 2-6 nädalat. Lihtsamad landing page'id valmivad kiiremini, mahukamad e-poed või veebirakendused võtavad rohkem aega.",
    "contact.faq.q2": "Mis on veebilehe maksumus?",
    "contact.faq.a2": "Hind sõltub projekti ulatusest, funktsionaalsusest ja disaini keerukusest. Võta meiega ühendust tasuta konsultatsiooniks ja personaalse pakkumise saamiseks.",
    "contact.faq.q3": "Kas pakute ka hooldust pärast lehe valmimist?",
    "contact.faq.a3": "Jah, pakume erinevaid hoolduspakette, mis sisaldavad tehnilist tuge, turvauuendusi ja sisumuudatusi. See tagab, et teie veebileht töötab alati sujuvalt.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.cta": "Get a Quote",
    
    // Hero
    "hero.title": "We create websites that",
    "hero.titleHighlight": "sell",
    "hero.description": "Professional and conversion-focused websites that help your business grow. Minimalist design, maximum impact.",
    "hero.cta": "Get a Quote",
    "hero.secondary": "View Portfolio",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "We offer complete solutions to bring your business to the digital level",
    "services.web.title": "Website Development",
    "services.web.description": "Modern and fast websites optimized for conversions and user experience.",
    "services.design.title": "UI/UX Design",
    "services.design.description": "Thoughtful user interfaces that are visually attractive and intuitive to use.",
    "services.seo.title": "SEO Optimization",
    "services.seo.description": "Technical and content optimization to make your website visible to search engines.",
    "services.maintenance.title": "Maintenance & Support",
    "services.maintenance.description": "Ongoing technical support and updates to keep your website running smoothly.",
    
    // Trust
    "trust.title": "Why Choose Us?",
    "trust.subtitle": "We are dedicated to quality and your business success",
    "trust.experience.title": "5+ Years Experience",
    "trust.experience.description": "Long-term experience in web development and design gives us the knowledge to create solutions that work.",
    "trust.quality.title": "Premium Quality",
    "trust.quality.description": "Every project is carefully thought through and executed to ensure the best result.",
    "trust.results.title": "Results-Oriented",
    "trust.results.description": "Our goal is to help your business grow through effective web presence.",
    "trust.stat.projects": "Completed Projects",
    "trust.stat.clients": "Happy Clients",
    "trust.stat.years": "Years Experience",
    
    // CTA
    "cta.title": "Ready to Start?",
    "cta.description": "Contact us and let's discuss how we can help your business. First consultation is free.",
    "cta.button": "Get a Quote",
    
    // Footer
    "footer.description": "We create professional websites that help your business grow.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    
    // About page
    "about.title": "About Us",
    "about.subtitle": "We are a small but dedicated team who believes that a good website is more than just beautiful design.",
    "about.story.title": "Our Story",
    "about.story.p1": "MarVar started from the idea of passionate web development enthusiasts to create something more than an ordinary web agency. We believe that every business deserves a website that reflects their uniqueness and helps them stand out.",
    "about.story.p2": "Our approach is simple: listen, understand, and create. Every project starts with a thorough conversation where we understand your goals, target audience, and vision. Then we develop a solution that is both visually attractive and functionally strong.",
    "about.values.title": "Our Values",
    "about.values.quality.title": "Quality",
    "about.values.quality.description": "We don't compromise on quality. Every pixel and line of code is carefully thought through.",
    "about.values.transparency.title": "Transparency",
    "about.values.transparency.description": "We keep you informed throughout the process. Honesty and open communication is our priority.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "We use modern technologies and best practices to create future-proof solutions.",
    "about.values.partnership.title": "Partnership",
    "about.values.partnership.description": "We are not just a service provider – we are your partner in digital development.",
    
    // Portfolio page
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "A selection of projects showcasing our skills and approach",
    "portfolio.cta.title": "Want Similar Results?",
    "portfolio.cta.description": "Contact us and let's discuss how we can bring your project to life.",
    "portfolio.cta.button": "Start a Project",
    
    // Contact page
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're ready to hear your ideas and find the best solution for your business.",
    "contact.form.title": "Send a Request",
    "contact.form.description": "Fill out the form and we'll contact you within 24 hours.",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.company": "Company (optional)",
    "contact.form.companyPlaceholder": "Your company name",
    "contact.form.message": "Project Description",
    "contact.form.messagePlaceholder": "Describe your project, goals and expectations...",
    "contact.form.submit": "Send Request",
    "contact.form.success": "Request Sent!",
    "contact.form.successDescription": "We'll contact you as soon as possible.",
    "contact.info.title": "Contact Info",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.q1": "How long does it take to create a website?",
    "contact.faq.a1": "Depending on the complexity of the project, creating a website usually takes 2-6 weeks. Simpler landing pages are completed faster, larger e-commerce or web applications take more time.",
    "contact.faq.q2": "What is the cost of a website?",
    "contact.faq.a2": "The price depends on the scope, functionality and design complexity of the project. Contact us for a free consultation and personalized quote.",
    "contact.faq.q3": "Do you offer maintenance after the site is completed?",
    "contact.faq.a3": "Yes, we offer various maintenance packages that include technical support, security updates and content changes. This ensures that your website always runs smoothly.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("et");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
