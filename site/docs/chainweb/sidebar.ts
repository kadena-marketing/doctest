import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "chainweb/pact-rest-api",
    },
    {
      type: "category",
      label: "Non-transactional execution",
      link: {
        type: "doc",
        id: "chainweb/endpoint-local",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/local",
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
        id: "chainweb/endpoint-send",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/send",
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
        id: "chainweb/endpoint-poll",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/poll",
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
        id: "chainweb/endpoint-listen",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/listen",
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
        id: "chainweb/endpoint-private",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/private",
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
        id: "chainweb/endpoint-spv",
      },
      items: [
        {
          type: "doc",
          id: "chainweb/spv",
          label: "spv",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
