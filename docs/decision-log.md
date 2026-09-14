# Decision Log

**Version:** 0.1  
**Status:** Active

This file records decisions that materially affect the direction of the Adaptive Portfolio.

It is intentionally lightweight.

Do not record every small implementation choice. Record decisions that would otherwise cause us to ask later:

> **Why did we choose this?**

---

# How to use this log

For an important decision, add a new entry using the template below.

A decision may begin as **Proposed** and later become **Accepted**, **Changed**, or **Rejected**.

---

## Decision template

```md
## DXXX — Decision title

**Status:** Proposed | Accepted | Changed | Rejected  
**Date:** YYYY-MM-DD

### Context

What problem are we trying to solve?

### Options considered

1. Option A
2. Option B
3. Option C

### Decision

What are we choosing?

### Why

Why does this choice best fit the core principles?

### Consequences

What does this make easier, harder, or necessary?

### Revisit when

What would cause us to reconsider this decision?
```

---

# Initial decisions

## D001 — Stable core with adaptive presentation

**Status:** Accepted  
**Date:** 2026-09-12

### Context

The original portfolio idea centred on a "chameleon" website that could adapt strongly to different job applications.

This raised a risk that adaptation could become equivalent to repeatedly redefining professional identity.

### Options considered

1. Build substantially different portfolio experiences for different jobs.
2. Keep one completely fixed portfolio.
3. Keep a stable professional core while allowing presentation and emphasis to adapt.

### Decision

Use a **stable core with an adaptive surface**.

### Why

This preserves authenticity while still allowing the portfolio to make relevant experience easier to discover.

It also provides a clear architectural separation between source content and presentation.

### Consequences

The project will need explicit rules defining:

- what belongs to the stable core
- what may adapt
- what belongs only to the experimental layer

### Revisit when

Revisit if user testing shows that the adaptive layer creates confusion or provides little value.

---

## D002 — AI assists authoring; visitors receive controlled output

**Status:** Proposed  
**Date:** 2026-09-12

### Context

AI could analyse a job description and suggest which portfolio material should be highlighted.

Allowing AI to generate a visitor's experience live could create inconsistency, inaccuracies, or unapproved claims.

### Options considered

1. AI generates portfolio content dynamically for every visitor.
2. AI proposes a configuration that is reviewed before publishing.
3. Do not use AI for personalisation.

### Decision

Initial direction: **AI may propose configurations or content changes, but important job-specific variants should be reviewable and controlled before visitors see them.**

### Why

This preserves the benefits of AI-assisted adaptation while keeping professional claims accurate and the rendered visitor experience predictable.

### Consequences

The system may eventually require a configuration format and an approval/publishing workflow.

### Revisit when

Revisit after a manual adaptive prototype has been tested.

---

## D003 — Technology choice is deferred

**Status:** Accepted  
**Date:** 2026-09-12

### Context

Possible implementation approaches include ChatGPT Sites, React, Next.js, Astro, vanilla JavaScript, and other tools.

Choosing too early could cause the architecture to be shaped around a framework rather than around the portfolio.

### Options considered

1. Choose a final framework immediately.
2. Design the conceptual system first and test implementation options later.

### Decision

Defer the final technology choice.

### Why

The initial work should validate:

- stable core
- adaptive content
- reusable components
- personality variation
- usefulness to real visitors

These concepts should remain portable.

### Consequences

Early prototypes may use temporary technologies.

Prototype code should not automatically be treated as final architecture.

### Revisit when

Revisit after the first small adaptive proof of concept has clearly defined its functional requirements.

---

# Next decisions likely to be needed

These are questions, not yet decisions:

- What is the exact stable professional core?
- Who are the primary portfolio audiences?
- Which content properties may adapt?
- How many visual personality levels are genuinely useful?
- What is the smallest proof of concept that can validate the adaptive idea?
- How should job-specific configurations be represented?
