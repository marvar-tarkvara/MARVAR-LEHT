import { motion } from "framer-motion";
import { Monitor, Palette, Zap, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t("services.web.title"),
      description: t("services.web.description"),
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.description"),
    },
    {
      icon: Zap,
      title: t("services.seo.title"),
      description: t("services.seo.description"),
    },
    {
      icon: LineChart,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal text-sm font-medium uppercase tracking-wider">
            {t("services.title")}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-medium">
            {t("services.subtitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
