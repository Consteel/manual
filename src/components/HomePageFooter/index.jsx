import clsx from "clsx";
import styles from "./index.module.css";
import Translation from "@docusaurus/Translate";
import Button from "../Button";
import FacebookIcon from "@site/static/img/social_media_icons_facebook.svg";
import LinkedInIcon from "@site/static/img/social_media_icons_linkedin.svg";
import YoutubeIcon from "@site/static/img/social_media_icons_youtube.svg";

export default function HomePageFooter() {
  return (
    <div
      className={clsx([
        "home-page-footer",
        styles["home-page-footer"],
        "padding-vert--xl",
        "padding-horiz--md",
      ])}
    >
      <div className={clsx(["container", "row", styles["margin-0-auto"]])}>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h4 className="text--uppercase">
            <Translation>Site</Translation>
          </h4>
          <div>
            <a className={clsx([styles["home-page-footer-link"]])} href="">
              <Translation>Terms of use</Translation>{" "}
            </a>
          </div>
          <div>
            <a className={clsx([styles["home-page-footer-link"]])} href="">
              <Translation>Privacy policy</Translation>{" "}
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://steellionaward.com/"
            >
              <Translation>The Steel Lion Award</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://steelspace.io/"
            >
              <Translation>Steelspace</Translation>
            </a>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h4 className="text--uppercase">
            <Translation>Consteel</Translation>
          </h4>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/products/consteel/ "
            >
              <Translation>Solutions</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/products/offers-licensing/ "
            >
              <Translation>Plans</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/about/ "
            >
              <Translation>About</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/contact/ "
            >
              <Translation>Contact</Translation>
            </a>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h4 className="text--uppercase">
            <Translation>Docs</Translation>
          </h4>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="docs/manual/intro"
            >
              <Translation>Consteel</Translation>
            </a>
          </div>

          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="docs/descript/15_1_introduction/"
            >
              <Translation>Descript</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="docs/plugins/axis/axisvm-plugin"
            >
              <Translation>Plugins</Translation>
            </a>
          </div>
          <div>
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="release-notes"
            >
              <Translation>Release notes</Translation>
            </a>
          </div>
        </div>
        <div
          className={clsx(["padding--md", styles["home-page-footer-column"]])}
        >
          <h4 className="text--uppercase">
            <Translation>About Consteel Solutions </Translation>
          </h4>

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
                className={clsx([
                  styles["social-media-icon"],
                  "margin-right--md",
                ])}
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
        <div className={clsx(["padding--lg"])}>
          <h2 className={clsx(["text--uppercase", styles["get-started"]])}>
            <Translation>Get started with consteel</Translation>
          </h2>
          <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
            <Button
              color="secondary"
              className="margin-right--lg margin-vert--md"
            >
              <Translation>Try for free</Translation>
            </Button>
          </a>
          <a
            href="https://consteelsoftware.com/offers-licensing/"
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
