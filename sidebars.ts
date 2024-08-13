// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
     tutorialSidebar: [
          'start',
          {
               type: 'category',
               label: 'Introduction',
               items: [
                    'intro/why-kadena',
                    'intro/gas-fees'
               ],
          },
          {
               type: 'category',
               label: 'Pact',
               items: [
                    'pact/reference',
                    'pact/builtin-functions',
                    // 'pact/functions',
                    'pact/properties',
                    'pact/properties-api',
                    'pact/smart-contract-language'
               ],
          },
          {
               type: 'category',
               label: 'Pact API',
               items: [
                    'pact-api/pact-api',
                    {
                         type: "category",
                         label: "Batch polling for results",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-poll"
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "pact-api/poll",
                                   label: "poll",
                                   className: "api-method post"
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "Blocking listen for single transaction result",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-listen"
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "pact-api/listen",
                                   label: "listen",
                                   className: "api-method post"
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "Non-transactional execution",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-local"
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "pact-api/local",
                                   label: "local",
                                   className: "api-method post"
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "Private transaction execution",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-private"
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "pact-api/private",
                                   label: "private",
                                   className: "api-method post"
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "SPV proof creation for cross chain transaction",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-spv"
                         },
                         items: [
                              {
                              type: "doc",
                              id: "pact-api/spv",
                              label: "spv",
                              className: "api-method post"
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "Transactional batch execution",
                         link: {
                              type: "doc",
                              id: "pact-api/endpoint-send"
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "pact-api/send",
                                   label: "send",
                                   className: "api-method post"
                              },
                         ],
                    }
               ],
          },
          {
               type: 'category',
               label: 'Chainweb API',
               items: [
                    'chainweb-api/chainweb-api',
                    {
                         type: "category",
                         label: "Block Endpoints",
                         link: {
                              type: "doc",
                              id: "chainweb-api/block",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block",
                                   label: "Get Block",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-branches",
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
                              id: "chainweb-api/blockhash",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-hashes",
                                   label: "Get Block Hashes",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-hash-branches",
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
                              id: "chainweb-api/header",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-headers",
                                   label: "Get Block Headers",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-header-by-hash",
                                   label: "Get Block Header by Hash",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-header-branches",
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
                              id: "chainweb-api/payload",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-payload",
                                   label: "Get Block Payload",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-batch-of-block-payload",
                                   label: "Get Batch of Block Payload",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-block-payload-with-outputs",
                                   label: "Get Block Payload With Outputs",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-batch-of-block-payload-with-outputs",
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
                              id: "chainweb-api/config",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/configuration-of-chainweb-node",
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
                              id: "chainweb-api/cut",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/query-the-current-cut",
                                   label: "Query the current cut",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/publish-a-cut",
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
                              id: "chainweb-api/mempool",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-pending-transactions-from-the-mempool",
                                   label: "Get Pending Transactions from the Mempool",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/check-for-pending-transactions-in-the-mempool",
                                   label: "Check for Pending Transactions in the Mempool",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/lookup-pending-transactions-in-the-mempool",
                                   label: "Lookup Pending Transactions in the Mempool",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/insert-transactions-into-the-mempool",
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
                              id: "chainweb-api/mining",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-mining-work",
                                   label: "Get Mining Work",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/solved-mining-work",
                                   label: "Solved Mining Work",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/notification-of-updated-work",
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
                              id: "chainweb-api/misc",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/configuration-of-chainweb-node",
                                   label: "Configuration of Chainweb Node",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/start-a-backup-job",
                                   label: "Start a backup job",
                                   className: "api-method post",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/check-the-status-of-a-backup-job",
                                   label: "Check the status of a backup job",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/health-check",
                                   label: "Health Check",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/general-node-info",
                                   label: "General Node Info",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/blocks-event-stream",
                                   label: "Blocks Event Stream",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/blocks-event-stream",
                                   label: "Blocks Event Stream",
                                   className: "api-method get",
                              },
                         ],
                    },
                    {
                         type: "category",
                         label: "Peer Endpoints",
                         link: {
                              type: "doc",
                              id: "chainweb-api/peer",
                         },
                         items: [
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-cut-network-peer-info",
                                   label: "Get Cut-Network Peer Info",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/put-cut-network-peer-info",
                                   label: "Put Cut-Network Peer Info",
                                   className: "api-method put",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/get-chain-mempool-network-peer-info",
                                   label: "Get Chain Mempool-Network Peer Info",
                                   className: "api-method get",
                              },
                              {
                                   type: "doc",
                                   id: "chainweb-api/put-chain-mempool-network-peer-info",
                                   label: "Put Chain Mempool-Network Peer Info",
                                   className: "api-method put",
                              },
                         ],
                    },
               ],
          },
          {
               type: 'category',
               label: 'How-To Guides',
               items: [
                    'guides/guides',
                    'guides/craft-api-call',
                    'guides/devnet',
                    'guides/kadena-cli'
               ],
          },
          {
               type: 'category',
               label: 'Installation',
               items: [
                    'install/install',
                    'install/linux',
                    'install/mac-brew',
                    'install/windows'
               ],
          },
          {
               type: 'category',
               label: 'Resources',
               items: [
                    'resources/resources',
                    'resources/changelogs',
                    'resources/contributors',
                    'resources/solutions-tools'
               ],
          }
     ],
};

export default sidebars;