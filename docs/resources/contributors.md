---
title: How to Contribute
slug: contributors
---

<head>
  <title>Resources: How to Contribute</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</head>

# How to Contribute

We're excited that you're interested in contributing to our project! This guide will help you get started with contributing to both the project and its documentation.

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Setting Up Your Development Environment](#setting-up-your-development-environment)
  - [Finding Issues to Work On](#finding-issues-to-work-on)
- [Contributing Code](#contributing-code)
  - [Branching Strategy](#branching-strategy)
  - [Commit Messages](#commit-messages)
  - [Pull Requests](#pull-requests)
- [Contributing Documentation](#contributing-documentation)
  - [Documentation Structure](#documentation-structure)
  - [Writing Style Guide](#writing-style-guide)
  - [Contribution Workflow Diagram](#contribution-workflow-diagram)
  - [Types of Contributions](#types-of-contributions)
- [Recognizing Contributors](#recognizing-contributors)
- [Review Process](#review-process)
- [Community](#community)

## Code of Conduct

Our project adheres to a Code of Conduct that we expect all contributors to follow. Please read the code of conduct(work in progress) so that you can understand what actions will and will not be tolerated.

## Getting Started

### Setting Up Your Development Environment

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```
   git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up pre-commit hooks:
   ```
   npm run prepare
   ```

### Finding Issues to Work On

- Check our issue tracker for open issues.
- Issues labeled "good first issue" are great for newcomers.
- If you have an idea for a new feature, please open an issue to discuss it before starting work.

## Contributing Code

### Branching Strategy

We use a simplified Git flow:
- `main` branch for stable releases
- `develop` branch for ongoing development
- Feature branches should be created from `develop`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Pull Requests

1. Create a new branch from `develop`.
2. Make your changes and commit them.
3. Push to your fork and submit a pull request to the `develop` branch.
4. Ensure your PR description clearly describes the problem and solution.

## Contributing Documentation

### Documentation Structure

Our documentation is organized as follows:
- `/docs`: Main documentation directory
  - `/getting-started`: Onboarding guides
  - `/api`: API documentation
  - `/tutorials`: Step-by-step guides
  - `/concepts`: Explanations of core concepts

### Writing Style Guide

- Use clear, concise language.
- Write in second person (use "you" instead of "we").
- Use active voice when possible.
- Include code examples where applicable.

### Contribution Workflow Diagram

[We are working on a visual representation of the contribution workflow]

### Types of Contributions

We welcome various types of contributions, including:

- Bug fixes
- Feature implementations
- Documentation improvements
- Translations
- Design enhancements
- Usability testing and feedback

### Documentation Contributions

#### Previewing Documentation Changes

To preview your documentation changes locally:

1. Navigate to the `docs` directory: `cd docs`
2. Start the Docusaurus development server: `npm run start`
3. Open your browser and go to `http://localhost:3000`

#### Translating Documentation

We welcome translations of our documentation:

1. Copy the `docs` folder and rename it to `docs-[LANG]` (e.g., `docs-es` for Spanish).
2. Translate the content in the new folder.
3. Update the Docusaurus configuration to include the new language.

### Recognizing Contributors

We use the [All Contributors](https://allcontributors.org/) specification to recognize all types of contributions. After your first contribution is merged, you'll be added to the contributors list in the README.

### Contribution Rewards

More updates on this will be added shortly
<!-- To show our appreciation, we offer the following rewards for significant contributions:
- Contributor of the Month recognition
- Exclusive project swag for major contributions
- Opportunities to speak at project-related events -->

## Review Process

1. Automated tests will run on your pull request.
2. A maintainer will review your contribution.
3. Address any feedback or requested changes.
4. Once approved, a maintainer will merge your contribution.

## Community

- Join our [Discord server](https://discord.gg/kadena) for real-time discussions. 
- Follow us on [Twitter](https://x.com/kadena_io) for announcements.

Thank you for contributing to our project!