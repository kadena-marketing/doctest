import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pact/pact-rest-api",
    },
    {
      type: "category",
      label: "Non-transactional execution",
      link: {
        type: "doc",
        id: "pact/endpoint-local",
      },
      items: [
        {
          type: "doc",
          id: "pact/local",
          label: "local",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactional batch execution",
      link: {
        type: "doc",
        id: "pact/endpoint-send",
      },
      items: [
        {
          type: "doc",
          id: "pact/send",
          label: "send",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Batch polling for results",
      link: {
        type: "doc",
        id: "pact/endpoint-poll",
      },
      items: [
        {
          type: "doc",
          id: "pact/poll",
          label: "poll",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Blocking listen for single transaction result",
      link: {
        type: "doc",
        id: "pact/endpoint-listen",
      },
      items: [
        {
          type: "doc",
          id: "pact/listen",
          label: "listen",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Private transaction execution",
      link: {
        type: "doc",
        id: "pact/endpoint-private",
      },
      items: [
        {
          type: "doc",
          id: "pact/private",
          label: "private",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SPV proof creation for cross chain transaction",
      link: {
        type: "doc",
        id: "pact/endpoint-spv",
      },
      items: [
        {
          type: "doc",
          id: "pact/spv",
          label: "spv",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
