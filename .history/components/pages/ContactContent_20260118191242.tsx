"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactContent = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.form.success"),
      description: t("contact.form.successDescription"),
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              {t("contact.title")}
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
                {t("contact.form.title")}
              </h2>
              <p className="text-muted-foreground mb-8">{t("contact.form.description")}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    {t("contact.form.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("contact.form.companyPlaceholder")}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="min-h-[160px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "..."
                  ) : (
                    <>
                      {t("contact.form.submit")}
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">
                {t("contact.info.title")}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.info.email")}</h3>
                    <a
                      href="mailto:info@marvar.ee"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@marvar.ee
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.info.phone")}</h3>
                    <a
                      href="tel:+3725551234"
                      className="text-muted-foreground hover:text-teal transition-colors"
                    >
                      +372 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contact.info.location")}</h3>
                    <p className="text-muted-foreground">
                      Tallinn, Eesti
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12 p-8 bg-secondary rounded-2xl">
                <h3 className="font-display font-medium text-xl mb-4">
                  {t("contact.faq.title")}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">{t("contact.faq.q1")}</p>
                    <p className="text-muted-foreground mt-1">
                      {t("contact.faq.a1")}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.faq.q2")}</p>
                    <p className="text-muted-foreground mt-1">
                      {t("contact.faq.a2")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
