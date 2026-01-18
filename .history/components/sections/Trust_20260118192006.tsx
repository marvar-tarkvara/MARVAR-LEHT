"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Trust = () => {
  const { t } = useLanguage();

  const features = [
    t("trust.experience.description"),
    t("trust.quality.description"),
    t("trust.results.description"),
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              {t("trust.title")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight">
              {t("trust.subtitle")}
            </h2>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
          >
            <h3 className="text-2xl font-display font-medium mb-8">
              {t("trust.experience.title")}
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
