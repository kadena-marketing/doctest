---
title: Quick Start Guide
slug: /start
---

import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

# Quick Start Guide for Kadena Development

Welcome to the Kadena development quick start guide! This guide will help you set up your environment, configure Devnet, and deploy a simple smart contract using Kadena-CLI.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- Git
- Node.js (version 18 or higher)
- npm (Node Package Manager)

You can download and install Node.js and npm from [nodejs.org](https://nodejs.org/).

## Step 1: Install Pact

Pact is Kadena's smart contract language. Follow our detailed guide to install Pact on your system.

<Link to="/install/pact/" className="kadena-link-box inline">
  Detailed Pact Installation Guide
</Link>

## Step 2: Set Up Devnet

Devnet allows you to test your smart contracts in a local environment.

<Link to="/install/devnet" className="kadena-link-box inline">
  Detailed Devnet Setup Guide
</Link>

Quick setup:

<CodeBlock language="bash">
{`git clone https://github.com/kadena-io/devnet
cd devnet
npm install
npm start`}
</CodeBlock>

This will start a local Kadena Devnet instance for development and testing.

## Step 3: Install and Configure Kadena-CLI

Kadena-CLI is a tool for deploying and managing smart contracts on the Kadena blockchain.

<Link to="/guides/kadena-cli" className="kadena-link-box inline">
  Comprehensive Kadena-CLI Guide
</Link>

Quick setup:

<CodeBlock language="bash">
{`npm install -g kadena-cli
kadena init`}
</CodeBlock>

Configure your Kadena-CLI settings by editing the `kadena-cli-config.json` file.

## Step 4: Write a Simple Smart Contract

Here's a basic TODO app smart contract written in Pact:

<CodeBlock language="pact">
{`(namespace "free")

(module todo GOV
  @doc "Simple TODO app module"

  (defcap GOV () true)

  (defschema todo-item
    @doc "Schema for a TODO item"
    task:string
    completed:bool)

  (deftable todo-table:{todo-item})

  (defun create-todo (task:string id:integer)
    @doc "Create a new TODO item"
    (insert todo-table (format "{}" [id])
      {
       "task": task
      , "completed": false
      }
    )
    (format "TODO item {} created with id {}" [task id])
  )

  (defun complete-todo (id:integer)
    @doc "Mark a TODO item as completed"
    (with-capability (GOV)
      (update todo-table (format "{}" [id])
        { "completed": true }
      )
      (format "TODO item {} marked as completed" [id])
    )
  )

  (defun read-todos ()
    @doc "Read all TODO items"
    (map (lambda (key) (read todo-table key))
      (keys todo-table)))
)

(create-table todo-table)`}
</CodeBlock>

## Step 5: Deploy Your Smart Contract

Use Kadena-CLI to deploy your smart contract to the Devnet:

<CodeBlock language="bash">
{`kadena deploy todo.pact`}
</CodeBlock>

## Next Steps

Congratulations! You've set up your Kadena development environment and deployed your first smart contract. Here are some suggested next steps:

1. Explore more complex Pact contracts in our [Pact Language Guide](/pact).
2. Learn how to interact with your deployed contracts using [Kadena Tools](/guides/craft-api-call).
3. Dive into [Chainweb API](/api) for low-level blockchain interactions.
4. Join our [Discord community](https://discord.gg/kadena) for support and discussions.

