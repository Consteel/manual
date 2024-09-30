import clsx from "clsx";
import styles from "./index.module.css";
import ResourcesSectionCard from "./ResourcesSectionCard";
import BullHornOutline from "@site/static/img/bullhorn-outline.svg";
import CodeBlock from "@site/static/img/code-block-tags.svg";
import FileDocument from "@site/static/img/file-document-outline.svg";
import Puzzle from "@site/static/img/puzzle-outline.svg";
import Translation from "@docusaurus/Translate";

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
            title={<Translation>Consteel manual</Translation>}
            link="docs/manual/intro"
            description={
              <Translation>
                Browse our online manual to learn how Consteel works from top to
                bottom
              </Translation>
            }
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
            title={<Translation>Descript documentation</Translation>}
            description={
              <Translation>
                Learn how Descript works and how to write scripts in Consteel
              </Translation>
            }
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
            title={<Translation>Plugin documentation</Translation>}
            description={
              <Translation>
                Find out how our plugins work together with Consteel
              </Translation>
            }
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
            title={<Translation>Release notes</Translation>}
            description={
              <Translation>
                Stay up-to-date about the latest features, bug-fixes and version
                releases
              </Translation>
            }
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
