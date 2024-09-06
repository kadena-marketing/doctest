// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
     tutorialSidebar: [
          'start',
          {
               type: 'category',
               label: 'Developers',
               link: {
                    type: 'doc',
                    id: 'developers',
               },
               items: [
               
                    'get-started/get-started-intro',
                    'get-started/install-pact',
                    'get-started/basic-concepts',
                    'get-started/lang-features',
                    'get-started/modules',
                    'get-started/database-model'
                    ],
               },
          {
               type: 'category',
               label: 'Coding projects',
               link: {
               type: 'doc',
               id: 'coding-projects/coding-projects',
               },
               items: [
                    'coding-projects/hello-world',
                    'coding-projects/transfers',
                    'coding-projects/pact-testing',
                    'coding-projects/interaction',
                    'coding-projects/wallets',
                    'coding-projects/loans',
                    ],
          },
          {
               type: 'category',
               label: 'Reference',
               link: {
               type: 'doc',
               id: 'reference/reference',
               },
               items: [
                    'reference/pact-lang-intro',
                    'reference/pact-reference-intro',
                    'reference/functions',
                    'reference/builtin-functions',
                    'reference/smart-contract-language',
                    {
                         type: 'category',
                         label: 'Operators',
                         link: {
                         type: 'doc',
                         id: 'reference/operators',
                         },
                         items: [
                              'reference/operators/absolute-value',
                              'reference/operators/addition',
                              'reference/operators/and'
                         ]
                    }
               ],
          },
          {
               type: 'category',
               label: 'API',
               link: {
                    type: 'doc',
                    id: 'api/api',
               },
               items: [
                    'api/api-intro',
                    {
                         type: 'category',
                         label: 'Pact API',
                         link: {
                              type: 'doc',
                              id: 'api/pact-rest/pact-rest',
                         },
                         items: [
                              "api/pact-rest/poll",
                              "api/pact-rest/listen",
                              "api/pact-rest/local",
                              "api/pact-rest/private",
                              "api/pact-rest/spv",
                              "api/pact-rest/send"
                         ],
                    },
                    {
                         type: 'category',
                         label: 'Peer-to-peer API',
                         link: {
                              type: 'doc',
                              id: 'api/peer-to-peer/p2p-api',
                         },
                         items: [
                              "api/peer-to-peer/get-cut",
                              "api/peer-to-peer/publish-cut",
                              "api/peer-to-peer/get-payload",
                              "api/peer-to-peer/all-pending-mempool",
                              "api/peer-to-peer/boolean-tx-mempool",
                              "api/peer-to-peer/lookup-tx-mempool",
                              "api/peer-to-peer/insert-tx-mempool",
                              "api/peer-to-peer/api-get-cut-peers",
                              "api/peer-to-peer/api-add-cut-peers",
                              "api/peer-to-peer/api-get-mempool-peers",
                              "api/peer-to-peer/api-add-mempool-peers",
                              "api/peer-to-peer/api-config",
                         ],
                    },
                    {
                         type: "category",
                         label: "Service API",
                         link: {
                              type: "doc",
                              id: "api/service-api/service-api",
                              },
                              items: [
                                   "api/service-api/get-block",
                                   "api/service-api/get-block-branch",
                                   "api/service-api/get-block-hash",
                                   "api/service-api/get-block-hash-branch",
                                   "api/service-api/get-block-header",
                                   "api/service-api/get-block-header-by-hash",
                                   "api/service-api/get-block-header-branch",
                                   'api/service-api/mining',
                                   'api/service-api/misc',
                                   'api/service-api/rosetta',
                    
                              ],
                    },
               ],
          },
          {
               type: 'category',
               label: 'How-to guides',
               link: {
                    type: 'doc',
                    id: 'guides/guides',
               },
               items: [
                    'guides/craft-api-call',
                    'guides/kadena-cli',
                    {
                      type: 'category',
                      label: 'Nodes',
                      link: {
                         type: 'doc',
                         id: 'guides/nodes/nodes',
                    },
                    items: [
                           'guides/nodes/compaction',
                           'guides/nodes/configure',
                           'guides/nodes/monitoring',
                    ],
                 }
               ],
          },

          {
               type: 'category',
               label: 'Solution showcase',
               link: {
                    type: 'doc',
                    id: 'resources/resources',
               },
               items: [
                    {
                         type: 'category',
                         label: 'Introduction',
                         link: {
                              type: 'doc',
                              id: 'resources/intro/intro',
                         },
                         items: [
                              'resources/intro/why-kadena',
                              'resources/intro/gas-fees'
                         ],
                    },
          
                    // 'resources/changelogs',
                    'resources/contributors',
                    'resources/glossary',
                    'resources/tools',
                    /*{
                         type: 'link',
                         label: 'Product Docs',
                         href: 'https://docs.kadena.io',
                    },*/
               ],
          }
     ],
     powSidebar: [
          {
               type: 'category',
               label: 'Proof-of-work consensus',
               link: {
                    type: 'doc',
                    id: 'consensus',
               },
               items: [
                    'consensus/chainweb',
                    'consensus/tx-lifecycle',
                    'consensus/node-types',
                    'consensus/operator',
                    'consensus/configure-node',
                    'consensus/compact',
                    'consensus/monitor-node',
                    'consensus/manage-node',
                    'consensus/troubleshoot',
                    'consensus/validator'
                    ],
               },
     ]
};

export default sidebars;