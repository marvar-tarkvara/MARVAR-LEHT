"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "TechStart OÜ",
    category: "E-commerce",
    categoryEt: "E-kaubandus",
    description: "Modern e-shop with excellent user experience. Conversion rate increased by 47%.",
    descriptionEt: "Modernne e-pood koos täiusliku kasutajakogemusega. Konversioonimäär tõusis 47%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 2,
    title: "Nordic Design",
    category: "Brand Website",
    categoryEt: "Brändi veebileht",
    description: "Minimalist portfolio page for a design studio. Focus on visual storytelling.",
    descriptionEt: "Minimalistlik portfoolioleht disainistuudiole. Fookuses visuaalne storytelling.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd8575f3f0?w=800&h=600&fit=crop",
    color: "teal",
  },
  {
    id: 3,
    title: "GreenTech Solutions",
    category: "Business Website",
    categoryEt: "Äri veebileht",
    description: "Innovative website for an environmental company. Interactive service presentation.",
    descriptionEt: "Innovatiivne veebileht keskkonnaettevõttele. Interaktiivne teenuste esitlus.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 4,
    title: "Resto Maitsed",
    category: "Restaurant Website",
    categoryEt: "Restorani veebileht",
    description: "Elegant website for a restaurant with menu and booking system.",
    descriptionEt: "Elegantne veebileht restoranile koos menüü ja broneerimissüsteemiga.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    color: "teal",
  },
  {
    id: 5,
    title: "Fintech Pro",
    category: "SaaS Platform",
    categoryEt: "SaaS platvorm",
    description: "User-friendly financial services platform. Intuitive dashboard and reports.",
    descriptionEt: "Kasutajasõbralik finantsteenuste platvorm. Intuitive dashboard ja raportid.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 6,
    title: "WellBeing Clinic",
    category: "Medical Website",
    categoryEt: "Meditsiini veebileht",
    description: "Trust-building website for a healthcare facility. Online booking option.",
    descriptionEt: "Usaldust tekitav veebileht tervishoiuasutusele. Online broneerimise võimalus.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    color: "teal",
  },
];

const PortfolioContent = () => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground leading-tight">
              {t("portfolio.title")}
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
              {t("portfolio.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="mt-6">
                  <span className={`text-sm font-medium ${project.color === 'accent' ? 'text-accent' : 'text-teal'}`}>
                    {language === "et" ? project.categoryEt : project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {language === "et" ? project.descriptionEt : project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default PortfolioContent;
