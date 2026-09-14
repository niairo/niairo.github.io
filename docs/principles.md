# Core Principles

**Version:** 0.1  
**Status:** Draft  
**Project:** Adaptive Portfolio

## Project constitution

> **This is a portfolio with a stable professional core and an adaptive presentation layer, designed to communicate the most relevant parts of my work without changing who I am.**

The portfolio may evolve technically and visually, but its purpose is to make my professional value easier to understand, not to manufacture a different identity for every opportunity.

---

## 1. Stable core, adaptive surface

The professional core remains consistent.

The site may change emphasis, order, depth, tone, and visual personality for different opportunities, but those changes should always represent the same underlying person, experience, and capabilities.

**Implication:** adaptation should reorganise or emphasise evidence rather than inventing new evidence.

---

## 2. Adapt relevance, not identity

Personalisation exists to help a visitor understand why my experience is relevant to them.

The site should not imitate an employer, copy a company identity, or reshape my professional story so far that it becomes misleading.

**Good adaptation:**

- showing the most relevant projects first
- highlighting skills mentioned in a role
- changing the depth of technical information
- selecting an appropriate visual personality
- adjusting the introduction to emphasise relevant experience

**Poor adaptation:**

- claiming expertise I do not have
- hiding important contradictions
- generating a completely different professional persona
- copying a target company's visual identity simply to appear to fit

---

## 3. Evidence before decoration

The strongest part of the portfolio should be the work itself:

- problems solved
- decisions made
- responsibilities
- outcomes
- skills demonstrated
- lessons learned

Visual design should make that evidence easier to understand.

A technically impressive or visually unusual feature is not automatically valuable.

**Test:** if the effect were removed, would the project still communicate something worth seeing?

---

## 4. Content stays independent from presentation

Projects, skills, achievements, case studies, and other evidence should be treated as reusable content rather than being permanently tied to one page or layout.

The system should be able to present the same source material in different ways without duplicating or rewriting it unnecessarily.

This principle should influence future choices around:

- content structure
- metadata
- component design
- routing
- page generation
- AI-assisted configuration

---

## 5. Accessibility is part of the system

Accessibility should be designed into the portfolio rather than checked only at the end.

Adaptation must not reduce accessibility.

All visual personalities and component variants should preserve:

- semantic structure
- keyboard usability
- visible focus
- sufficient contrast
- understandable hierarchy
- accessible forms and error handling
- appropriate motion and reduced-motion behaviour
- clear interaction states

A more expressive design mode is not permission to weaken accessibility.

---

## 6. Technology serves the portfolio

Frameworks, hosting platforms, AI tools, and development techniques are implementation choices.

They are not the identity of the project.

React, Next.js, Astro, vanilla JavaScript, ChatGPT Sites, or future tools may be explored, adopted, replaced, or removed.

The content model and core principles should survive those changes.

**Rule:** do not lock an important project concept to a technology unless there is a strong reason.

---

## 7. Experimentation must be reversible

The portfolio is also a learning environment.

Experimentation with AI, design systems, animation, architecture, and new tools is encouraged, but experiments should be isolated enough that they can fail or be removed without damaging the useful portfolio.

Where possible:

> **experiments should fail safely.**

A failed AI feature should not break the site.  
A framework change should not destroy the content.  
A discarded visual personality should not require rebuilding every project.

---

## 8. Complexity must earn its place

Every meaningful feature should solve at least one clear problem:

- improve understanding
- improve relevance
- improve accessibility
- improve maintainability
- improve the authoring workflow
- produce worthwhile learning

"Because it is possible" is not sufficient justification.

Prefer the simplest implementation that preserves the important idea.

---

# Adaptation boundaries

The adaptive layer is expected to be allowed to change things such as:

- ordering of sections
- project selection
- highlighted skills
- amount of technical detail
- introduction / headline emphasis
- supporting content
- calls to action
- visual personality within the design system
- motion and presentation intensity within accessible limits

The adaptive layer should **not** change:

- factual career history
- actual responsibilities
- qualifications
- project outcomes
- claimed skill level
- fundamental professional identity
- accessibility expectations

These boundaries are provisional and should be refined as the project develops.

---

# The three-layer model

## Layer 1 — Stable core

Changes slowly.

Examples:

- professional identity
- core experience
- evidence
- values
- accessibility requirements
- content model
- these principles

## Layer 2 — Adaptive system

Changes deliberately for a particular audience or opportunity.

Examples:

- content priority
- section order
- selected projects
- information depth
- visual personality
- targeted introduction

## Layer 3 — Experimental layer

Can change rapidly.

Examples:

- React / Next.js / Astro experiments
- ChatGPT Sites
- AI matching
- Figma / MCP
- generated configurations
- animation experiments
- alternative hosting
- prototype interaction ideas

An experiment should not automatically become architecture.

---

# Decision test

When proposing a new feature, design change, AI workflow, or technical choice, ask:

1. **Core** — Does this strengthen or weaken the stable professional story?
2. **Audience** — Does this make the portfolio more useful or understandable for the visitor?
3. **Authenticity** — Does it represent my real experience accurately?
4. **Content** — Does it preserve reusable, independent source content?
5. **Accessibility** — Does it remain accessible across adaptive states?
6. **Replaceability** — Can the project survive if this technology or feature is removed?
7. **Complexity** — Is the benefit worth the extra complexity?
8. **Learning** — If the main value is experimentation, can it remain safely in the experimental layer?

### Decision outcomes

- **Adopt** — clearly supports the principles.
- **Prototype** — potentially useful, but evidence is still needed.
- **Experiment only** — useful for learning but not justified as part of the product.
- **Park** — interesting, but currently adds more complexity than value.
- **Reject** — conflicts with the core principles.

---

# Primary decision rule

> **Does this strengthen the core, improve useful adaptation, or enable worthwhile learning without weakening clarity, authenticity, accessibility, or maintainability?**

If the answer is unclear, keep the idea in the experimental layer until it proves its value.

---

# Change history

## v0.1

Initial principles created around the concept of:

> **Stable core, adaptive surface.**

Areas still requiring further definition:

- exact professional core
- primary audiences
- acceptable limits of personalisation
- visual personality model
- initial proof-of-concept scope
