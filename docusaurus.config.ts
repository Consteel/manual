import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Consteel Documentation Center",
  tagline: "Comprehensive guides for structural engineers",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.consteelsoftware.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hu"],
  },
   future: {
    experimental_faster: true, // turns Docusaurus Faster on globally
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
          sidebarPath: "./sidebars.ts",
          includeCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "release-notes",
          path: "release-notes",
          blogSidebarCount: "ALL", // list all release note items
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
           trackingID: 'G-NNX6CY7HK5',
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    algolia: {
      appId: "RYDLO2Z3D4",
      apiKey: "24e69435851dc2b9d9c09ae4c7d0a08a",
      indexName: "consteelsoftware",
      contextualSearch: true,
    },
    metadata: [
      {
        name: "description",
        content:
          "Discover the Consteel Documentation Center—your go-to resource for mastering structural design. Access the Consteel user manual, plugin documentation, and release notes, and stay up to date with the latest software developments and expert guides.",
      },
    ],
    // Replace with your project's social card
    image: "img/logo.svg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_white.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "manualSideBar",
          position: "left",
          label: "Consteel Manual",
          className: "text-transform-uppercase",
        },
        {
          type: "docSidebar",
          sidebarId: "descriptSideBar",
          position: "left",
          label: "Descript",
          className: "text-transform-uppercase",
        },
        {
          type: "dropdown",
          position: "left",
          docId: "plugins",
          label: "Plugins",
          className: "text-transform-uppercase",
          items: [
            {
              type: "doc",
              docId: "plugins/axis/axisvm-plugin",
              label: "Converter for AXISVM",
              className: "text-transform-uppercase",
            },
            {
              type: "doc",
              docId: "plugins/FALCON/introduction/index",
              label: "Falcon",
              className: "text-transform-uppercase",
            },
          ],
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          className: "text-transform-uppercase",
        },
        {
          type: "localeDropdown",
          position: "right",
          className: "text-transform-uppercase",
        },
        {
          to: "release-notes",
          label: "Release Notes",
          className: "text-transform-uppercase",
          position: "left",
        },
        {
          href: "https://consteelsoftware.com",
          label: "Consteel Software",
          className: "text-transform-uppercase",
          position: "right",
        },
      ],
    },

    prism: {
      additionalLanguages: ["php"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
