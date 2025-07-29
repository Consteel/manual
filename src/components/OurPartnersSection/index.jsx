import clsx from "clsx";
import styles from "./index.module.css";
import SwecoLogo from "@site/static/img/sweco_logo.svg";
import WolfSystemLogo from "@site/static/img/wolf_system_logo.svg";
import KeszLogo from "@site/static/img/kesz_logo.svg";
import OpenConstructionLogo from "@site/static/img/open_construction_logo.svg";
import ArrayTechnologiesLogo from "@site/static/img/array_technologies_logo.svg";
import Translation from "@docusaurus/Translate";

const OurPartnersSection = () => {
  return (
    <div
      className={clsx([
        styles["our-partners-section"],
        "padding-vert--xl",
        "padding-horiz--md",
      ])}
    >
      <div className="container margin-vert--lg">
        <h2 className={clsx(["cs-web-heading-xl", styles["title"]])}>
          <Translation>Our partners who use Consteel</Translation>
        </h2>
        <div
          className={clsx("row", styles["logo-container"])}
          style={{ gap: "3rem" }}
        >
          <ArrayTechnologiesLogo
            style={{
              maxWidth: 160,
              fill: "var(--landing-page-title)",
            }}
            fill="var(--landing-page-title)"
            width={"100%"}
          />

          <SwecoLogo
            style={{
              maxWidth: 160,
              fill: "var(--landing-page-title)",
            }}
            width={"100%"}
          />
          <KeszLogo
            style={{
              maxWidth: 160,
              fill: "var(--landing-page-title)",
            }}
            width={"100%"}
          />
          <OpenConstructionLogo
            style={{
              maxWidth: 160,
              fill: "var(--landing-page-title)",
            }}
            width={"100%"}
          />
          <WolfSystemLogo
            style={{
              maxWidth: 160,
              fill: "var(--landing-page-title)",
            }}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSection;
