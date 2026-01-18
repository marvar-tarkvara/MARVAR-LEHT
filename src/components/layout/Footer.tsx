import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="MarVariks logo" className="h-10 w-auto" />
              <span className="text-2xl font-display font-semibold">
                Mar<span className="text-accent">Variks</span>
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.navigation")}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.home")}
              </Link>
              <Link to="/meist" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.about")}
              </Link>
              <Link to="/portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.portfolio")}
              </Link>
              <Link to="/kontakt" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <a href="mailto:info@marvariks.ee" className="hover:text-accent transition-colors">
                info@marvariks.ee
              </a>
              <a href="tel:+3725551234" className="hover:text-accent transition-colors">
                +372 555 1234
              </a>
              <p>Tallinn, Eesti</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} MarVariks. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
