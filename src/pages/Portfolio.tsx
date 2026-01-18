import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTA from "@/components/sections/CTA";

const projects = [
  {
    id: 1,
    title: "TechStart OÜ",
    category: "E-kaubandus",
    description: "Modernne e-pood koos täiusliku kasutajakogemusega. Konversioonimäär tõusis 47%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 2,
    title: "Nordic Design",
    category: "Brändi veebileht",
    description: "Minimalistlik portfoolioleht disainistuudiole. Fookuses visuaalne storytelling.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd8575f3f0?w=800&h=600&fit=crop",
    color: "teal",
  },
  {
    id: 3,
    title: "GreenTech Solutions",
    category: "Äri veebileht",
    description: "Innovatiivne veebileht keskkonnaettevõttele. Interaktiivne teenuste esitlus.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 4,
    title: "Resto Maitsed",
    category: "Restorani veebileht",
    description: "Elegantne veebileht restoranile koos menüü ja broneerimissüsteemiga.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    color: "teal",
  },
  {
    id: 5,
    title: "Fintech Pro",
    category: "SaaS platvorm",
    description: "Kasutajasõbralik finantsteenuste platvorm. Intuitive dashboard ja raportid.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    id: 6,
    title: "WellBeing Clinic",
    category: "Meditsiini veebileht",
    description: "Usaldust tekitav veebileht tervishoiuasutusele. Online broneerimise võimalus.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    color: "teal",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-8">
              Portfoolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground leading-tight">
              Meie{" "}
              <span className="text-gradient-teal">tehtud tööd</span>
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
              Iga projekt on ainulaadne väljakutse. Siin on valik meie töödest, mis demonstreerivad 
              meie lähenemist ja võimekust.
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
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="mt-6">
                  <span className={`text-sm font-medium ${project.color === 'accent' ? 'text-accent' : 'text-teal'}`}>
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Portfolio;
