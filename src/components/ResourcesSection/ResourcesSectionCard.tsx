import clsx from "clsx";
import styles from "./ResourcesSectionCard.module.css";
import ChevronRight from "@site/static/img/chevron-right.svg";
import { ReactNode, useState } from "react";

interface ResourcesSectionCardProps {
  title: string;
  description: string;
  link: string;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ResourcesSectionCard = ({
  title,
  link,
  description,
  IconComponent,
}: ResourcesSectionCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      className={clsx([styles["resources-section-card"], "padding--lg"])}
    >
      <IconComponent
        className="margin-bottom--md"
        width={40}
        height={40}
        style={{ fill: "var(--landing-page-background-color-contrast-2)" }}
      />
      <h3 className={clsx(["text--uppercase", "margin-bottom--md"])}>
        {title}
      </h3>
      <div className={clsx(styles["card-description"])}>{description}</div>
      <div
        className={clsx(
          styles["chevron-right"],
          hover ? styles["chevron-right--hover"] : ""
        )}
      >
        <ChevronRight
          style={{ fill: "var(--landing-page-background-color-contrast)" }}
          height={30}
          width={30}
        />
      </div>
    </a>
  );
};

export default ResourcesSectionCard;
