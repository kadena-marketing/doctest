import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "chainweb/kadena-chainweb-node-api",
    },
    {
      type: "category",
      label: "Cut Endpoints",
      link: {
        type: "doc",
        id: "chainweb/cut",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/query-the-current-cut",
          label: "Query the current cut",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/publish-a-cut",
          label: "Publish a cut",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Peer Endpoints",
      link: {
        type: "doc",
        id: "chainweb/peer",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-cut-network-peer-info",
          label: "Get Cut-Network Peer Info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/put-cut-network-peer-info",
          label: "Put Cut-Network Peer Info",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "chainweb/get-chain-mempool-network-peer-info",
          label: "Get Chain Mempool-Network Peer Info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/put-chain-mempool-network-peer-info",
          label: "Put Chain Mempool-Network Peer Info",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Mempool P2P Endpoints",
      link: {
        type: "doc",
        id: "chainweb/mempool",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-pending-transactions-from-the-mempool",
          label: "Get Pending Transactions from the Mempool",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/check-for-pending-transactions-in-the-mempool",
          label: "Check for Pending Transactions in the Mempool",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/lookup-pending-transactions-in-the-mempool",
          label: "Lookup Pending Transactions in the Mempool",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/insert-transactions-into-the-mempool",
          label: "Insert Transactions into the Mempool",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Block Payload Endpoints",
      link: {
        type: "doc",
        id: "chainweb/payload",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-block-payload",
          label: "Get Block Payload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-batch-of-block-payload",
          label: "Get Batch of Block Payload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/get-block-payload-with-outputs",
          label: "Get Block Payload With Outputs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-batch-of-block-payload-with-outputs",
          label: "Get Batch of Block Payload With Outputs",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Block Hashes Endpoints",
      link: {
        type: "doc",
        id: "chainweb/blockhash",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-block-hashes",
          label: "Get Block Hashes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-block-hash-branches",
          label: "Get Block Hash Branches",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Block Endpoints",
      link: {
        type: "doc",
        id: "chainweb/block",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-block",
          label: "Get Block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-block-branches",
          label: "Get Block Branches",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Block Header Endpoints",
      link: {
        type: "doc",
        id: "chainweb/header",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-block-headers",
          label: "Get Block Headers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-block-header-by-hash",
          label: "Get Block Header by Hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/get-block-header-branches",
          label: "Get Block Header Branches",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Config Endpoint",
      link: {
        type: "doc",
        id: "chainweb/config",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/configuration-of-chainweb-node",
          label: "Configuration of Chainweb Node",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Miscellaneous Endpoints",
      link: {
        type: "doc",
        id: "chainweb/misc",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/configuration-of-chainweb-node",
          label: "Configuration of Chainweb Node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/start-a-backup-job",
          label: "Start a backup job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/check-the-status-of-a-backup-job",
          label: "Check the status of a backup job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/health-check",
          label: "Health Check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/general-node-info",
          label: "General Node Info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/blocks-event-stream",
          label: "Blocks Event Stream",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/blocks-event-stream",
          label: "Blocks Event Stream",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Mining Endpoints",
      link: {
        type: "doc",
        id: "chainweb/mining",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/get-mining-work",
          label: "Get Mining Work",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "chainweb/solved-mining-work",
          label: "Solved Mining Work",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "chainweb/notification-of-updated-work",
          label: "Notification of Updated Work",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
