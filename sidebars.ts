// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
     tutorialSidebar: [
          'start',
          {
               type: 'category',
               label: 'Introduction',
               link: {
                    type: 'doc',
                    id: 'intro/intro',
               },
               items: [
                    'intro/why-kadena',
                    'intro/gas-fees'
               ],
          },
          {
               type: 'category',
               label: 'Pact',
               link: {
                    type: 'doc',
                    id: 'pact/pact',
               },
               items: [
                    'pact/reference',
                    'pact/builtin-functions',
                    //'pact/functions',
                    'pact/properties',
                    'pact/properties-api',
                    'pact/smart-contract-language'
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
               label: 'How-To Guides',
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
               label: 'Installation',
               link: {
                    type: 'doc',
                    id: 'install/install',
               },
               items: [
                    'install/devnet',
                    'install/nodes',
                    {
                         type: 'category',
                         label: 'Pact',
                         link: {
                              type: 'doc',
                              id: 'install/pact/pact',
                         },
                         items: [
                              'install/pact/linux',
                              'install/pact/mac-brew',
                              'install/pact/windows',
                         ],
                    }
               ],
          },
          {
               type: 'category',
               label: 'Resources',
               link: {
                    type: 'doc',
                    id: 'resources/resources',
               },
               items: [
                    // 'resources/changelogs',
                    'resources/contributors',
                    'resources/tools',
                    /*{
                         type: 'link',
                         label: 'Product Docs',
                         href: 'https://docs.kadena.io',
                    },*/
               ],
          }
     ],
};

export default sidebars;