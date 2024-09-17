import clsx from "clsx";
import styles from "./index.module.css";
import InnovationLandingIcon from "@site/static/img/innovation_landing.svg";
import SupportLandingIcon from "@site/static/img/support_landing.svg";
import TrustLandingIcon from "@site/static/img/trust_landing.svg";

const WhyChooseConsteelSection = () => {
  return (
    <div className={clsx(styles["why-choose-consteel-section"], "padding--xl")}>
      <div className="container">
        <h1
          className={clsx([
            "margin-bottom--lg",
            "text--uppercase",
            styles["why-choose-consteel-section--title"],
          ])}
        >
          Why choose Consteel?
        </h1>
        <div className="row margin-top--lg">
          <div className="col padding--lg">
            <TrustLandingIcon
              style={{
                fill: "var(--landing-page-background-color-contrast-2)",
              }}
            />
            <h3
              className={clsx([
                "text--uppercase",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              Trusted experience
            </h3>
            <div>
              ConSteel Solutions Ltd. is a software developer company
              specialized in structural analysis and design for steel, composite
              structures with more than 25 years of experience in steel design.
            </div>
          </div>
          <div className="col padding--lg">
            <InnovationLandingIcon
              style={{
                fill: "var(--landing-page-background-color-contrast-2)",
              }}
            />
            <h3
              className={clsx([
                "text--uppercase",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              Pioneer innovations
            </h3>
            <div>
              We continuously research and implement the most modern ways of
              steel design based on high-level, integrated numerical analysis.
              We are also seriously dealing with design issues outside of the
              standard methods in order to offer practical solutions for the
              engineers in these complex fields as well.
            </div>
          </div>

          <div className="col padding--lg">
            <SupportLandingIcon
              style={{
                fill: "var(--landing-page-background-color-contrast-2)",
              }}
            />
            <h3
              className={clsx([
                "text--uppercase",
                styles["why-choose-consteel-section--title"],
              ])}
            >
              Unparalleled support
            </h3>
            <div>
              With Consteel, you benefit from expert local support and valuable
              guidance at every stage, provided by our highly regarded and
              experienced support team. We’re proud that our users are satisfied
              with the support they receive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseConsteelSection;
