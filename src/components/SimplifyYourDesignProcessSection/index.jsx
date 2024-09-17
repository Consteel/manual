import clsx from "clsx";
import styles from "./index.module.css";
import Button from "../Button";

const SimplifyYourDesignProcessSection = () => {
  return (
    <div
      className={clsx([
        styles["simplify-your-design-process-section-container"],
        ,
        "padding--xl",
      ])}
    >
      <div
        className={clsx([
          "container",
          styles["simplify-your-design-process-section"],
        ])}
      >
        <div className={clsx([styles["flex-1"]])}>
          <h1 className={clsx(["text--uppercase", styles["title"]])}>
            SIMPLIFY YOUR DESIGN PROCESS
          </h1>
          <a href="https://consteelsoftware.com/#tryforfree" target="_blank">
            <Button variant="outlined" color="secondary" className="margin--md">
              Try for free
            </Button>
          </a>
          <a href="https://consteelsoftware.com/products/offers-licensing/" target="_blank">
            <Button variant="default" className="margin--md">
              Plans
            </Button>
          </a>
        </div>
        <div>
          <img
            width={300}
            style={{ maxWidth: "100%" }}
            src={"img/consteel_logo_2022_blue_gradient.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default SimplifyYourDesignProcessSection;
