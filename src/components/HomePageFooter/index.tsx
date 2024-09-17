import clsx from "clsx";
import styles from "./index.modules.css";
import Translation from "@docusaurus/Translate";
import Button from "../Button";
import FacebookIcon from "@site/static/img/social_media_icons_facebook.svg";
import LinkedInIcon from "@site/static/img/social_media_icons_linkedin.svg";
import YoutubeIcon from "@site/static/img/social_media_icons_youtube.svg";

export default function HomePageFooter() {
  return (
    <div
      className={clsx([
        styles["home-page-footer"],
        "padding-vert--xl",
        "padding-horiz--md",
      ])}
    >
      <div className={clsx(["container", "row", styles["margin-0-auto"]])}>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h3>
            <Translation>Site</Translation>
          </h3>
          <div>
            <Translation>Terms of use</Translation>
          </div>
          <div>
            <Translation>Privacy policy</Translation>
          </div>
          <div>
            <Translation>The Steel Lion Award notes</Translation>
          </div>
          <div>
            <Translation>Steelspace</Translation>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h3>
            <Translation>Consteel</Translation>
          </h3>
          <div>
            <Translation>Solutions</Translation>
          </div>
          <div>
            <Translation>Plans</Translation>
          </div>
          <div>
            <Translation>About</Translation>
          </div>
          <div>
            <Translation>Contact</Translation>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h3>
            <Translation>Docs</Translation>
          </h3>
          <div>
            <Translation>Consteel</Translation>
          </div>
          <div>
            <Translation>Descript</Translation>
          </div>
          <div>
            <Translation>Plugins</Translation>
          </div>
          <div>
            <Translation>Release notes</Translation>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h3>
            <Translation>About consteel solutions </Translation>
          </h3>
          <div>
            <Translation>Consteel Software Manual</Translation>
          </div>
          <div>
            <Translation>
              The ConSteel team’s mission is the general reform of the way
              structures are designed.
            </Translation>
          </div>
          <div className="margin-vert--md">
            <a
              href="https://www.linkedin.com/company/consteel-software/mycompany/"
              target="_blank"
            >
              <LinkedInIcon
                className={clsx([styles["social-media-icon"], "margin-right--md"])}
                width={38}
                style={{
                  fill: "var(--landing-page-background-color-2-contrast)",
                }}
              />
            </a>
            <a
              className="margin-right--md"
              href="https://www.facebook.com/Consteel"
              target="_blank"
            >
              <FacebookIcon
                width={38}
                className={clsx([styles["social-media-icon"]])}
                style={{
                  fill: "var(--landing-page-background-color-2-contrast)",
                }}
              />
            </a>
            <a
              href="https://www.youtube.com/@ConSteelSolutions"
              target="_blank"
            >
              <YoutubeIcon
                className={clsx([styles["social-media-icon"]])}
                width={38}
                style={{
                  fill: "var(--landing-page-background-color-2-contrast)",
                }}
              />
            </a>
          </div>
        </div>
        <div className={clsx(["padding--md"])}>
          <h1 className={clsx(["text--uppercase"])}>
            <Translation>Get started with consteel</Translation>
          </h1>
          <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
            <Button
              color="secondary"
              className="margin-right--lg margin-vert--md"
            >
              <Translation>Try for free</Translation>
            </Button>
          </a>
          <a
            href="https://consteelsoftware.com/products/offers-licensing/"
            target="_blank"
          >
            <Button className="margin-vert--md">
              <Translation>Plans</Translation>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
