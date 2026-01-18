import Layout from "@/components/layout/Layout";
import AboutContent from "@/components/pages/AboutContent";

export const metadata = {
  title: "Meist - MarVariks",
  description: "Oleme väike, kuid pühendunud meeskond, kes usub, et hea veebileht on rohkem kui lihtsalt ilus disain.",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
