import clsx from "clsx";
import styles from "./index.module.css";
import Translation from "@docusaurus/Translate";
import Button from "../Button";
import FacebookIcon from "@site/static/img/social_media_icons_facebook.svg";
import LinkedInIcon from "@site/static/img/social_media_icons_linkedin.svg";
import YoutubeIcon from "@site/static/img/social_media_icons_youtube.svg";
import WindowsIcon from "@site/static/img/microsoft-windows.svg";

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
          className={clsx([
            "padding--md",
            "cs-web-body-s",
            styles["home-page-footer-column"],
          ])}
        >
          <h4 className="cs-web-heading-m">
            <Translation>Site</Translation>
          </h4>
          <div className="margin-bottom--md">
            <a className={clsx([styles["home-page-footer-link"]])} href="">
              <Translation>Terms of use</Translation>{" "}
            </a>
          </div>
          <div className="margin-bottom--md">
            <a className={clsx([styles["home-page-footer-link"]])} href="">
              <Translation>Privacy policy</Translation>{" "}
            </a>
          </div>
          <div className="margin-bottom--md">
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
          className={clsx([
            "padding--md",
            "cs-web-body-s",
            styles["home-page-footer-column"],
          ])}
        >
          <h4 className="cs-web-heading-m">
            <Translation>Consteel</Translation>
          </h4>
          <div className="margin-bottom--md">
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/products/consteel/ "
            >
              <Translation>Solutions</Translation>
            </a>
          </div>
          <div className="margin-bottom--md">
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="https://consteelsoftware.com/offers-licensing/ "
            >
              <Translation>Plans</Translation>
            </a>
          </div>
          <div className="margin-bottom--md">
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
          className={clsx([
            "padding--md",
            "cs-web-body-s",
            styles["home-page-footer-column"],
          ])}
        >
          <h4 className="cs-web-heading-m">
            <Translation>Docs</Translation>
          </h4>
          <div className="margin-bottom--md">
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="docs/manual/intro"
            >
              <Translation>Consteel</Translation>
            </a>
          </div>

          <div className="margin-bottom--md">
            <a
              className={clsx([styles["home-page-footer-link"]])}
              href="docs/descript/15_1_introduction/"
            >
              <Translation>Descript</Translation>
            </a>
          </div>
          <div className="margin-bottom--md">
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
          className={clsx([
            "padding--md",
            "cs-web-body-s",
            styles["about"],
            styles["home-page-footer-column"],
          ])}
        >
          <div>
            <h4 className="cs-web-heading-m">
              <Translation>About Consteel Solutions </Translation>
            </h4>

            <div className="cs-web-body-m">
              <Translation>
                The mission behind all developments of Consteel team is the
                overall reform of the way of structural design in all aspects.
              </Translation>
            </div>
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
              />
            </a>
            <a
              href="https://www.youtube.com/@ConSteelSolutions"
              target="_blank"
            >
              <YoutubeIcon
                className={clsx([styles["social-media-icon"]])}
                width={38}
              />
            </a>
          </div>
        </div>
        <div className={clsx(["padding--md", styles["get-started-container"]])}>
          <h2 className={clsx(["cs-web-heading-xl", styles["get-started"]])}>
            <Translation>Get started with consteel</Translation>
          </h2>
          <div className={clsx([styles["get-started-buttons"]])}>
            <a
              href="https://consteelsoftware.com/contact/#request"
              target="_blank"
            >
              <Button
                className="margin-vert--md margin-right--lg"
                variant="outlined"
              >
                <Translation>Request offer</Translation>
              </Button>
            </a>

            <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
              <Button color="secondary" className="margin-vert--md">
                <div className={clsx([styles["try-for-free-btn"]])}>
                  <WindowsIcon className="margin-right--md" height={18} />
                  <Translation>Try for free</Translation>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
