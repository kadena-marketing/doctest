---
title: Quick Start Guide
slug: /start
---

Welcome to the quick start guide for our site. This guide will help you set up your environment, configure Devnet, and deploy a simple smart contract using Kadena-CLI.

## Environment Setup

Before you start, ensure you have the following tools installed:

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Git

You can download and install Node.js and npm from [nodejs.org](https://nodejs.org/).

## Configure Devnet

To configure Devnet, follow these steps:

1. Clone the Kadena Devnet repository:

    ```sh
    git clone https://github.com/kadena-io/devnet
    cd devnet
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the Devnet:

    ```sh
    npm start
    ```

This will start a local Kadena Devnet instance that you can use for development and testing.

## Using Kadena-CLI

Kadena-CLI is a tool that allows you to deploy and manage smart contracts on the Kadena blockchain.

1. Install Kadena-CLI:

    ```sh
    npm install -g kadena-cli
    ```

2. Initialize Kadena-CLI:

    ```sh
    kadena-cli init
    ```

3. Configure your Kadena-CLI settings by editing the `kadena-cli-config.json` file.

## Sample Smart Contract in Pact

Here is a simple TODO app smart contract written in Pact. This contract allows you to create, complete, and read TODO items.

```pact
(namespace "free")

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

(create-table todo-table)