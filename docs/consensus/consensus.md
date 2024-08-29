---
title: Proof-of-work consensus
slug: /consensus
sidebar_position: 1
---

<head>
  <title>Consensus</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</head>

Because a blockchain is a decentralized and distributed network of computers, there's no central authority that determines which transactions to process and the order in which transactions are executed. 
However, all of the nodes that participate in the network need to have a consistent view of the current state of the blockchain.
To come to this consistent view, blockchains used a variety of consensus methods and consensus algorithms to determine the current state of ledger and to align of all the nodes to recognize the same blockchain state. 

The terms **consensus model**, **consensus method**, and **consensus mechanism** are generally interchangeable to indicate a specific approach to reaching consensus.
A **consensus algorithm** is typically used to describe the underlying mathematics to support a particular consensus method.

In general, different consensus models have different trade-offs or address specific use cases.
Depending on whether a blockchain is open to the public or private, there are many possible approaches to reaching consensus.
Some of the most common consensus models include: 

- Proof of authority
- Proof of capacity
- Proof of stake
- Delegated proof of stake or Proof of nominated stake
- Proof of work

In proof-of-work consensus models, any node can produce a block at any time by being the first to solve a computationally-intensive problem.
Solving the problem takes CPU time, so nodes can only produce blocks in proportion with their computing resources.
In the Kadena network, resources are spread across multiple chains to reduce latency and improve the speed at which transactions can be validated and added to blocks.

## Finalization and forks

Every block contains a header and transactions.
Each block header contains a reference to its parent block, so you can trace the chain back to its genesis.
Forks occur when two blocks reference the same parent.
For the chain to continue. there must be a way to resolve forks such that only one canonical chain exists.

A **fork choice rule** is an algorithm that selects the best chain that should be extended.
The two most common fork choice rules are the **longest chain** rule and the **GHOST** rule.

The longest chain rule simply says that the best chain is the longest chain.

![Longest chain rule](/assets/docs/consensus-longest.png)

One disadvantage of the longest chain rule is that an attacker could create a chain of blocks that outpaces the network and effectively hijack the main chain.
The Greedy Heaviest Observed SubTree (GHOST) rule says that, starting at the genesis block, each fork is resolved by choosing the branch that has the most blocks built on it.

![GHOST rule](/assets/docs/consensus-ghost.png)

In this diagram, the GHOST rule would select the fork that has accumulated most blocks built on top of it as the main chain even though it has fewer blocks than the longest chain fork.
