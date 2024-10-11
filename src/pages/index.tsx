import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomePageHeaderSection from "@site/src/components/HomePageHeaderSection";
import WhyChooseConsteelSection from "../components/WhyChooseConsteelSection";
import SimplifyYourDesignProcessSection from "../components/SimplifyYourDesignProcessSection";
import ResourcesSection from "../components/ResourcesSection";
import OurPartnersSection from "../components/OurPartnersSection";
import HomePageFooter from "../components/HomePageFooter";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={clsx([styles["landing-page"]])}>
        <HomePageHeaderSection />
        <ResourcesSection />
        <WhyChooseConsteelSection />
        <SimplifyYourDesignProcessSection />
        <OurPartnersSection />
        <HomePageFooter />
      </main>
    </Layout>
  );
}
