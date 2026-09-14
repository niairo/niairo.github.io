# Adaptive Portfolio

**Version:** 0.2  
**Status:** Planning / Exploration

## What this project is

This project is a **documented adaptive portfolio system** built around one central idea:

> **Stable core, adaptive surface.**

The website is an implementation and proof of the system. It is not the only outcome of the project.

The project documents the principles, design logic, adaptation rules, architecture decisions, and experiments that shape how the portfolio evolves.

## Why this project exists

The project has four purposes:

1. **Documentation** — define and explain the system clearly enough that its logic can be understood independently of the code.
2. **Career** — present relevant experience, skills, and evidence clearly for different job opportunities.
3. **Design** — explore a reusable, accessible, component-based system whose presentation can vary without changing its underlying content.
4. **Learning** — provide a controlled environment for experimenting with AI, design systems, web architecture, and new technologies.

Documentation and clarity come before implementation novelty.

## Core working idea

The portfolio should communicate a consistent professional identity while allowing the presentation to adapt to different audiences, opportunities, and job applications.

The goal is not to become a different person for every role.

The goal is to make the most relevant parts of the same professional story easier to see.

## Current working model

The project is expected to evolve around three layers:

### Stable core

Things that should remain consistent:

- professional identity
- experience and evidence
- values and ways of working
- accessibility standards
- content integrity
- core design principles
- documented project rules

### Adaptive layer

Things that may change deliberately:

- project selection
- section order
- highlighted skills
- level of technical detail
- introduction and emphasis
- visual personality
- tone within defined limits

### Experimental layer

Things that may change frequently:

- frameworks
- AI workflows
- hosting
- animation techniques
- generation tools
- Figma / MCP experiments
- implementation approaches

Experiments should be removable without damaging the portfolio.

## Documentation model

The documentation is treated as part of the product.

Important concepts should be understandable without reading the source code.

The current documentation set is intentionally small:

- [`docs/principles.md`](docs/principles.md) — the governing principles used to judge product, design, AI, and technical decisions.
- [`docs/decision-log.md`](docs/decision-log.md) — records important decisions and why they were made.

New documents should be created only when a new body of knowledge genuinely needs its own home.

## Current phase

The project is currently in the **definition and validation phase**.

Before choosing a framework or building the full site, the next work should focus on:

- validating the core portfolio idea
- defining what belongs to the stable professional core
- defining what may legitimately adapt
- identifying the primary audiences
- testing a small adaptive proof of concept
- separating useful personalisation from unnecessary complexity
- documenting important decisions before they harden into implementation

## Working rules

> **Documentation defines the system. Code proves and implements the system.**

> **Do not choose technology simply because it is interesting. Choose it when it helps the documented system achieve its purpose.**

> **Do not code an important concept before it can be explained clearly enough to document.**

## Version history

### v0.2
- Reframed the project as a documented adaptive portfolio system.
- Made documentation an explicit project objective.
- Clarified that the website is one implementation, not the sole product.
- Added documentation-first working rules.

### v0.1
- Established the initial adaptive portfolio concept.
- Introduced the stable core / adaptive surface model.
