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
                    'api/service-api-blockhash',
                    'api/service-api-blockheader',
                    'api/api-config',
                    'api/api-cut',
                    'api/api-mempool',
                    'api/api-payload',
                    'api/api-peer',
                    'api/service-api-block',
                    'api/service-api-mining',
                    'api/service-api-misc',
                    'api/service-api-rosetta',
                    {
                         type: 'category',
                         label: 'Pact Rest API',
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
                         label: 'Chainweb API',
                         link: {
                              type: 'doc',
                              id: 'api/chainweb/chainweb',
                         },
                         items: [
                              {
                                   type: "category",
                                   label: "Block Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/block",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block",
                                             label: "Get Block",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-branches",
                                             label: "Get Block Branches",
                                             className: "api-method post",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Block Hashes Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/blockhash",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-hashes",
                                             label: "Get Block Hashes",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-hash-branches",
                                             label: "Get Block Hash Branches",
                                             className: "api-method post",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Block Header Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/header",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-headers",
                                             label: "Get Block Headers",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-header-by-hash",
                                             label: "Get Block Header by Hash",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-header-branches",
                                             label: "Get Block Header Branches",
                                             className: "api-method post",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Block Payload Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/payload",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-payload",
                                             label: "Get Block Payload",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-batch-of-block-payload",
                                             label: "Get Batch of Block Payload",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-block-payload-with-outputs",
                                             label: "Get Block Payload With Outputs",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-batch-of-block-payload-with-outputs",
                                             label: "Get Batch of Block Payload With Outputs",
                                             className: "api-method post",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Config Endpoint",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/config",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/configuration-of-chainweb-node",
                                             label: "Configuration of Chainweb Node",
                                             className: "api-method get",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Cut Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/cut",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/query-the-current-cut",
                                             label: "Query the current cut",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/publish-a-cut",
                                             label: "Publish a cut",
                                             className: "api-method put",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Mempool P2P Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/mempool",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-pending-transactions-from-the-mempool",
                                             label: "Get Pending Transactions from the Mempool",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/check-for-pending-transactions-in-the-mempool",
                                             label: "Check for Pending Transactions in the Mempool",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/lookup-pending-transactions-in-the-mempool",
                                             label: "Lookup Pending Transactions in the Mempool",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/insert-transactions-into-the-mempool",
                                             label: "Insert Transactions into the Mempool",
                                             className: "api-method put",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Mining Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/mining",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-mining-work",
                                             label: "Get Mining Work",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/solved-mining-work",
                                             label: "Solved Mining Work",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/notification-of-updated-work",
                                             label: "Notification of Updated Work",
                                             className: "api-method get",
                                        },
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Miscellaneous Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/misc",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/start-a-backup-job",
                                             label: "Start a backup job",
                                             className: "api-method post",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/check-the-status-of-a-backup-job",
                                             label: "Check the status of a backup job",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/health-check",
                                             label: "Health Check",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/general-node-info",
                                             label: "General Node Info",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/blocks-event-stream",
                                             label: "Blocks Event Stream",
                                             className: "api-method get",
                                        }
                                   ],
                              },
                              {
                                   type: "category",
                                   label: "Peer Endpoints",
                                   link: {
                                        type: "doc",
                                        id: "api/chainweb/peer",
                                   },
                                   items: [
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-cut-network-peer-info",
                                             label: "Get Cut-Network Peer Info",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/put-cut-network-peer-info",
                                             label: "Put Cut-Network Peer Info",
                                             className: "api-method put",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/get-chain-mempool-network-peer-info",
                                             label: "Get Chain Mempool-Network Peer Info",
                                             className: "api-method get",
                                        },
                                        {
                                             type: "doc",
                                             id: "api/chainweb/put-chain-mempool-network-peer-info",
                                             label: "Put Chain Mempool-Network Peer Info",
                                             className: "api-method put",
                                        },
                                   ],
                              },
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