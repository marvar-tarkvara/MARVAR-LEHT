"use client";

import { motion } from "framer-motion";
import { Target, Heart, Award, Lightbulb } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutContent = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Heart,
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description"),
    },
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: Award,
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.description"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground leading-tight"
          >
            {t("about.subtitle")}
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                {t("about.story.title")}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary rounded-2xl p-8 md:p-12"
            >
              <div className="text-center">
                <div className="text-4xl font-display font-semibold text-teal">24/7</div>
                <p className="mt-2 text-muted-foreground">{t("services.maintenance.title")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium">
              {t("about.values.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-teal flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-teal-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default AboutContent;
