import clsx from "clsx";
import Button from "../Button";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

const HomePageHeaderSection = () => {
  return (
    <div className={styles["home-page-header-section"]}>
      <div
        className={clsx([
          "row",
          "row--align-center",
          "text--left",
          styles["margin-0-auto"],
          "container",
          "padding-vert--xl",
          "padding-horiz--md"
        ])}
      >
        <div className="col">
          <div className="margin-bottom--md">
            <h1 className={clsx(["text--uppercase", styles["title"]])}>
              <Translate>Consteel</Translate> <br />{" "}
              <Translate>Documentation</Translate> <br />{" "}
              <Translate>Center</Translate>
            </h1>
          </div>

          <div className="hero__subtitle">
            <Translate>
              Learn how to master advanced steel design in the most rewarding
              way
            </Translate>
          </div>
          <div className="row">
            <a href="docs/manual/intro">
              <Button
                variant="default"
                color="secondary"
                className="margin--md"
              >
                <Translate>Get started</Translate>
              </Button>
            </a>
            <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
              <Button
                variant="outlined"
                color="primary"
                className="margin-left--md margin-vert--md"
              >
                <Translate>Try for free</Translate>
              </Button>
            </a>
          </div>
        </div>
        <div className="col">
          <img src="img/hall_with_podium_buckling.webp"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeaderSection;
