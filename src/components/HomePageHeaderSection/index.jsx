import clsx from "clsx";
import Button from "../Button";
import styles from "./index.module.css";

const HomePageHeaderSection = () => {
  return (
    <div className={styles["home-page-header-section"]}>
      <div className="row row--align-center text--left container padding--xl">
        <div className="col">
          <div className="margin-bottom--md">
            <h1 className={clsx(["text--uppercase", styles["title"]])}>
              CONSTEEL <br /> DOCUMENTATION <br /> CENTER
            </h1>
          </div>

          <div>
            Learn how to master advanced steel design in the most rewarding way
          </div>
          <div className="row">
            <a href="docs/manual/intro">
              <Button
                variant="default"
                color="secondary"
                className="margin--md"
              >
                Get started
              </Button>
            </a>
            <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
              <Button
                variant="outlined"
                color="primary"
                className="margin-left--md margin-vert--md"
              >
                Try for free
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
