# Core Principles

**Version:** 0.2  
**Status:** Draft  
**Project:** Adaptive Portfolio

## Project constitution

> **This is a documented adaptive portfolio system with a stable professional core and an adaptive presentation layer, designed to communicate the most relevant parts of my work without changing who I am.**

The portfolio may evolve technically and visually, but its purpose is to make my professional value easier to understand, not to manufacture a different identity for every opportunity.

The documentation is part of the product. It should explain the system clearly enough that its logic can be understood independently of the current implementation.

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

---

## 5. Accessibility is part of the system

Accessibility should be designed into the portfolio rather than checked only at the end.

Adaptation must not reduce accessibility.

All visual personalities and component variants should preserve semantic structure, keyboard usability, visible focus, sufficient contrast, understandable hierarchy, accessible forms, appropriate motion, reduced-motion behaviour, and clear interaction states.

A more expressive design mode is not permission to weaken accessibility.

---

## 6. Documentation is part of the product

Important design, architectural, accessibility, AI, and adaptation decisions should be documented clearly enough that the system can be understood independently of its code.

The documentation should explain:
- why the system exists
- how the stable core is defined
- what may adapt
- how decisions are evaluated
- how components and patterns are expected to behave
- what was tested and learned
- why technologies were chosen or rejected

The code should implement and validate the documented system rather than becoming the only source of truth.

> **Documentation defines the system. Code proves and implements the system.**

---

## 7. Technology serves the documented system

Frameworks, hosting platforms, AI tools, and development techniques are implementation choices.

They are not the identity of the project.

React, Next.js, Astro, vanilla JavaScript, ChatGPT Sites, or future tools may be explored, adopted, replaced, or removed.

The content model, principles, and documented system should survive those changes.

---

## 8. Experimentation must be reversible

The portfolio is also a learning environment.

Experimentation with AI, design systems, animation, architecture, and new tools is encouraged, but experiments should be isolated enough that they can fail or be removed without damaging the useful portfolio.

> **Experiments should fail safely.**

---

## 9. Complexity must earn its place

Every meaningful feature should solve at least one clear problem:
- improve understanding
- improve relevance
- improve accessibility
- improve maintainability
- improve the authoring workflow
- improve the documentation
- produce worthwhile learning

"Because it is possible" is not sufficient justification.

Prefer the simplest implementation that preserves the important idea.

---

# Adaptation boundaries

The adaptive layer may change:
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

---

# The three-layer model

## Layer 1 — Stable core
Changes slowly: professional identity, core experience, evidence, values, accessibility requirements, content model, governing principles, core documentation.

## Layer 2 — Adaptive system
Changes deliberately for a particular audience or opportunity: content priority, section order, selected projects, information depth, visual personality, targeted introduction.

## Layer 3 — Experimental layer
Can change rapidly: frameworks, ChatGPT Sites, AI matching, Figma / MCP, generated configurations, animation experiments, alternative hosting, prototype ideas.

An experiment should not automatically become architecture.

---

# Decision test

When proposing a new feature, design change, AI workflow, or technical choice, ask:

1. **Core** — Does this strengthen or weaken the stable professional story?
2. **Audience** — Does this make the portfolio more useful or understandable for the visitor?
3. **Authenticity** — Does it represent my real experience accurately?
4. **Content** — Does it preserve reusable, independent source content?
5. **Accessibility** — Does it remain accessible across adaptive states?
6. **Documentation** — Can the concept and decision be understood without reading the code?
7. **Replaceability** — Can the project survive if this technology or feature is removed?
8. **Complexity** — Is the benefit worth the extra complexity?
9. **Learning** — If the main value is experimentation, can it remain safely in the experimental layer?

### Decision outcomes
- **Adopt**
- **Prototype**
- **Experiment only**
- **Park**
- **Reject**

---

# Primary decision rule

> **Does this strengthen the core, improve useful adaptation, improve the documented system, or enable worthwhile learning without weakening clarity, authenticity, accessibility, or maintainability?**

If the answer is unclear, keep the idea in the experimental layer until it proves its value.

---

# Change history

## v0.2
- Reframed the project as a documented adaptive portfolio system.
- Added documentation as an explicit core principle.
- Changed the technology principle so technology serves the documented system.
- Added documentation clarity to the decision test.
- Clarified that implementation is proof of the system rather than the sole product.

## v0.1
- Initial stable core / adaptive surface principles.
