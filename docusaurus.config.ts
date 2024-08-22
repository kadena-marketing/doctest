// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
     title: "Kadena Enterprise Documentation",
     tagline: "The Blockchain for Business",
     url: "https://docs.kadena.io",
     favicon: "img/kadena-favicon.png",
     baseUrl: "/",

     onBrokenLinks: "log",
     onBrokenMarkdownLinks: "warn",

     // GitHub pages deployment config.
     organizationName: "kadena-marketing",
     projectName: "doctest",

     presets: [
          [
               "classic",
               {
                    docs: {
                         routeBasePath: "/",
                         sidebarPath: require.resolve("./sidebars.ts"),
                         editUrl: "https://github.com/kadena-marketing/doctest/tree/main/",
                         docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
                    },
                    blog: {
                         showReadingTime: false,
                         editUrl: "https://github.com/kadena-marketing/doctest/tree/main/",
                    },
                    theme: {
                         customCss: require.resolve("./src/css/custom.css"),
                    },
                    gtag: {
                         trackingID: 'GTM-WMSSTV5V',
                    },
               } satisfies Preset.Options,
          ],
     ],

     themeConfig: {
          announcementBar: {
               id: "announcement-bar_1",
               content: `<strong>This site is an alpha version and a work in progress, please visit our <a target="_blank" href="https://docs.kadena.io">live docs site</a>.</strong>`,
               backgroundColor: "#469279",
               textColor: "#FFFFFF",
               isCloseable: true,
          },
          docs: {
               sidebar: {
                    hideable: false,
                    autoCollapseCategories: true,
               },
          },
          navbar: {
               title: "",
               logo: {
                    alt: "Kadena Developer Documentation",
                    src: "img/kadena-docs-light.png",
               },
               items: [
                    {
                         type: "doc",
                         docId: "start",
                         position: "left",
                         label: "Get Started",
                    },
                    {
                         href: 'https://academy.kadena.io',
                         label: 'Academy',
                         position: 'left'
                    },
                    {
                         href: 'https://discord.com/invite/kadena',
                         label: 'Support',
                         position: 'left'
                    },
                    {
                         href: 'https://github.com/kadena-io',
                         position: 'right',
                         className: 'github-link-icon'
                    },
                    /**{
                         type: 'docsVersionDropdown',
                         position: 'right',
                    },
                    {
                         type: 'localeDropdown',
                         position: 'right',
                    }*/
               ],
          },
          footer: {
               style: "dark",
               copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://kadena.io" target="_blank">Kadena LLC</a>`,
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
               }
          ],
          algolia: {
               appId: 'NESUIAE93R',
               apiKey: '71741e300f450f509b80b98d9a15d02b',
               indexName: 'marketingvercel',

               contextualSearch: true,
               externalUrlRegex: 'external\\.com|domain\\.com',
               searchParameters: {},
               searchPagePath: 'search',
               insights: false,
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
                         } satisfies OpenApiPlugin.Options,
                         pact: {  // Second API spec
                              specPath: "examples/pact.openapi.yaml",
                              outputDir: "docs/pact-api",
                              sidebarOptions: {
                                   groupPathsBy: "tag",
                                   categoryLinkSource: "tag",
                              },
                         } satisfies OpenApiPlugin.Options,
                    },
               } satisfies Plugin.PluginOptions,
          ],
     ],

     themes: [
          "docusaurus-theme-openapi-docs"
     ],
};

export default async function createConfig() {
     return config;
}