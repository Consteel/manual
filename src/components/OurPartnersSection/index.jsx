import clsx from "clsx";
import styles from "./index.module.css";
import SwecoLogo from "@site/static/img/sweco_logo.svg";
import WolfSystemLogo from "@site/static/img/wolf_system_logo.svg";
import KeszLogo from "@site/static/img/kesz_logo.svg";
import OpenConstructionLogo from "@site/static/img/open_construction_logo.svg";
import ArrayTechnologiesLogo from "@site/static/img/array_technologies_logo.svg";

const OurPartnersSection = () => {
  return (
    <div className={clsx([styles["our-partners-section"], "padding--xl"])}>
      <div className="container">
        <h1 className={clsx(["text--uppercase", styles["title"]])}>
          Our partners who use Consteel{" "}
        </h1>
        <div
          className={clsx("row", styles["logo-container"])}
          style={{ gap: "3rem" }}
        >
          <ArrayTechnologiesLogo
            style={{
              maxWidth: 200,
              fill: "var(--landing-page-background-color-2-contrast)",
            }}
            fill="var(--landing-page-background-color-2-contrast)"
            width={"100%"}
          />

          <SwecoLogo
            style={{
              maxWidth: 200,
              fill: "var(--landing-page-background-color-2-contrast)",
            }}
            width={"100%"}
          />
          <KeszLogo
            style={{
              maxWidth: 200,
              fill: "var(--landing-page-background-color-2-contrast)",
            }}
            width={"100%"}
          />
          <OpenConstructionLogo
            style={{
              maxWidth: 200,
              fill: "var(--landing-page-background-color-2-contrast)",
            }}
            width={"100%"}
          />
          <WolfSystemLogo
            style={{
              maxWidth: 200,
              fill: "var(--landing-page-background-color-2-contrast)",
            }}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSection;
