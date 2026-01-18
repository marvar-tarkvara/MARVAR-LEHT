import Layout from "@/components/layout/Layout";
import ContactContent from "@/components/pages/ContactContent";

export const metadata = {
  title: "Kontakt - MarVariks",
  description: "Oleme valmis kuulama teie ideid ja leidma parima lahenduse teie ettevõttele.",
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
}
