import clsx from "clsx";
import styles from "./index.module.css";
import Button from "../Button";
import Translation from "@docusaurus/Translate";
import { useDataTheme } from "../../useDataTheme";
import BrowserOnly from "@docusaurus/BrowserOnly";

const SimplifyYourDesignProcessSection = () => {
  return (
    <BrowserOnly>
      {() => {
        const theme = useDataTheme();

        return (
          <div
            className={clsx([
              styles["simplify-your-design-process-section-container"],
              "padding-vert--xl",
              "padding-horiz--md",
            ])}
          >
            <div
              className={clsx([
                "container",
                "row",
                styles["margin-0-auto"],
                styles["simplify-your-design-process-section"],
              ])}
            >
              <div className={clsx([styles["flex-1"]])}>
                <h2 className={clsx(["cs-web-heading-xl", styles["title"]])}>
                  <Translation>Simplify your design process</Translation>
                </h2>
                <a
                  href="https://consteelsoftware.com/#tryforfree"
                  target="_blank"
                >
                  <Button
                    variant="default"
                    color="secondary"
                    className="margin-right--md"
                  >
                    <Translation>Try for free</Translation>
                  </Button>
                </a>
                <a
                  href="https://consteelsoftware.com/offers-licensing/"
                  target="_blank"
                >
                  <Button variant="default" className="margin-left--md">
                    <Translation>Plans</Translation>
                  </Button>
                </a>
              </div>
              <div>
                <img
                  width={300}
                  style={{ maxWidth: "100%" }}
                  src={
                    theme === "dark"
                      ? "img/consteel_logo_2022_white.png"
                      : "img/consteel_logo_2022_blue_gradient.png"
                  }
                />
              </div>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default SimplifyYourDesignProcessSection;
