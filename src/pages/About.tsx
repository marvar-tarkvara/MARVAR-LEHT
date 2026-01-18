import { motion } from "framer-motion";
import { Target, Heart, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTA from "@/components/sections/CTA";

const values = [
  {
    icon: Target,
    title: "Eesmärgipärasus",
    description: "Iga projekt algab selge eesmärgiga. Mõistame teie äri ja loome lahenduse, mis toetab teie kasvu.",
  },
  {
    icon: Heart,
    title: "Kirg kvaliteedi vastu",
    description: "Ei tee kompromisse detailide osas. Iga piksel, iga interaktsioon on läbimõeldud.",
  },
  {
    icon: Award,
    title: "Tulemustele orienteeritus",
    description: "Veebileht pole eesmärk omaette – see on tööriist, mis peab tooma teile tulemusi.",
  },
];

const About = () => {
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
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              Meist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground leading-tight">
              Loome veebilehti, millega olete{" "}
              <span className="text-gradient-accent">uhke</span>
            </h1>
            <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
              Oleme väike, kuid ambitsioonikas meeskond, kes usub, et hea veebileht on rohkem kui 
              lihtsalt ilus fassaad – see on strateegiline tööriist, mis aitab teil oma eesmärke saavutada.
            </p>
          </motion.div>
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
                Meie lugu
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  VeebiStuudio sai alguse lihtsast ideest: pakkuda ettevõtetele veebilahendusi, 
                  mis on sama kvaliteetsed kui suured agentuurid, kuid ilma keerulise bürokraatia ja 
                  kõrgete hindadeta.
                </p>
                <p>
                  Aastate jooksul oleme kasvanud usaldusväärseks partneriks paljudele ettevõtetele, 
                  kes väärtustavad läbimõeldud disaini ja tehnilist kvaliteeti.
                </p>
                <p>
                  Usume, et parim veebileht on selline, mis on loodud koostöös kliendiga, mõistes 
                  tema vajadusi, eesmärke ja sihtrühma.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary rounded-2xl p-8 md:p-12"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-semibold text-accent">8+</div>
                  <p className="mt-2 text-muted-foreground">aastat kogemust</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-semibold text-teal">50+</div>
                  <p className="mt-2 text-muted-foreground">projekti teostatud</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-semibold text-accent">100%</div>
                  <p className="mt-2 text-muted-foreground">pühendumust</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-semibold text-teal">24/7</div>
                  <p className="mt-2 text-muted-foreground">tugi ja hooldus</p>
                </div>
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
              Meie <span className="text-gradient-teal">väärtused</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </Layout>
  );
};

export default About;
