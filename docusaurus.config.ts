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
  url: "https://your-docusaurus-site.example.com",
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
  themes: ["@easyops-cn/docusaurus-search-local"],

  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: "./sidebars.ts",
          includeCurrentVersion: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "release-notes",
          path: "release-notes",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
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
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "manualSideBar",
          position: "left",
          label: "Consteel Manual",
        },
        {
          type: "docSidebar",
          sidebarId: "descriptSideBar",
          position: "left",
          label: "Descript",
        },
        {
          type: "docSidebar",
          sidebarId: "pluginsSideBar",
          position: "left",
          label: "Plugins",
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right'
        // },
        {
          type: "localeDropdown",
          position: "right",
        },
        { to: "release-notes", label: "Release Notes", position: "left" },
        {
          href: "https://consteelsoftware.com",
          label: "Consteel Software",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Consteel Manual",
              to: "/docs/manual/intro",
            },
            {
              label: "Descript",
              to: "/docs/descript/intro",
            },
            {
              label: "Release notes",
              to: "/release",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Steelspace",
              href: "https://steelspace.io",
            },
            {
              label: "Steel Lion Award",
              href: "https://steellionaward.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Consteel Software",
              href: "https://consteelsoftware.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Consteel Software, Ltd. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["php"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
