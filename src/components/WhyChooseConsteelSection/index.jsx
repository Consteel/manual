import clsx from "clsx";
import styles from "./index.module.css";
import InnovationLandingIcon from "@site/static/img/innovation_landing.svg";
import SupportLandingIcon from "@site/static/img/support_landing.svg";
import TrustLandingIcon from "@site/static/img/trust_landing.svg";
import Translation from "@docusaurus/Translate";
const WhyChooseConsteelSection = () => {
  return (
    <div
      className={clsx(
        styles["why-choose-consteel-section"],
        "padding-vert--xl",
        "padding-horiz--md"
      )}
    >
      <div className="container">
        <h2
          className={clsx([
            "margin-bottom--lg",
            "cs-web-heading-xl",
            styles["why-choose-consteel-section--title"],
          ])}
        >
          <Translation>Why choose Consteel?</Translation>
        </h2>
        <div className="row margin-top--lg">
          <div className="col padding--lg">
            <TrustLandingIcon
              style={{
                fill: "var(--landing-page-title)",
              }}
            />
            <h3
              className={clsx([
                "cs-web-heading-l",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              <Translation>Trusted experience</Translation>
            </h3>
            <div className="cs-web-body-m">
              <Translation>
                ConSteel Solutions Ltd. is a software developer company
                specialized in structural analysis and design for steel,
                composite structures with more than 25 years of experience in
                steel design.
              </Translation>
            </div>
          </div>
          <div className="col padding--lg">
            <InnovationLandingIcon
              style={{
                fill: "var(--landing-page-title)",
              }}
            />
            <h3
              className={clsx([
                "cs-web-heading-l",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              <Translation>Pioneer innovations</Translation>
            </h3>
            <div className="cs-web-body-m">
              <Translation>
                We continuously research and implement the most modern ways of
                steel design based on high-level, integrated numerical analysis.
                We are also seriously dealing with design issues outside of the
                standard methods in order to offer practical solutions for the
                engineers in these complex fields as well.
              </Translation>
            </div>
          </div>

          <div className="col padding--lg">
            <SupportLandingIcon
              style={{
                fill: "var(--landing-page-title)",
              }}
            />
            <h3
              className={clsx([
                "cs-web-heading-l",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              <Translation>Unparalleled support</Translation>
            </h3>
            <div className="cs-web-body-m">
              <Translation>
                With Consteel, you benefit from expert local support and
                valuable guidance at every stage, provided by our highly
                regarded and experienced support team. We’re proud that our
                users are satisfied with the support they receive.
              </Translation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseConsteelSection;
