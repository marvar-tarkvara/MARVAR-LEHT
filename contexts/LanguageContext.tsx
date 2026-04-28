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
    "hero.title": "Ehitame veebilahendusi, mis panevad Sinu äri",
    "hero.titleHighlight": "kasvama",
    "hero.description": "Unusta staatilised visiitkaardid internetis. Meie loome kiireid, müügile orienteeritud ja kaasaegseid veebilehti, mis aitavad Sul konkurentidest eristuda ning külastajad päriselt klientideks muuta.",
    "hero.cta": "Arutame Sinu visiooni",
    "hero.secondary": "Vaata portfooliot",
    
    // Services
    "services.title": "Meie teenused",
    "services.subtitle": "Terviklikud lahendused Sinu ettevõtte digitaalseks kasvuks",
    "services.web.title": "Veebiarendus ja disain",
    "services.web.description": "Me ei tee lihtsalt \"kodulehti\". Me loome terviklikke tööriistu, mis on optimeeritud konversioonideks, kiired igas seadmes ja visuaalselt kütkestavad. Sinu bränd väärib veebi, mis peegeldab Sinu teenuse kvaliteeti.",
    "services.seo.title": "SEO ja nähtavus",
    "services.seo.description": "Mis kasu on kaunist lehest, kui kliendid seda üles ei leia? Seadistame Sinu kodulehe nii, et Google armastaks seda, tuues potentsiaalsed kliendid läbi otsingumootori otse Sinu juurde.",
    "services.maintenance.title": "Hooldus ja tehniline tugi",
    "services.maintenance.description": "Sinu rahuolu on meie prioriteet. Oleme Sulle partneriks ka pärast lehe valmimist, tagades turvalisuse, kiiruse ja pidevad uuendused, et Sina saaksid muretult oma äri juhtimisele keskenduda.",
    
    // Trust (Miks valida meid? / Müügiargumendid)
    "trust.title": "Miks valida meid?",
    "trust.subtitle": "Müügiargumendid, mis räägivad enda eest",
    "trust.experience.title": "Meie tugevused",
    "trust.experience.description": "Kiirus ja Paindlikkus - Me reageerime operatiivselt ja kohandume vastavalt Sinu äri dünaamikale.",
    "trust.quality.title": "Tulemustele orienteeritus",
    "trust.quality.description": "Iga arendusetapp on läbi mõeldud eesmärgiga tuua Sulle rohkem päringuid ja reaalset müüki.",
    "trust.results.title": "Läbipaistev suhtlus",
    "trust.results.description": "Ei mingit keerulist IT-žargooni - räägime asjadest nii, nagu need on, ja hoiame Sind protsessiga kursis.",
    "trust.stat.projects": "Lõpetatud projekti",
    "trust.stat.clients": "Rahulolev klient",
    "trust.stat.years": "Aastat kogemust",
    
    // CTA
    "cta.title": "Sinu ettevõtte uus tase algab siit",
    "cta.description": "Kas Sul on idee, mis vajab teostust, või vajab praegune veebileht värskenduskuuri? Võta meiega ühendust ja vaatame koos, kuidas saame Sinu äri veebis nähtavamaks muuta. Esimene konsultatsioon ja nõustamine on meie poolt tasuta.",
    "cta.button": "Saada meile päring",
    
    // Footer
    "footer.description": "Ehitame veebilahendusi, mis panevad Sinu äri kasvama.",
    "footer.navigation": "Navigatsioon",
    "footer.contact": "Kontakt",
    "footer.rights": "Kõik õigused kaitstud.",
    
    // About page
    "about.title": "Meist",
    "about.subtitle": "MarVar - Sinu agiilne tehnoloogiapartner",
    "about.story.title": "Meie lugu",
    "about.story.p1": "MarVar sündis soovist pakkuda personaalset ja kiiret teenust, mida suured agentuurid tihti pakkuda ei suuda.",
    "about.story.p2": "Oleme kaks pühendunud arendajat, kes usuvad, et parimad tulemused sünnivad tihedas koostöös kliendiga. Meie jaoks ei ole ükski projekt \"lihtsalt järjekordne töö\" - me panustame igasse lahendusse maksimaalse täpsuse ja kirega, et tagada Sinu ettevõtte digitaalne edu.",
    "about.values.title": "Meie väärtused",
    "about.values.quality.title": "Kvaliteet",
    "about.values.quality.description": "Me ei tee kompromisse kvaliteedis. Iga piksel ja koodirida on hoolikalt läbi mõeldud.",
    "about.values.transparency.title": "Läbipaistvus",
    "about.values.transparency.description": "Hoiame teid kursis kogu protsessi vältel. Ausus ja avatud suhtlus on meie prioriteet.",
    "about.values.innovation.title": "Innovatsioon",
    "about.values.innovation.description": "Kasutame kaasaegseid tehnoloogiaid ja parimaid praktikaid, et luua tulevikukindlaid lahendusi.",
    "about.values.partnership.title": "Partnerlus",
    "about.values.partnership.description": "Me ei ole lihtsalt teenusepakkuja - oleme teie partner digitaalses arengus.",
    
    // Portfolio page
    "portfolio.title": "Meie tehtud tööd",
    "portfolio.subtitle": "Valik projektidest, mis näitavad meie oskusi ja lähenemist",
    "portfolio.cta.title": "Soovid sarnast tulemust?",
    "portfolio.cta.description": "Võta meiega ühendust ja arutame, kuidas saame teie projekti ellu viia.",
    "portfolio.cta.button": "Alusta projekti",
    
    // Contact page
    "contact.title": "Sinu ettevõtte uus tase algab siit",
    "contact.subtitle": "Kas Sul on idee, mis vajab teostust, või vajab praegune veebileht värskenduskuuri? Võta meiega ühendust ja vaatame koos, kuidas saame Sinu äri veebis nähtavamaks muuta. Esimene konsultatsioon ja nõustamine on meie poolt tasuta.",
    "contact.form.title": "Saada meile päring",
    "contact.form.description": "Täida vorm ja võtame Sinuga ühendust 24 tunni jooksul.",
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
    "hero.title": "We build web solutions that make your business",
    "hero.titleHighlight": "grow",
    "hero.description": "Forget static business cards on the internet. We create fast, sales-oriented and modern websites that help you stand out from competitors and truly convert visitors into customers.",
    "hero.cta": "Let's discuss your vision",
    "hero.secondary": "View Portfolio",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Complete solutions for your business's digital growth",
    "services.web.title": "Web Development and Design",
    "services.web.description": "We don't just make \"websites\". We create comprehensive tools optimized for conversions, fast on every device and visually captivating. Your brand deserves a web presence that reflects your service quality.",
    "services.seo.title": "SEO and Visibility",
    "services.seo.description": "What good is a beautiful site if clients can't find it? We set up your website so Google loves it, bringing potential clients through search engines straight to you.",
    "services.maintenance.title": "Maintenance and Technical Support",
    "services.maintenance.description": "Your peace of mind is our priority. We stay your partner even after the site is complete, ensuring security, speed and continuous updates so you can focus on running your business.",
    
    // Trust
    "trust.title": "Why Choose Us?",
    "trust.subtitle": "Sales arguments that speak for themselves",
    "trust.experience.title": "Our Strengths",
    "trust.experience.description": "Speed and Flexibility - We respond promptly and adapt to the dynamics of your business.",
    "trust.quality.title": "Results-Oriented",
    "trust.quality.description": "Every development stage is designed with the goal of bringing you more inquiries and real sales.",
    "trust.results.title": "Transparent Communication",
    "trust.results.description": "No complex IT jargon - we talk about things as they are and keep you informed throughout the process.",
    "trust.stat.projects": "Completed Projects",
    "trust.stat.clients": "Happy Clients",
    "trust.stat.years": "Years Experience",
    
    // CTA
    "cta.title": "Your business's next level starts here",
    "cta.description": "Have an idea that needs execution, or does your current website need a refresh? Get in touch and let's see together how we can make your business more visible online. First consultation and advice is on us.",
    "cta.button": "Send us a request",
    
    // Footer
    "footer.description": "We build web solutions that make your business grow.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    
    // About page
    "about.title": "About Us",
    "about.subtitle": "MarVar - Your agile technology partner",
    "about.story.title": "Our Story",
    "about.story.p1": "MarVar was born from the desire to offer personal and fast service that large agencies often can't provide.",
    "about.story.p2": "We are two dedicated developers who believe the best results come from close collaboration with the client. For us, no project is \"just another job\" - we invest maximum precision and passion into every solution to ensure your company's digital success.",
    "about.values.title": "Our Values",
    "about.values.quality.title": "Quality",
    "about.values.quality.description": "We don't compromise on quality. Every pixel and line of code is carefully thought through.",
    "about.values.transparency.title": "Transparency",
    "about.values.transparency.description": "We keep you informed throughout the process. Honesty and open communication is our priority.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "We use modern technologies and best practices to create future-proof solutions.",
    "about.values.partnership.title": "Partnership",
    "about.values.partnership.description": "We are not just a service provider - we are your partner in digital development.",
    
    // Portfolio page
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "A selection of projects showcasing our skills and approach",
    "portfolio.cta.title": "Want Similar Results?",
    "portfolio.cta.description": "Contact us and let's discuss how we can bring your project to life.",
    "portfolio.cta.button": "Start a Project",
    
    // Contact page
    "contact.title": "Your business's next level starts here",
    "contact.subtitle": "Have an idea that needs execution, or does your current website need a refresh? Get in touch and let's see together how we can make your business more visible online. First consultation and advice is on us.",
    "contact.form.title": "Send us a request",
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
