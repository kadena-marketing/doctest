// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Kadena Docs",
  tagline: "",
  url: "https://docs.kadena.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/kadena-favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kadena-marketing", // Usually your GitHub org/user name.
  projectName: "doctest", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kadena-marketing/doctest/blob/main/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kadena-marketing/doctest/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Kadena Docs",
        logo: {
          alt: "Kadena Developer Documentation",
          src: "img/kadena-docs-light.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
          label: "Pact",
          position: "left",
          to: "/docs/category/pact-api",
          },
          {
            label: "Chainweb API",
            position: "left",
            to: "/docs/category/chainweb-api",
          },
          {to: 'https://academy.kadena.io', label: 'Academy', position: 'left'},
          {to: 'https://discord.com/invite/kadena', label: 'Support', position: 'left'}
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        prism: {
          additionalLanguages: [
            "java",
            "json",
            "bash",
          ],
        },
        languageTabs: [
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
          },

          {
            highlight: "java",
            language: "java",
            logoClass: "java",
            variant: "unirest",
          },

        ],
      },
    } satisfies Preset.ThemeConfig,


  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          chainweb: {  // First API spec
            specPath: "examples/chainweb.openapi.yaml",
            outputDir: "docs/chainweb",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pact: {  // Second API spec
            specPath: "examples/pact.openapi.yaml",
            outputDir: "docs/pact",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        } satisfies OpenApiPlugin.Options,
      } satisfies Plugin.PluginOptions,
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
