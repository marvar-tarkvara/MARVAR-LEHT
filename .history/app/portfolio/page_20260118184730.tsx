import Layout from "@/components/layout/Layout";
import PortfolioContent from "@/components/pages/PortfolioContent";

export const metadata = {
  title: "Portfoolio - MarVariks",
  description: "Valik projektidest, mis näitavad meie oskusi ja lähenemist veebiarenduses.",
};

export default function PortfolioPage() {
  return (
    <Layout>
      <PortfolioContent />
    </Layout>
  );
}
