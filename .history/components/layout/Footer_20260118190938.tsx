"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image src="/marvar.svg" alt="MarVar logo" width={32} height={32} className="h-8 w-8" />
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.navigation")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/meist" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.portfolio")}
              </Link>
              <Link href="/kontakt" className="text-primary-foreground/70 hover:text-accent transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <a href="mailto:info@marvar.ee" className="hover:text-accent transition-colors">
                info@marvar.ee
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
            © {new Date().getFullYear()} MarVar. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
