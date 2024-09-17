import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomePageHeaderSection from "@site/src/components/HomePageHeaderSection";
import WhyChooseConsteelSection from "../components/WhyChooseConsteelSection";
import SimplifyYourDesignProcessSection from "../components/SimplifyYourDesignProcessSection";
import ResourcesSection from "../components/ResourcesSection";
import OurPartnersSection from "../components/OurPartnersSection";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomePageHeaderSection />
        <ResourcesSection />
        <WhyChooseConsteelSection />
        <SimplifyYourDesignProcessSection />
        <OurPartnersSection />
      </main>
    </Layout>
  );
}
