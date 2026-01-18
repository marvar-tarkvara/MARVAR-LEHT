import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Trust />
      <CTA />
    </Layout>
  );
}
