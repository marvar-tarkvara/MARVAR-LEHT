import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/meist", label: t("nav.about") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/kontakt", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "et" ? "en" : "et");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="MarVariks logo" className="h-10 w-auto" />
            <span className="text-2xl font-display font-semibold text-foreground">
              Mar<span className="text-accent">Variks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language === "et" ? "EN" : "ET"}</span>
            </button>
            <Button variant="accent" asChild>
              <Link to="/kontakt">{t("nav.cta")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{language === "et" ? "English" : "Eesti"}</span>
              </button>
              <Button variant="accent" className="mt-4" asChild>
                <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.cta")}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
