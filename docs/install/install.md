---
title: Installation
slug: /install
---

<head>
  <title>Installation</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</head>

# Installation

<!-- # Installing Pact on Different Operating Systems

Pact is the smart contract language designed for **Kadena**’s blockchain platform. To start developing with **Pact**, you'll need to install it on your local machine. This section provides *step-by-step instructions* for installing **Pact** across various operating systems, ensuring that you can seamlessly integrate Pact into your development workflow regardless of whether you’re using **Windows. macOS, or Linux**.

Follow the instructions below to set up Pact on your operating system and get ready to build and deploy your smart contracts on **Kadena**’s blockchain. -->

import React from 'react';
import { InteractiveSection } from '/src/styles/InteractiveSection';

export default function Installation() {
  const topics = ['Linux', 'macOS', 'Windows'];

  const content = {
    'Linux': (
      <div>
        <h2>Installing Pact on Linux</h2>
        <p>Steps to set up Pact on Linux using the binary download.</p>
      </div>
    ),
     'macOS': (
      <div>
        <h2>Installing Pact on macOS</h2>
        <p>Steps to set up Pact on macOS using either Homebrew or a binary download.</p>
      </div>
    ),
    'Windows': (
      <div>
        <h2>Installing Pact on Windows</h2>
        <p>Steps to set up Pact on Windows using Windows Subsystem for Linux (WSL).</p>
      </div>
    ),
  };

  return (
    <div>
      <h2>Installing Pact on Different Operating Systems</h2>
      <p>Pact is the smart contract language designed for Kadena’s blockchain platform. To start developing with Pact, you'll need to install it on your local machine. Follow the instructions to set up Pact on your operating system.</p>
      <InteractiveSection topics={topics} content={content} />
    </div>
  );
}