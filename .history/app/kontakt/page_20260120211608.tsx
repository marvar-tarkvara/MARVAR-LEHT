import Layout from "@/components/layout/Layout";
import ContactContent from "@/components/pages/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Võtke meiega ühendust! Oleme valmis kuulama teie ideid ja leidma parima lahenduse teie ettevõttele. MARVAR Tarkvara OÜ - Tallinn, Eesti.",
  openGraph: {
    title: "Kontakt - MarVar",
    description: "Võtke meiega ühendust! Oleme valmis kuulama teie ideid ja leidma parima lahenduse teie ettevõttele.",
    url: "https://marvar.ee/kontakt",
  },
  alternates: {
    canonical: "https://marvar.ee/kontakt",
  },
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
}
