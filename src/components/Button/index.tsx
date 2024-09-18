import clsx from "clsx";
import styles from "./index.module.css";
import { ReactNode } from "react";

const Button = ({
  variant = "default",
  color = "primary",
  children,
  className,
}: {
  variant?: "default" | "outlined";
  color?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        styles["landing-button"],
        styles[`landing-button-${color}-${variant}`],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
