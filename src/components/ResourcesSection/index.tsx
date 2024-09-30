import clsx from "clsx";
import styles from "./index.module.css";
import ResourcesSectionCard from "./ResourcesSectionCard";
import BullHornOutline from "@site/static/img/bullhorn-outline.svg";
import CodeBlock from "@site/static/img/code-block-tags.svg";
import FileDocument from "@site/static/img/file-document-outline.svg";
import Puzzle from "@site/static/img/puzzle-outline.svg";
import Translation, { translate } from "@docusaurus/Translate";

const ResourcesSection = () => {
  return (
    <div className={clsx([styles["resources-section-container"]])}>
      <div
        className={clsx([
          "padding-vert--xl",
          "padding-horiz--md",
          styles["resources-section"],
          "container",
        ])}
      >
        <div className={clsx([styles["flex-50"], "padding--md"])}>
          <div
            className={clsx([
              styles["resources-section-title-card"],
              "padding--lg",
            ])}
          >
            <h2 className={clsx([styles["title"], "text--uppercase"])}>
              <Translation>Resources</Translation>
            </h2>
            <div>
              <Translation>
                Discover the key resources in our documentation center
              </Translation>{" "}
            </div>
          </div>
        </div>

        <div
          className={clsx([
            styles["resources-section-card-container"],
            "padding--md",
          ])}
        >
          <ResourcesSectionCard
            IconComponent={FileDocument}
            title={translate({ message: "Consteel manual" })}
            link="docs/manual/intro"
            description={translate({
              message:
                "Browse our online manual to learn how Consteel works from top to bottom",
            })}
          />
        </div>
        <div
          className={clsx([
            styles["resources-section-card-container"],
            "padding--md",
          ])}
        >
          <ResourcesSectionCard
            IconComponent={CodeBlock}
            link="docs/descript/15_1_introduction"
            title={translate({ message: "Descript documentation" })}
            description={translate({
              message:
                "Learn how Descript works and how to write scripts in Consteel",
            })}
          />
        </div>
        <div
          className={clsx([
            styles["resources-section-card-container"],
            "padding--md",
          ])}
        >
          <ResourcesSectionCard
            IconComponent={Puzzle}
            link="docs/plugins/axis/axisvm-plugin"
            title={translate({ message: "Plugin documentation" })}
            description={translate({
              message: "Find out how our plugins work together with Consteel",
            })}
          />
        </div>
        <div
          className={clsx([
            styles["resources-section-card-container"],
            "padding--md",
          ])}
        >
          <ResourcesSectionCard
            IconComponent={BullHornOutline}
            link="release-notes"
            title={translate({ message: "Release notes" })}
            description={translate({
              message:
                "Stay up-to-date about the latest features, bug-fixes and version releases",
            })}
          />
        </div>
        <div className={clsx(styles["flex-50"], "padding--md")}>
          <img src="img/shell_element.png" height={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
