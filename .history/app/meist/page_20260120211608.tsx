import Layout from "@/components/layout/Layout";
import AboutContent from "@/components/pages/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meist",
  description: "Oleme väike, kuid pühendunud meeskond, kes usub, et hea veebileht on rohkem kui lihtsalt ilus disain. MARVAR Tarkvara OÜ - Tallinn, Eesti.",
  openGraph: {
    title: "Meist - MarVar",
    description: "Oleme väike, kuid pühendunud meeskond, kes usub, et hea veebileht on rohkem kui lihtsalt ilus disain.",
    url: "https://marvar.ee/meist",
  },
  alternates: {
    canonical: "https://marvar.ee/meist",
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
