---
title: How to Guides
slug: /how-to-guides
---

import React, { useState } from 'react';

export function InteractiveSection() {
  const [selectedTopic, setSelectedTopic] = useState('Devnet');

  const topics = ['Devnet', 'Kadena CLI', 'Craft an API Call'];

  const renderContent = () => {
    switch (selectedTopic) {
      case 'Devnet':
        return (
          <p>Learn how to set up your own Kadena Devnet environment to start developing and testing on the Kadena blockchain.</p>
        );
      case 'Kadena CLI':
        return (
          <p>Get started with the Kadena Command Line Interface (CLI) to manage your blockchain projects efficiently from the terminal.</p>
        );
      case 'Craft an API Call':
        return (
          <p>Understand the process of crafting an API call to interact with Kadena’s blockchain, enabling seamless integration with your applications.</p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1em' }}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              padding: '0.5em 1em',
              cursor: 'pointer',
              backgroundColor: selectedTopic === topic ? 'var(--k-secondary)' : 'var(--k-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

# How to Guides

Welcome to our **How to Guides** section! This section is designed to guide you through the essential steps for working with **Kadena**. Whether you’re setting up your development environment, getting familiar with the CLI, or crafting API calls, these guides provide the foundational knowledge you need.

<InteractiveSection />

Explore the following topics to get started:

- **Setting up Devnet**: Learn how to set up a local Kadena Devnet for development and testing.
- **Setting up Kadena CLI**: Understand how to install and use the Kadena Command Line Interface.
- **Crafting an API Call**: Discover how to create and send API calls to interact with the Kadena blockchain.

These guides will help you get up and running quickly, providing the tools you need to start building on Kadena. Dive into each topic to learn more!
