import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MARVAR Tarkvara OÜ",
            alternateName: "MarVar",
            url: "https://marvar.ee",
            logo: "https://marvar.ee/marvar-tarkvara.png",
            email: "info@marvar.ee",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressCountry: "EE",
            },
            sameAs: [],
            description:
              "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "MarVar",
            url: "https://marvar.ee",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://marvar.ee/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MARVAR Tarkvara OÜ",
            image: "https://marvar.ee/marvar-tarkvara.png",
            email: "info@marvar.ee",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressCountry: "Estonia",
            },
            priceRange: "€€",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
      <Hero />
      <Services />
      <Trust />
      <CTA />
    </Layout>
  );
}
