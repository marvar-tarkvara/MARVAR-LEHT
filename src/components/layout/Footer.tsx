import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-display font-semibold">
              Veebi<span className="text-accent">Stuudio</span>
            </span>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Loome läbimõeldud ja visuaalselt kõnekaid veebilahendusi, mis aitavad ettevõtetel silma paista.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigatsioon</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Avaleht
              </Link>
              <Link to="/meist" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Meist
              </Link>
              <Link to="/portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Portfoolio
              </Link>
              <Link to="/kontakt" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <a href="mailto:info@veebistuudio.ee" className="hover:text-accent transition-colors">
                info@veebistuudio.ee
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
            © {new Date().getFullYear()} VeebiStuudio. Kõik õigused kaitstud.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privaatsus" className="hover:text-accent transition-colors">
              Privaatsuspoliitika
            </Link>
            <Link to="/tingimused" className="hover:text-accent transition-colors">
              Kasutustingimused
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
